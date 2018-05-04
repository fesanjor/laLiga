import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
@Injectable()
export class EquiposService {

  equipos:any[] = [];
  cargando:boolean=true;

    constructor(private http:Http) {
        this.cargar_equipos();
    }

      public cargar_equipos(){
            this.cargando=true;

            let promesa = new Promise((resolve, reject)=>{
                this.http.get('https://laliga-63720.firebaseio.com/equipos-idx.json')
                               .subscribe(res => {

                                  this.cargando=false;
                                  this.equipos = res.json();
                                  resolve();


                               });
            });
            return promesa;

      }
      public cargar_equipo( cod:string){
             return this.http.get(`https://laliga-63720.firebaseio.com/equipos/${ cod }.json`)
      }


}

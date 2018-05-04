import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
@Injectable()
export class InfoService {

  info:any ={};
  cargada:boolean=false;
  cargada_sobre_nosotros:boolean=false;
  creador:any[]=[];
  constructor( public http:Http) {
      this.carga_info();
      this.carga_sobre_nosotros();
  }
  public carga_info(){
        this.http.get("assets/data/info.pagina.json")
                  .subscribe(data =>{
                  this.cargada=true;
                  this.info=data.json();
                  });

  }

  public carga_sobre_nosotros(){
          this.http.get("https://laliga-63720.firebaseio.com/creador.json")
                    .subscribe(data =>{
                    this.cargada_sobre_nosotros=true;
                    this.creador=data.json();
                    });
  }


}

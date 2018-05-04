import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EquiposService } from "../../services/equipos.service";

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
})
export class EquipoComponent {
  equipo:any = undefined;
  cod:string = undefined;
  constructor( private route:ActivatedRoute,
                private _ps:EquiposService) {

          route.params.subscribe( parametros => {
          _ps.cargar_equipo( parametros['id'] )
          .subscribe( res => {
              this.cod = parametros['id'];
              console.log(this.cod);
              this.equipo = res.json();
         });

   })

   }
}

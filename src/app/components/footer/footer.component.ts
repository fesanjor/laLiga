import { Component} from '@angular/core';
import { InfoService }from"../../services/info.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {

  anio:number = new Date().getFullYear();
  constructor( public _is:InfoService ){}


}

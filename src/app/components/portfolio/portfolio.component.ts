import { Component} from '@angular/core';
import { EquiposService }from "../../services/equipos.service"
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
})
export class PortfolioComponent{

  constructor( public _ps:EquiposService ){


  }

}

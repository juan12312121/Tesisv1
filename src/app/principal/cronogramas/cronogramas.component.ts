import { Component } from '@angular/core';
import { AsideComponent } from '../../componentes/aside/aside.component';
import { NavbarComponent } from '../../componentes/navbar/navbar.component';


@Component({
  selector: 'app-cronogramas',
  standalone: true,
  imports: [AsideComponent,NavbarComponent],
  templateUrl: './cronogramas.component.html',
  styleUrl: './cronogramas.component.css'
})
export class CronogramasComponent {

}

import { Component } from '@angular/core';
import { AsideComponent } from '../../componentes/aside/aside.component';
import { NavbarComponent } from '../../componentes/navbar/navbar.component';



@Component({
  selector: 'app-proyecto',
  standalone: true,
  imports: [NavbarComponent,AsideComponent],
  templateUrl: './proyecto.component.html',
  styleUrl: './proyecto.component.css'
})
export class ProyectoComponent {

}

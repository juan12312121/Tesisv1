import { Component } from '@angular/core';
import { AsideComponent } from '../../componentes/aside/aside.component';
import { CrearProyectoComponent } from '../../componentes/crear-proyecto/crear-proyecto.component';
import { NavbarComponent } from '../../componentes/navbar/navbar.component';




@Component({
  selector: 'app-proyecto',
  standalone: true,
  imports: [NavbarComponent,AsideComponent,CrearProyectoComponent],
  templateUrl: './proyecto.component.html',
  styleUrl: './proyecto.component.css'
})
export class ProyectoComponent {

}

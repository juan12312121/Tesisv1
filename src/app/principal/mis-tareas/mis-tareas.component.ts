import { Component } from '@angular/core';
import { AsideComponent } from '../../componentes/aside/aside.component';
import { NavbarComponent } from '../../componentes/navbar/navbar.component';

@Component({
  selector: 'app-mis-tareas',
  standalone: true,
  imports: [NavbarComponent,AsideComponent],
  templateUrl: './mis-tareas.component.html',
  styleUrl: './mis-tareas.component.css'
})
export class MisTareasComponent {

}

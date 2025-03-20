import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AsideComponent } from '../../componentes/aside/aside.component';
import { NavbarComponent } from '../../componentes/navbar/navbar.component';


@Component({
  selector: 'app-mis-tareas',
  standalone: true,
  imports: [NavbarComponent, AsideComponent,CommonModule],
  templateUrl: './mis-tareas.component.html',
  styleUrls: ['./mis-tareas.component.css']
})
export class MisTareasComponent {
  // 'cards' para vista de tarjetas, 'list' para vista en lista
  viewMode: 'cards' | 'list' = 'cards';

  setViewMode(mode: 'cards' | 'list'): void {
    this.viewMode = mode;
  }
}

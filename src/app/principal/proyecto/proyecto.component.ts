import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AsideComponent } from '../../componentes/aside/aside.component';
import { ComponenteTablerosComponent } from "../../componentes/componente-tableros/componente-tableros.component";
import { CrearProyectoComponent } from '../../componentes/crear-proyecto/crear-proyecto.component';
import { NavbarComponent } from '../../componentes/navbar/navbar.component';

@Component({
  selector: 'app-proyecto',
  standalone: true,
  imports: [NavbarComponent, AsideComponent, CrearProyectoComponent, ComponenteTablerosComponent, CommonModule],
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  // Por defecto se muestra la vista de lista.
  isGridView: boolean = false;

  ngOnInit(): void {
    // Recupera la vista guardada en localStorage, si existe.
    const savedView = localStorage.getItem('proyectoView');
    if (savedView) {
      this.isGridView = savedView === 'grid';
    }
  }

  // Cambia a vista de lista y guarda la preferencia.
  showListView(): void {
    this.isGridView = false;
    localStorage.setItem('proyectoView', 'list');
  }

  // Cambia a vista de cuadrícula y guarda la preferencia.
  showGridView(): void {
    this.isGridView = true;
    localStorage.setItem('proyectoView', 'grid');
  }
}

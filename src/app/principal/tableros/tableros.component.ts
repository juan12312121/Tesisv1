import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AsideComponent } from '../../componentes/aside/aside.component';
import { ComponenteTablerosComponent } from '../../componentes/componente-tableros/componente-tableros.component';
import { NavbarComponent } from '../../componentes/navbar/navbar.component';

@Component({
  selector: 'app-tableros',
  standalone: true,
  imports: [NavbarComponent, FormsModule, AsideComponent, CommonModule, DragDropModule, ComponenteTablerosComponent],

  templateUrl: './tableros.component.html',
  styleUrls: ['./tableros.component.css']
})
export class TablerosComponent { }

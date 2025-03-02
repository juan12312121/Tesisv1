import { Component } from '@angular/core';
import { AsideComponent } from "../../componentes/aside/aside.component";
import { NavbarComponent } from '../../componentes/navbar/navbar.component';


@Component({
  selector: 'app-tableros',
  standalone: true,
  imports: [NavbarComponent, AsideComponent],
  templateUrl: './tableros.component.html',
  styleUrl: './tableros.component.css'
})
export class TablerosComponent {

}

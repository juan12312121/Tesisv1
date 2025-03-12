import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importar RouterModule para usar routerLink

@Component({
  selector: 'app-nav-principal',
  standalone: true,
  imports: [RouterModule],  // Importar RouterModule aquí
  templateUrl: './nav-principal.component.html',
  styleUrl: './nav-principal.component.css'
})
export class NavPrincipalComponent {}

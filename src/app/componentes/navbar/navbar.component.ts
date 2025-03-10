import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout() {
    // Aquí coloca la lógica para cerrar sesión, como limpiar tokens y redireccionar.
    console.log('Cerrando sesión...');
    // Ejemplo: this.authService.logout();
    // Luego, redirige a la página de login.
  }
}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // Import RouterLink if needed for standalone components

@Component({
  selector: 'app-navbar',
  standalone: true,  // Declare this component as standalone
  imports: [RouterLink],  // Import RouterLink to handle routing for standalone components
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']  // Fix 'styleUrl' to 'styleUrls'
})
export class NavbarComponent {
  // Your logic here (if needed)
}

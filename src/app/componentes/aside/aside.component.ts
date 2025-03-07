import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component"; // Import RouterLink if needed for standalone components

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [RouterLink, NavbarComponent],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {

}

import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {
  username: string = '';
  password: string = '';
  passwordVisible: boolean = false;
  rememberMe: boolean = false;

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    console.log('Usuario:', this.username);
    console.log('Contraseña:', this.password);
    console.log('Recordar sesión:', this.rememberMe);
  }

  ngAfterViewInit(): void {
    const shapes = document.querySelectorAll<HTMLElement>('.shape');
    shapes.forEach(shape => {
      shape.addEventListener('mouseover', () => {
        shape.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        shape.style.transform = 'scale(1.1) rotate(10deg)';
      });
      shape.addEventListener('mouseout', () => {
        shape.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
        shape.style.transform = 'scale(1) rotate(0deg)';
      });
    });
  }
}

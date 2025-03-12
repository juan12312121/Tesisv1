import { AfterViewInit, Component, HostListener } from '@angular/core';
import { NavPrincipalComponent } from '../../componentes/nav-principal/nav-principal.component';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [NavPrincipalComponent],
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.handleScroll(); 
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.handleScroll();
  }

  private handleScroll(): void {
    const navbar = document.querySelector('nav');
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    const features = document.querySelector('.features');
    const featureCards = document.querySelectorAll('.feature-card');
    const featureSection = document.querySelector('.features');

    if (features && featureSection) {
      const featuresPosition = features.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (featuresPosition < screenPosition) {
        featureSection.classList.add('section-visible');

        featureCards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add('visible');
          }, 150 * index);
        });
      }
    }
  }
}

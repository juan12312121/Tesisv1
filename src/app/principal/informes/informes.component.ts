import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  ArcElement,
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  DoughnutController,
  Legend,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js'; // Importar BarController y BarElement
import { AsideComponent } from '../../componentes/aside/aside.component';
import { NavbarComponent } from '../../componentes/navbar/navbar.component';

// Registrar los nuevos componentes, incluyendo BarController para gráficos de barras
Chart.register(
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  ArcElement,
  LineController, // Registrar LineController para gráficos de línea
  DoughnutController, // Registrar DoughnutController para gráficos de dona
  BarController, // Registrar BarController para gráficos de barras
  BarElement // Registrar BarElement para los gráficos de barras
);

@Component({
  selector: 'app-informes',
  standalone: true,
  imports: [NavbarComponent, AsideComponent, CommonModule, FormsModule],
  templateUrl: './informes.component.html',
  styleUrls: ['./informes.component.css'],
})
export class InformesComponent implements AfterViewInit {
  selectedPeriod: string = 'sprintActual';
  burndownLegend: any;
  metrics: any;
  taskDistributionLegend: any;
  activities: any;
  tasks: any;

  ngAfterViewInit() {
    // Crear los gráficos después de la vista
    this.createBurndownChart();
    this.createTaskDistributionChart();
    this.createWorkloadChart(); // Crear el gráfico de barras para la carga de trabajo
  }

  // Crear gráfico de Burndown (línea)
  createBurndownChart() {
    const burndownChart = new Chart('burndownChart', {
      type: 'line',
      data: {
        labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
        datasets: [
          {
            data: [50, 40, 30, 20, 10, 5, 3],
            label: 'Ideal',
            borderColor: '#0052cc',
            backgroundColor: 'rgba(0, 82, 204, 0.2)',
            fill: true,
          },
          {
            data: [50, 45, 35, 25, 15, 10, 5],
            label: 'Real',
            borderColor: '#36b37e',
            backgroundColor: 'rgba(54, 179, 126, 0.2)',
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,  // Permite ajustar el tamaño sin mantener la relación de aspecto
        scales: {
          x: {
            title: {
              display: true,
              text: 'Días de la semana',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Tareas restantes',
            },
            min: 0,
            max: 60,
          },
        },
      },
    });
  }
  

  // Crear gráfico de distribución de tareas (doughnut)
  createTaskDistributionChart() {
    const taskDistributionChart = new Chart('taskDistributionChart', {
      type: 'doughnut',
      data: {
        labels: ['Completadas', 'En progreso', 'Por hacer'],
        datasets: [
          {
            data: [52, 32, 16],
            backgroundColor: ['#36b37e', '#0052cc', '#5e6c84'],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: (tooltipItem) => {
                return tooltipItem.raw + '%';
              },
            },
          },
        },
      },
    });
  }

  // Crear gráfico de barras para la carga de trabajo por usuario
  createWorkloadChart() {
    const workloadChart = new Chart('workloadChart', {
      type: 'bar', // Tipo de gráfico de barras
      data: {
        labels: [
          'Miguel Sánchez',
          'Ana López',
          'Juan Díaz',
          'Carlos Rodríguez',
          'Laura Martínez',
        ], // Nombres de los usuarios
        datasets: [
          {
            label: 'Tareas Asignadas', // Dataset para tareas asignadas
            data: [10, 7, 5, 8, 6], // Número de tareas asignadas a cada usuario
            backgroundColor: '#0052cc', // Color de las barras para tareas asignadas (azul)
            borderColor: '#0052cc', // Color del borde para tareas asignadas
            borderWidth: 1, // Ancho del borde
          },
          {
            label: 'Tareas Completadas', // Dataset para tareas completadas
            data: [6, 4, 3, 5, 4], // Número de tareas completadas por cada usuario
            backgroundColor: '#36b37e', // Color de las barras para tareas completadas (verde)
            borderColor: '#36b37e', // Color del borde para tareas completadas
            borderWidth: 1, // Ancho del borde
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Usuarios', // Título para el eje X
            },
          },
          y: {
            title: {
              display: true,
              text: 'Tareas', // Título para el eje Y
            },
            beginAtZero: true, // Asegura que el eje Y empiece desde cero
          },
        },
      },
    });
  }
}

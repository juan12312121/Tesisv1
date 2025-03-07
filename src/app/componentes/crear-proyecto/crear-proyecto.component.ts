import { CommonModule } from '@angular/common'; // Import CommonModule
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule], // Agregar CommonModule aquí
  selector: 'app-crear-proyecto',
  templateUrl: './crear-proyecto.component.html',
  styleUrls: ['./crear-proyecto.component.css']
})
export class CrearProyectoComponent {
  
  // Variable que controla la visibilidad del modal
  modalVisible = false;
  
  // Variables para el formulario
  nombreProyecto: string = '';
  categoriaSeleccionada: string = '';
  tipoSeleccionado: string = '';
  descripcionProyecto: string = '';

  // Función para abrir el modal
  abrirModal() {
    console.log('Abrir modal');
    this.modalVisible = true;
  }

  // Función para cerrar el modal
  cerrarModal() {
    console.log('Cerrar modal');
    this.modalVisible = false;
  }

  // Función para manejar el cambio de categoría seleccionada
  cambiarCategoria(event: any) {
    this.categoriaSeleccionada = event.target.value;
    console.log('Categoría seleccionada:', this.categoriaSeleccionada);
  }

  // Función para manejar el envío del formulario
  guardarProyecto() {
    // Aquí puedes hacer lo que desees con los datos del formulario,
    // como enviarlos a un servicio o hacer validaciones antes de guardarlos.
    const proyecto = {
      nombre: this.nombreProyecto,
      categoria: this.categoriaSeleccionada,
      tipo: this.tipoSeleccionado,
      descripcion: this.descripcionProyecto
    };
    
    console.log('Proyecto guardado:', proyecto);
    // Puedes cerrar el modal después de guardar el proyecto
    this.cerrarModal();
  }
}

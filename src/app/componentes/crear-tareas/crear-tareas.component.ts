import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

export interface Task {
  id: string;
  title: string;
  description: string;
  type: string;
  priority?: string;
  assignee: string;
  dueDate: string;
}

export interface Column {
  id: string;
  title: string;
  tasks: Task[];
}

@Component({
  selector: 'app-crear-tareas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crear-tareas.component.html',
  styleUrls: ['./crear-tareas.component.css']
})
export class CrearTareasComponent {
    @Input() modalVisible: boolean = false;
    @Input() selectedColumn: Column | null = null;
    @Output() closeModal = new EventEmitter<void>();
  
    // Propiedades para la selección de usuario
    dropdownVisible: boolean = false;
    selectedUser: { name: string, code: string, avatar: string } | null = null;
    
    // Lista de usuarios disponibles
    users = [
      { name: 'Miguel Sánchez', code: 'MS', avatar: '/api/placeholder/100/100' },
      { name: 'Juan Díaz', code: 'JD', avatar: '/api/placeholder/100/100' },
      { name: 'Ana López', code: 'AL', avatar: '/api/placeholder/100/100' }
    ];
  
    // Alterna la visibilidad del dropdown de usuarios
    toggleUserDropdown() {
      console.log('toggleUserDropdown triggered. Current state:', this.dropdownVisible);
      this.dropdownVisible = !this.dropdownVisible;
      console.log('New dropdownVisible state:', this.dropdownVisible);
    }
    
  
    // Método para seleccionar un usuario y cerrar el dropdown
    selectUser(user: { name: string, code: string, avatar: string }) {
      this.selectedUser = user;
      this.dropdownVisible = false;
    }
  
    // Agrega una nueva tarea utilizando los valores del formulario
    addTask(taskForm: NgForm) {
      if (taskForm.invalid || !this.selectedColumn) {
        console.error('Faltan datos obligatorios para agregar la tarea.');
        return;
      }
      
      const formValues = taskForm.value;
      // Se utiliza el usuario seleccionado, si no se selecciona ninguno se asigna "Sin asignar"
      const assignee = formValues.assignee || (this.selectedUser ? this.selectedUser.code : 'Sin asignar');
  
      const newTask: Task = {
        id: formValues.id || `MOB-${this.selectedColumn.tasks.length + 356}`,
        title: formValues.title,
        description: formValues.description || '',
        type: formValues.type || 'Story',
        priority: formValues.priority || 'Normal',
        assignee: assignee,
        dueDate: formValues.dueDate || ''
      };
      
      this.selectedColumn.tasks.push(newTask);
      taskForm.resetForm();
      this.close();
    }
  
    // Cierra el modal emitiendo el evento correspondiente
    close() {
      this.closeModal.emit();
    }
  }
  
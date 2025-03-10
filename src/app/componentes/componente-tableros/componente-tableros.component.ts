import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Column, CrearTareasComponent, Task } from '../crear-tareas/crear-tareas.component';

@Component({
  selector: 'app-componente-tableros',
  standalone: true,
  imports: [CommonModule, DragDropModule, FormsModule, CrearTareasComponent],
  templateUrl: './componente-tableros.component.html',
  styleUrls: ['./componente-tableros.component.css']
})
export class ComponenteTablerosComponent {

  columns: Column[] = [
    {
      id: 'col1',
      title: 'Por hacer',
      tasks: [
        {
          id: 'MOB-356',
          title: 'Implementar notificaciones push',
          description: 'Integrar sistema de notificaciones push para alertas en tiempo real a los usuarios.',
          type: 'Story',
          priority: 'Alta',
          assignee: 'MS',
          dueDate: '8 Mar'
        },
        {
          id: 'MOB-358',
          title: 'Actualizar librerías de UI',
          description: 'Actualizar todas las librerías de UI a las últimas versiones disponibles.',
          type: 'Task',
          assignee: 'JD',
          dueDate: '5 Mar'
        }
      ]
    }
  ];

  modalVisible = false;
  selectedColumn: Column | null = null;
  addingColumn: boolean = false;
  newColumnName: string = '';

  openModal(column?: Column) {
    this.selectedColumn = column ? column : this.columns[0];
    console.log('openModal llamado. Columna seleccionada:', this.selectedColumn);
    this.modalVisible = true;
    console.log('modalVisible establecido en:', this.modalVisible);
  }
  
  closeModal() {
    console.log('closeModal llamado.');
    this.modalVisible = false;
    this.selectedColumn = null;
    console.log('modalVisible:', this.modalVisible, 'selectedColumn:', this.selectedColumn);
  }
  
  onTaskDrop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  addColumn(newColumnTitle: string) {
    const newColumn: Column = {
      id: `col${this.columns.length + 1}`,
      title: newColumnTitle,
      tasks: []
    };
    this.columns.push(newColumn);
  }

  toggleAddColumn() {
    this.addingColumn = !this.addingColumn;
    if (!this.addingColumn) {
      this.newColumnName = '';
    }
  }

  saveNewColumn() {
    if (this.newColumnName.trim() !== '') {
      this.addColumn(this.newColumnName);
      this.newColumnName = '';
      this.addingColumn = false;
    }
  }

  getConnectedListIds(currentColumn: Column): string[] {
    return this.columns
      .filter(column => column.id !== currentColumn.id)
      .map(column => column.id);
  }
}

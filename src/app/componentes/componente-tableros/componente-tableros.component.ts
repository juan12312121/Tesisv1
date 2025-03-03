import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Component } from '@angular/core';

interface Task {
  id: string;
  title: string;
  description: string;
  type: string;
  priority?: string;
  assignee: string;
  dueDate: string;
}

interface Column {
  id: string;
  title: string;
  tasks: Task[];
}

@Component({
  selector: 'app-componente-tableros',
  standalone: true,
  imports: [CommonModule, DragDropModule,FormsModule], // Se agregó DragDropModule
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
    this.modalVisible = true;
  }

  closeModal() {
    this.modalVisible = false;
    this.selectedColumn = null;
  }

  addTask(formValues: { title: string; id: string; description: string; type: string; priority?: string; assignee: string; dueDate: string; }) {
    if (!this.selectedColumn) return;

    const newTask: Task = {
      id: formValues.id || `MOB-${this.selectedColumn.tasks.length + 356}`,
      title: formValues.title,
      description: formValues.description,
      type: formValues.type,
      priority: formValues.priority,
      assignee: formValues.assignee,
      dueDate: formValues.dueDate
    };
    this.selectedColumn.tasks.push(newTask);
    this.closeModal();
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

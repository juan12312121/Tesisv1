import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Invitee {
  email: string;
  role: string;
  roleText: string;
}

interface Alert {
  type: 'success' | 'error' | 'info';
  message: string;
  visible: boolean;
}

@Component({
  selector: 'app-modal-invitar-usuarios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal-invitar-usuarios.component.html',
  styleUrls: ['./modal-invitar-usuarios.component.css'],
})
export class ModalInvitarUsuariosComponent {
  // Controla la visibilidad del modal
  showModal: boolean = false;
  
  // Propiedades vinculadas al formulario
  newInviteeEmail: string = '';
  newInviteeRole: string = 'viewer';
  
  // Lista de usuarios a invitar
  invitees: Invitee[] = [];
  
  // Sistema de alertas personalizadas
  alert: Alert = {
    type: 'info',
    message: '',
    visible: false
  };

  // Abre el modal
  openInviteModal(): void {
    this.showModal = true;
  }

  // Cierra el modal y resetea el formulario
  closeInviteModal(): void {
    this.showModal = false;
    this.resetInviteForm();
  }

  // Resetea los campos del formulario
  resetInviteForm(): void {
    this.newInviteeEmail = '';
    this.newInviteeRole = 'viewer';
  }

  // Muestra una alerta personalizada
  showAlert(type: 'success' | 'error' | 'info', message: string): void {
    this.alert = {
      type,
      message,
      visible: true
    };
    
    // Auto-cerrar la alerta después de 3 segundos
    setTimeout(() => {
      this.alert.visible = false;
    }, 3000);
  }

  // Cierra la alerta manualmente
  closeAlert(): void {
    this.alert.visible = false;
  }

  // Agrega un invitado validando el correo y evitando duplicados
  addInvitee(): void {
    const email = this.newInviteeEmail.trim();
    const role = this.newInviteeRole;
    const roleText = this.getRoleText(role);

    if (email && this.validateEmail(email)) {
      if (!this.invitees.some(invitee => invitee.email === email)) {
        this.invitees.push({ email, role, roleText });
        this.newInviteeEmail = '';
        this.showAlert('success', 'Usuario agregado correctamente');
      } else {
        this.showAlert('error', 'Este correo ya ha sido agregado a la lista');
      }
    } else {
      this.showAlert('error', 'Por favor, ingrese un correo electrónico válido');
    }
  }

  // Elimina un invitado de la lista
  removeInvitee(email: string): void {
    this.invitees = this.invitees.filter(invitee => invitee.email !== email);
    this.showAlert('info', 'Usuario eliminado de la lista');
  }

  // Envía las invitaciones (simulación)
  sendInvites(): void {
    if (this.invitees.length > 0) {
      console.log('Enviando invitaciones a:', this.invitees);
      this.showAlert('success', `Se han enviado ${this.invitees.length} invitaciones`);
      this.invitees = [];
      this.closeInviteModal();
    } else {
      this.showAlert('error', 'Agregue al menos un usuario para enviar invitaciones');
    }
  }

  // Método de validación de correo
  validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // Definimos isValidEmail para usarlo en la plantilla (puede envolver validateEmail)
  isValidEmail(email: string): boolean {
    return this.validateEmail(email);
  }

  // Retorna el texto del rol basado en el valor seleccionado
  getRoleText(role: string): string {
    switch (role) {
      case 'viewer': return 'Espectador';
      case 'member': return 'Miembro';
      case 'admin': return 'Administrador';
      default: return role;
    }
  }

  // Devuelve una clase CSS según el rol para estilos adicionales
  getRoleClass(role: string): string {
    switch (role) {
      case 'viewer': return 'role-viewer';
      case 'member': return 'role-member';
      case 'admin': return 'role-admin';
      default: return '';
    }
  }
}
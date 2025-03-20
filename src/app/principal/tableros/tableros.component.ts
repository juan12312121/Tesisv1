import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AsideComponent } from '../../componentes/aside/aside.component';
import { ChatComponent } from '../../componentes/chat/chat.component';
import { ComponenteTablerosComponent } from '../../componentes/componente-tableros/componente-tableros.component';
import { ModalInvitarUsuariosComponent } from '../../componentes/modal-invitar-usuarios/modal-invitar-usuarios.component';
import { NavbarComponent } from '../../componentes/navbar/navbar.component';



interface Invitee {
  email: string;
  role: string;
  roleText: string;
}

@Component({
  selector: 'app-tableros',
  standalone: true,
  imports: [NavbarComponent, FormsModule, AsideComponent, CommonModule, DragDropModule, ComponenteTablerosComponent,ModalInvitarUsuariosComponent,ChatComponent],
  templateUrl: './tableros.component.html',
  styleUrls: ['./tableros.component.css']
})
export class TablerosComponent {
  invitees: Invitee[] = [];

  // Function to open the invite modal
  openInviteModal(): void {
    const inviteModal = document.getElementById('inviteModal');
    if (inviteModal) {
      inviteModal.style.display = 'flex';
    }
  }

  // Function to close the invite modal
  closeInviteModal(): void {
    const inviteModal = document.getElementById('inviteModal');
    if (inviteModal) {
      inviteModal.style.display = 'none';
    }
    this.resetInviteForm();
  }

  // Function to reset the form input fields
  resetInviteForm(): void {
    const emailInput = document.getElementById('email-input') as HTMLInputElement;
    const roleSelect = document.getElementById('role-select') as HTMLSelectElement;
    if (emailInput) {
      emailInput.value = '';
    }
    if (roleSelect) {
      roleSelect.value = 'viewer';
    }
  }

  // Function to add an invitee to the list
  addInvitee(): void {
    const emailInput = document.getElementById('email-input') as HTMLInputElement;
    const roleSelect = document.getElementById('role-select') as HTMLSelectElement;
    const email = emailInput?.value.trim();
    const role = roleSelect?.value;
    const roleText = roleSelect?.options[roleSelect.selectedIndex].text;

    if (email && this.validateEmail(email)) {
      // Check if email already exists in invitees
      if (!this.invitees.some(invitee => invitee.email === email)) {
        this.invitees.push({ email, role, roleText });
        this.renderInvitees();
        if (emailInput) emailInput.value = '';
      } else {
        alert('Este correo ya ha sido agregado a la lista.');
      }
    } else {
      alert('Por favor, ingrese un correo electrónico válido.');
    }
  }

  // Function to remove an invitee from the list
  removeInvitee(email: string): void {
    this.invitees = this.invitees.filter(invitee => invitee.email !== email);
    this.renderInvitees();
  }

  // Function to render the invitees list
  renderInvitees(): void {
    const container = document.getElementById('invitee-chips');
    if (container) {
      container.innerHTML = '';
      this.invitees.forEach(invitee => {
        const chip = document.createElement('div');
        chip.className = 'chip';
        chip.innerHTML = `
          <span class="chip-label">${invitee.email}</span>
          <span class="chip-role">${invitee.roleText}</span>
          <span class="chip-remove" (click)="removeInvitee('${invitee.email}')">
            <i class="fas fa-times"></i>
          </span>
        `;
        container.appendChild(chip);
      });
    }

    // Update send button state
    const sendButton = document.getElementById('send-invites-btn') as HTMLButtonElement;
    if (sendButton) {
      sendButton.disabled = this.invitees.length === 0;
    }
  }

  // Function to send invitations (mock functionality)
  sendInvites(): void {
    if (this.invitees.length > 0) {
      // Normally make an API call to send invitations
      console.log('Sending invitations to:', this.invitees);
      alert(`Se han enviado ${this.invitees.length} invitaciones`);
      this.invitees = [];
      this.renderInvitees();
      this.closeInviteModal();
    }
  }

  // Function to validate the email format
  validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
}

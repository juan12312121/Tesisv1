import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'] // Correct plural form "styleUrls"
})
export class ChatComponent {
  // Controls whether the chat is open or closed
  isChatOpen: boolean = false; // Changed to false so it starts closed

  // Example messages (for demonstration)
  messages = [
    { type: 'incoming', sender: 'Carlos Martínez', content: 'Hola equipo, ¿cómo va la implementación del modo oscuro?', time: '10:30 AM' },
    { type: 'outgoing', content: 'Ya terminé la implementación, está en revisión', time: '10:32 AM' },
    { type: 'incoming', sender: 'María González', content: 'Excelente trabajo. Lo revisaré después de la reunión diaria', time: '10:33 AM' },
    { type: 'incoming', sender: 'Carlos Martínez', content: '¿Alguien puede ayudarme con el bug del formulario de contacto?', time: '10:45 AM' }
  ];

  // Variable to store the new message
  newMessage: string = '';

  // Function that toggles the chat state (open/close)
  toggleChat(): void {
    this.isChatOpen = !this.isChatOpen;
  }

  // Function to send messages (basic example)
  sendMessage(): void {
    if (this.newMessage.trim() !== '') {
      // Add the message to the array (type "outgoing")
      this.messages.push({ 
        type: 'outgoing', 
        content: this.newMessage, 
        time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) 
      });
      this.newMessage = '';
    }
  }
}
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class InscriptionComponent {
  username = signal('');
  email = signal('');
  password = signal('');
  errorMessage = signal('');

  onSubmit() {
    if (this.isFormValid()) {
      console.log('Inscription envoyée avec :', this.username(), this.email(), this.password());
      this.errorMessage.set('Inscription simulée avec succès.');
    } else {
      this.errorMessage.set('Champs invalides.');
    }
  }

  isFormValid(): boolean {
    return (
      this.username().trim() !== '' &&
      this.email().trim() !== '' &&
      this.password().trim().length >= 6
    );
  }
}

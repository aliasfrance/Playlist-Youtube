import { Component, inject, signal} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // Données du formulaire
  username = signal('');
  password = signal('');
  errorMessage = signal('');
  
  onSubmit() {
    if (this.isFormValid()) {
      // Pas d'authentification pour le moment
      console.log('Formulaire envoyé avec :', this.username(), this.password());
      this.errorMessage.set('Connexion simulée avec succès.'); // message factice
    } else {
      this.errorMessage.set('Identifiants invalides');
    }
  }

  isFormValid(): boolean {
    return this.username().trim() !== '' && this.password().trim().length >= 6;
  }
}


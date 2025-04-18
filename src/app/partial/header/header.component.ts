import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // Variable pour simuler l'état de connexion de l'utilisateur
  isLoggedIn(): boolean {
    // À modifier selon la gestion de l'authentification réelle
    return !!localStorage.getItem('user'); // Si un utilisateur est dans localStorage, il est connecté
  }

  // Fonction de déconnexion
  logout() {
    // Ici, on efface la donnée d'utilisateur dans le localStorage pour simuler la déconnexion
    localStorage.removeItem('user');
    // Ici, tu peux ajouter une redirection ou toute autre logique après la déconnexion
  }

 
}

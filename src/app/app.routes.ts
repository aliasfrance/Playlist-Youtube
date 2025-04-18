import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },//page d'accueil
  { path: 'login', component:LoginComponent}, //page de connexion
  { path: 'inscription', component:InscriptionComponent}, //page d'inscription
  { path: '**', redirectTo: '' } // redirection en cas de route non trouvée
 
];

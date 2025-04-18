import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./partial/header/header.component";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { InscriptionComponent } from './pages/inscription/inscription.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent, LoginComponent, InscriptionComponent],
  templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlaylistYoutube';
}

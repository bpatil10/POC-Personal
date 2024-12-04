import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';



@Component({
    selector: 'app-root',
    imports: [RouterOutlet, RouterModule, HeaderComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hospital_app';
}

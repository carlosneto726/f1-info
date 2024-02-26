import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { F1LivetimingService } from './services/f1-livetiming.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'f1-info';

  constructor(f1Service: F1LivetimingService) {
    f1Service.getAllDrivers().subscribe(
      (driver) => console.log(driver)
    );
  }
}


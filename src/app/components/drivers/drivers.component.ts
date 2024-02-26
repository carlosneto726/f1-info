import { Component } from '@angular/core';
import { DriverComponent } from './driver/driver.component';

@Component({
  selector: 'app-drivers',
  standalone: true,
  imports: [DriverComponent],
  templateUrl: './drivers.component.html',
  styleUrl: './drivers.component.css'
})
export class DriversComponent {

}

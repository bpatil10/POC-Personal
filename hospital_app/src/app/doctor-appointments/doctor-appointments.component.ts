import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-appointment-dashboard',
    templateUrl: './doctor-appointments.component.html',
    styleUrls: ['./doctor-appointments.component.scss'],
    imports: [CommonModule, MatButtonModule, MatIconModule]
})
export class DoctorAppointmentsComponent implements OnInit {
  appointments = [
    {
      firstName: 'Ram',
      lastName: 'Patil',
      email: 'rampatil01@gmail.com',
      contact: '8555262541',
      date: '15-12-2024',
      time: '11.00.00 AM'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}

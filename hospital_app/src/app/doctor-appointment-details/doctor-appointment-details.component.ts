import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-appointments',
    templateUrl: './doctor-appointment-details.component.html',
    imports: [CommonModule],
    styleUrls: ['./doctor-appointment-details.component.scss']
})
export class DoctorAppointmentDetailsComponent implements OnInit {
  appointments = [
    {
      firstName: 'Ram',
      lastName: 'Patil',
      email: 'rampatil01@gmail.com',
      contact: '8555262541',
      appointmentDate: '15-12-2024',
      appointmentTime: '11:00:00 AM',
      status: 'Confirmed'
    },
    {
      firstName: 'Shyam',
      lastName: 'Lal',
      email: 'shyam@gmail.com',
      contact: '9876543210',
      appointmentDate: '30-12-2024',
      appointmentTime: '11:30:00 AM',
      status: 'Pending'
    }
  ];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  acceptAppointment(appointment: any): void {
    appointment.status = 'Confirmed';
    alert('Appointment has been accepted!');
  }

  rescheduleAppointment(appointment: any): void {
    alert('Appointment will be rescheduled. Our team will contact you shortly.');
  }
}

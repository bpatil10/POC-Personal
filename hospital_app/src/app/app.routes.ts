import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',loadComponent:()=>import('./doctor-registration/doctor-registration.component').then(r=>r.DoctorRegistrationComponent),
        title:'Registration Page'
       
   },
   {
    path: 'login',
    loadComponent: () => import('./doctor-login/doctor-login.component').then(r => r.DoctorLoginComponent),
    title: 'Login Page'
  },
{
  path: 'doctor-dashboard',
  loadComponent: () => import('./doctor-dashboard/doctor-dashboard.component').then(r => r.DoctorDashboardComponent),
  title: 'Dashboard Page'
},
{
  path: 'doctor-appointments',
  loadComponent: () => import('./doctor-appointments/doctor-appointments.component').then(r => r.DoctorAppointmentsComponent),
  title: 'Doctor Upcoming Appointments'
},
{
  path: 'doctor-appointment-details',  // Fixed the route path here
  loadComponent: () => import('./doctor-appointment-details/doctor-appointment-details.component').then(r => r.DoctorAppointmentDetailsComponent),
  title: 'Doctor Appointments Details'
}




];

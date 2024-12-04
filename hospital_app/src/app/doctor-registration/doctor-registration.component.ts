import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';  // Make sure Router is imported

@Component({
  selector: 'app-doctor-registration',
  templateUrl: './doctor-registration.component.html',
  standalone:true,
  imports:[ReactiveFormsModule,RouterModule,CommonModule],
  styleUrls: ['./doctor-registration.component.scss']
})
export class DoctorRegistrationComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registrationForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email, this.emailValidator]],
      contactNo: ['', [Validators.required, Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/)]],  // Allows country code
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      specialty: ['', [Validators.required]]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  ngOnInit(): void {}

  // Custom validator to check if password and confirmPassword match
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    
    if (password?.value !== confirmPassword?.value) {
      confirmPassword?.setErrors({ passwordMismatch: true });
    } else {
      confirmPassword?.setErrors(null);
    }
  }

  // Custom email validator to check for '@' symbol
  emailValidator(control: any) {
    const value = control.value;
    if (value && !value.includes('@')) {
      return { invalidEmail: true };  // custom error if '@' is not found
    }
    return null;
  }

  // Handle form submission and redirect to login page
  onSubmit() {
    if (this.registrationForm.valid) {
      const formValues = this.registrationForm.value;
      formValues.password = formValues.password.trim();
      formValues.confirmPassword = formValues.confirmPassword.trim();
      
      // Handle registration logic here (e.g., save data to the server)
      console.log('Form Data:', formValues);
      alert('Doctor registered successfully!');
      
      // After successful registration, redirect to the login page
      this.router.navigate(['/login']);  // Correctly navigate to the login page

    } else {
      this.markFormGroupTouched(this.registrationForm);  // Mark all fields as touched to show validation errors
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}

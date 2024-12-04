import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-doctor-dashboard',
    templateUrl: './doctor-dashboard.component.html',
    imports: [RouterModule,MatIconModule],
    styleUrls: ['./doctor-dashboard.component.scss']
})
export class DoctorDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';
import { InvestmentsComponent } from './components/investments/investments.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard-main',
  standalone: true,
  imports: [RouterOutlet, InvestmentsComponent],
  templateUrl: './dashboard-main.component.html',
  styleUrl: './dashboard-main.component.scss',
})
export class DashboardMainComponent {}

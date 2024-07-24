import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-investment-widgets',
  standalone: true,
  imports: [CurrencyPipe, DecimalPipe],
  templateUrl: './investment-widgets.component.html',
  styleUrl: './investment-widgets.component.scss',
})
export class InvestmentWidgetsComponent {}

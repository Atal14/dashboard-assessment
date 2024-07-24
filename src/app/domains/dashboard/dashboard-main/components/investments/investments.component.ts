import { Component } from '@angular/core';
import { InvestmentWidgetsComponent } from './components/investment-widgets/investment-widgets.component';
import { InvestmentChartComponent } from './components/investment-chart/investment-chart.component';
import { InvestmentContactComponent } from './components/investment-contact/investment-contact.component';
import { TrendingStocksComponent } from './components/trending-stocks/trending-stocks.component';

@Component({
  selector: 'app-investments',
  standalone: true,
  imports: [
    InvestmentWidgetsComponent,
    InvestmentChartComponent,
    InvestmentContactComponent,
    TrendingStocksComponent,
  ],
  templateUrl: './investments.component.html',
  styleUrl: './investments.component.scss',
})
export class InvestmentsComponent {}

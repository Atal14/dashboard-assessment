import { CurrencyPipe, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-trending-stocks',
  standalone: true,
  imports: [TableModule, CurrencyPipe, NgClass],
  templateUrl: './trending-stocks.component.html',
  styleUrl: './trending-stocks.component.scss',
})
export class TrendingStocksComponent {
  mockStocks: { id: number; name: string; price: number; return: number }[] = [
    { id: 1, name: 'Apple', price: 100, return: 10 },
    { id: 2, name: 'Microsoft', price: 200, return: -20 },
    { id: 3, name: 'Google', price: 300, return: 30 },
    { id: 4, name: 'Amazon', price: 400, return: 40 },
    { id: 5, name: 'Facebook', price: 500, return: 50 },
    { id: 11, name: 'Apple', price: 100, return: -10 },
    { id: 12, name: 'Microsoft', price: 200, return: 20 },
    { id: 13, name: 'Google', price: 300, return: -30 },
    { id: 14, name: 'Amazon', price: 400, return: 40 },
    { id: 15, name: 'Facebook', price: 500, return: 50 },
  ];
}

import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  viewChild,
} from '@angular/core';
import { ChartModule, UIChart } from 'primeng/chart';

@Component({
  selector: 'app-investment-chart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './investment-chart.component.html',
  styleUrl: './investment-chart.component.scss',
})
export class InvestmentChartComponent implements OnInit, AfterViewInit {
  @ViewChild('debitChart') debitChart!: UIChart;
  debitCreditData = {};

  debitCreditOptions = {};

  monthlyRevenueData = {
    labels: ['2016', '2017', '2018', '2019', '2020', '2021'],
    datasets: [
      {
        label: 'First Dataset',
        data: [10000, 20000, 15000, 30000, 23000, 33000],
        fill: false,
        tension: 0.5,
        pointStyle: false,
      },
    ],
  };

  monthlyRevenueOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        ticks: {
          callback: function (value: string) {
            return '$' + value;
          },
        },
        grid: {
          //   display: false,
          drawBorder: false,
        },
        border: {
          color: '#DFE5EE',
          dash: [2, 4],
        },
        min: 0,
        max: 40000,
      },
    },
  };

  ngOnInit(): void {
    this.debitCreditData = {
      labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      datasets: [
        {
          label: 'Debit',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: '#1A16F3',
          borderRadius: 20,
          barThickness: 20,
          borderWidth: 3,
          borderColor: '#FFF',
        },
        {
          label: 'Credit',
          data: [28, 48, 40, 19, 86, 27, 90],
          backgroundColor: '#FCAA0B',
          borderRadius: 20,
          barThickness: 20,
          borderWidth: 3,
          borderColor: '#FFF',
        },
      ],
    };

    this.debitCreditOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          align: 'start',
          labels: {
            usePointStyle: true,
            pointStyle: 'rectRounded',
            padding: 20,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: '#718EBF',
            font: {
              weight: 500,
            },
          },
          grid: {
            display: false,
            drawBorder: false,
          },
        },
        y: {
          display: false,
        },
      },
    };
  }

  ngAfterViewInit() {
    if (this.debitChart) {
      this.debitChart.reinit();
    }
  }
}

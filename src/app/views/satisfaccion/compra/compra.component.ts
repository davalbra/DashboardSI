import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.scss'],
})
export class CompraComponent implements OnInit {
  select = [
    'llantas',
    'aceite',
    'bateria',
    'frenos',
    'motor',
    'suspension',
    'transmision',
    'otros productos',
  ];
  selectedOption: string = '0';
  months = ['5', '4', '3', '2', '1'];
  title: string = '';
  comprado: number = Math.floor((Math.random() + 3) * 1000);
  constructor() {}

  ngOnInit() {
    this.title = this.select[this.selectedOption];
  }

  onChange(event) {
    this.comprado = Math.floor((Math.random() + 3) * 1000);
    this.title = this.select[this.selectedOption];
    this.chartBarData = {
      labels: [...this.months].slice(0, 5),
      datasets: [
        {
          label: 'Estrellas',
          backgroundColor: '#d9376e',
          data: [
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 80),
            Math.floor(Math.random() * 60),
            Math.floor(Math.random() * 40),
            Math.floor(Math.random() * 20),
          ],
        },
      ],
    };
  }
  chartBarData = {
    labels: [...this.months].slice(0, 5),
    datasets: [
      {
        label: 'Estrellas',
        backgroundColor: '#d9376e',
        data: [
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 80),
          Math.floor(Math.random() * 60),
          Math.floor(Math.random() * 40),
          Math.floor(Math.random() * 20),
        ],
      },
    ],
  };
}

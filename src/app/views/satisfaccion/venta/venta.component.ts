import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.scss'],
})
export class VentaComponent implements OnInit {
  votos: any;
  users: any = [
    {
      name: 'Yiorgos Avraamu',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'Us',
      usage: 5,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Muy buena appli...',
      activity: 'Hace 10 sec',
      avatar: './assets/img/avatars/1.jpg',
      status: 'success',
      color: 'success',
    },
    {
      name: 'Avram Tarasios',
      state: 'Recurring ',
      registered: 'Jan 1, 2021',
      country: 'Br',
      usage: 4,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Exelente atención...',
      activity: 'Hace 5 minutos ',
      avatar: './assets/img/avatars/2.jpg',
      status: 'danger',
      color: 'info',
    },
    {
      name: 'Quintin Ed',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'In',
      usage: 3,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'La applicacion es...',
      activity: 'Hace 1 hora',
      avatar: './assets/img/avatars/3.jpg',
      status: 'warning',
      color: 'warning',
    },
    {
      name: 'Friderik Dávid',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'Pl',
      usage: 5,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Facil de usar pero...',
      activity: 'Ayer',
      avatar: './assets/img/avatars/6.jpg',
      status: 'info',
      color: 'dark',
    },
    {
      name: 'Enéas Kwadwo',
      state: 'Sleep',
      registered: 'Jan 1, 2021',
      country: 'Fr',
      usage: 4,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Me gusta y ...',
      activity: 'Semana pasada',
      avatar: './assets/img/avatars/4.jpg',
      status: 'secondary',
      color: 'danger',
    },
    {
      name: 'Agapetus Tadeáš',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'Es',
      usage: 2,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Tiene problemas de ....',
      activity: 'Hace un mes',
      avatar: './assets/img/avatars/5.jpg',
      status: 'success',
      color: 'primary',
    },
  ];
  select = [
    '    Michael Jordan',
    'LeBron James',
    'Kareem Abdul-Jabbar',
    'Wilt Chamberlain',
    'Magic Johnson',
    'Larry Bird',
    'Bill Russell',
    'Tim Duncan',
    'Shaquille ONeal',
    'Hakeem Olajuwon',
    'Kobe Bryant',
    'Dirk Nowitzki',
    'Karl Malone',
    'Moses Malone',
    'Julius Erving',
    'John Stockton',
    'David Robinson',
    'Kevin Garnett',
    'Patrick Ewing',
    'Charles Barkley',
  ];
  selectedOption: string = '0';
  months = ['5', '4', '3', '2', '1'];
  title: string = '';
  comprado: number = Math.floor((Math.random() + 3) * 100);
  constructor() {}

  ngOnInit() {
    this.title = this.select[this.selectedOption];
    this.votos = Math.floor(Math.random() * 1000);
  }

  onChange(event) {
    this.votos = Math.floor(Math.random() * 1000);
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

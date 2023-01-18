import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

import { UsuarioChartsData, IChartProps } from './Usuario-charts-data';

interface IUser {
  name: string;
  state: string;
  registered: string;
  country: string;
  usage: number;
  period: string;
  payment: string;
  activity: string;
  avatar: string;
  status: string;
  color: string;
}

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent implements OnInit {
  select = [
    'Michael Jordan',
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
  constructor(private chartsData: UsuarioChartsData) {}
  fechaConvertida: any = { Month: 'Mes', Day: 'Día', Year: 'Año' };
  proveedores: any;
  ganancias: number = Math.floor(Math.random() * 1000);
  fecha: string = 'Mes';
  public users = [
    {
      name: 'Yiorgos Avraamu',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'Pichincha',
      usage: 80,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Mastercard',
      activity: 'Hace 10 sec',
      avatar: './assets/img/avatars/1.jpg',
      status: 'success',
      color: 'success',
    },
    {
      name: 'Avram Tarasios',
      state: 'Recurring ',
      registered: 'Jan 1, 2021',
      country: 'Napo',
      usage: 70,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Visa',
      activity: 'Hace 5 minutos ',
      avatar: './assets/img/avatars/2.jpg',
      status: 'danger',
      color: 'info',
    },
    {
      name: 'Quintin Ed',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'Loja',
      usage: 60,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Stripe',
      activity: 'Hace 1 hora',
      avatar: './assets/img/avatars/3.jpg',
      status: 'warning',
      color: 'warning',
    },
    {
      name: 'Friderik Dávid',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'Guayas',
      usage: 94,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Amex',
      activity: 'Ayer',
      avatar: './assets/img/avatars/6.jpg',
      status: 'info',
      color: 'dark',
    },
    {
      name: 'Enéas Kwadwo',
      state: 'Sleep',
      registered: 'Jan 1, 2021',
      country: 'Cotopaxi',
      usage: 47,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Paypal',
      activity: 'Semana pasada',
      avatar: './assets/img/avatars/4.jpg',
      status: 'secondary',
      color: 'danger',
    },
    {
      name: 'Agapetus Tadeáš',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'Los Rios',
      usage: 20,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'ApplePay',
      activity: 'Hace un mes',
      avatar: './assets/img/avatars/5.jpg',
      status: 'success',
      color: 'primary',
    },
  ];
  public mainChart: IChartProps = {};
  public chart: Array<IChartProps> = [];
  public trafficRadioGroup = new UntypedFormGroup({
    trafficRadio: new UntypedFormControl('Month'),
  });
  onChange(event) {
    this.ganancias = Math.floor(Math.random() * 1000);

    this.proveedores = Math.floor(Math.random() * 100);

    this.trafficRadioGroup.setValue({ trafficRadio: 'Month' });
    this.chartsData.initMainChart('Month');
    this.initCharts();
  }
  ngOnInit(): void {
    this.initCharts();
    this.proveedores = Math.floor(Math.random() * 100);
  }

  initCharts(): void {
    this.mainChart = this.chartsData.mainChart;
  }

  setTrafficPeriod(value: string): void {
    this.ganancias = Math.floor(Math.random() * 1000);
    this.fecha = this.fechaConvertida[value];
    if (value == 'Month') {
      this.proveedores = Math.floor(Math.random() * 100);
    } else if (value == 'Day') {
      this.proveedores = Math.floor(Math.random() * 125);
    } else {
      this.proveedores = Math.floor(Math.random() * 85451);
    }
    this.trafficRadioGroup.setValue({ trafficRadio: value });
    this.chartsData.initMainChart(value);
    this.initCharts();
  }
}

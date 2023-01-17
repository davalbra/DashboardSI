import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { RegistroChartsData, IChartProps } from './Registro-charts-data';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.scss'],
})
export class RegistrosComponent implements OnInit {
  constructor(private chartsData: RegistroChartsData) {}
  fechaConvertida: any = { Month: 'Mes', Day: 'Día', Year: 'Año' };
  proveedores: any;
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

  ngOnInit(): void {
    this.initCharts();
    this.proveedores = Math.floor(Math.random() * 1894);
  }

  initCharts(): void {
    this.mainChart = this.chartsData.mainChart;
  }

  setTrafficPeriod(value: string): void {
    this.fecha = this.fechaConvertida[value];
    if (value == 'Month') {
      this.proveedores = Math.floor(Math.random() * 1894);
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

import { Injectable } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/utils/src';

export interface IChartProps {
  data?: any;
  labels?: any;
  options?: any;
  colors?: any;
  type?: any;
  legend?: any;

  [propName: string]: any;
}

@Injectable({
  providedIn: 'any',
})
export class DashboardChartsData {
  constructor() {
    this.initMainChart();
  }

  public mainChart: IChartProps = {};

  public random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  initMainChart(period: string = 'Month') {
    const brandUsuarios = '#F48FB1 ';
    const brandProveedores = '#90CAF9  ';
    const brandVentas = '#A5D6A7 ';
    const brandGanancias = '#FFE082 ';
    const brandsatisfaccion = '#FFCCBC ';
    const brandDanger = getStyle('--cui-danger') || '#f86c6b';

    // mainChart
    this.mainChart['elements'] = period === 'Month' ? 12 : 27;
    this.mainChart['Data1'] = [];
    this.mainChart['Data2'] = [];
    this.mainChart['Data3'] = [];
    this.mainChart['Data4'] = [];
    this.mainChart['Data5'] = [];
    this.mainChart['Data6'] = [];

    // generate random values for mainChart
    for (let i = 0; i <= this.mainChart['elements']; i++) {
      this.mainChart['Data1'].push(this.random(50, 240));
      this.mainChart['Data2'].push(this.random(20, 160));
      this.mainChart['Data3'].push(this.random(50, 240));
      this.mainChart['Data4'].push(this.random(20, 160));
      this.mainChart['Data5'].push(this.random(20, 160));
      this.mainChart['Data6'].push(65);
    }

    let labels: string[] = [];
    if (period === 'Month') {
      labels = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
      ];
    } else if (period === 'Year') {
      labels = ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'];
    } else {
      /* tslint:disable:max-line-length */
      const week = [
        'Lunes',
        'Martes',
        'Mi??rcoles',
        'Jueves',
        'Viernes',
        'S??bado',
        'Domingo',
      ];
      labels = week.concat(week);
    }

    const colors = [
      {
        // usuarios
        backgroundColor: 'transparent',
        borderColor: brandUsuarios,
        pointHoverBackgroundColor: '#fff',
      },
      {
        // proveedores
        backgroundColor: 'transparent',
        borderColor: brandProveedores,
        pointHoverBackgroundColor: '#fff',
      },
      {
        // ventas
        backgroundColor: 'transparent',
        borderColor: brandVentas,
        pointHoverBackgroundColor: '#fff',
      },
      {
        // ganancias
        backgroundColor: 'transparent',
        borderColor: brandGanancias,
        pointHoverBackgroundColor: '#fff',
      },
      {
        // satisfaccion
        backgroundColor: 'transparent',
        borderColor: brandsatisfaccion,
        pointHoverBackgroundColor: '#fff',
      },
      {
        // brandDanger
        backgroundColor: 'transparent',
        borderColor: brandDanger,
        pointHoverBackgroundColor: brandDanger,
        borderWidth: 1,
        borderDash: [8, 5],
      },
    ];

    const datasets = [
      {
        data: this.mainChart['Data1'],
        label: 'Usuarios',
        ...colors[0],
      },
      {
        data: this.mainChart['Data2'],
        label: 'Proveedores',
        ...colors[1],
      },
      {
        data: this.mainChart['Data3'],
        label: 'Ventas',
        ...colors[2],
      },
      {
        data: this.mainChart['Data4'],
        label: 'Ganancias',
        ...colors[3],
      },
      {
        data: this.mainChart['Data5'],
        label: 'Satisfacci??n',
        ...colors[4],
      },
      {
        data: this.mainChart['Data6'],
        label: 'umbral',
        ...colors[5],
      },
    ];

    const plugins = {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          labelColor: function (context: any) {
            return {
              backgroundColor: context.dataset.borderColor,
            };
          },
        },
      },
    };

    const options = {
      maintainAspectRatio: false,
      plugins,
      scales: {
        x: {
          grid: {
            drawOnChartArea: false,
          },
        },
        y: {
          beginAtZero: true,
          max: 250,
          ticks: {
            maxTicksLimit: 5,
            stepSize: Math.ceil(250 / 5),
          },
        },
      },
      elements: {
        line: {
          tension: 0.4,
        },
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4,
          hoverBorderWidth: 3,
        },
      },
    };

    this.mainChart.type = 'line';
    this.mainChart.options = options;
    this.mainChart.data = {
      datasets,
      labels,
    };
  }
}

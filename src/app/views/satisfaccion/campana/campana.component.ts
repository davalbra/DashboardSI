import {
  AfterContentInit,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import {
  cibFacebook,
  cibLinkedin,
  cibTwitter,
  cibGoogle,
  cibSkype,
} from '@coreui/icons';

@Component({
  selector: 'app-campana',
  templateUrl: './campana.component.html',
  styleUrls: ['./campana.component.scss'],
})
export class CampanaComponent implements AfterContentInit {
  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  icons = { cibFacebook, cibLinkedin, cibTwitter, cibGoogle, cibSkype };

  @Input() withCharts?: boolean = true;

  // @ts-ignore
  chartOptions = {
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
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };
  labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  datasets = {
    borderWidth: 2,
    fill: true,
  };
  colors = {
    backgroundColor: 'rgba(255,255,255,.1)',
    borderColor: 'rgba(255,255,255,.55)',
    pointHoverBackgroundColor: '#fff',
  };
  brandData = [
    {
      icon: this.icons.cibSkype,
      values: [
        { title: 'usuarios', value: '400' },
        { title: 'Publicidad', value: '1.292$' },
      ],
      capBg: { '--cui-card-cap-bg': '#00aff0' },
      data: {
        labels: [...this.labels],
        datasets: [
          {
            ...this.datasets,
            data: [78, 81, 80, 45, 34, 12, 40],
            label: 'LinkedIn',
            ...this.colors,
          },
        ],
      },
    },
    {
      icon: this.icons.cibFacebook,
      values: [
        { title: 'Usuarios', value: '670' },
        { title: 'Publicidad', value: '459$' },
      ],
      capBg: { '--cui-card-cap-bg': '#3b5998' },
      labels: [...this.labels],
      data: {
        labels: [...this.labels],
        datasets: [
          {
            ...this.datasets,
            data: [65, 59, 84, 84, 51, 55, 40],
            label: 'Facebook',
            ...this.colors,
          },
        ],
      },
    },
    {
      icon: this.icons.cibTwitter,
      values: [
        { title: 'Usuarios', value: '840' },
        { title: 'Publicidad', value: '1.792$' },
      ],
      capBg: { '--cui-card-cap-bg': '#00aced' },
      data: {
        labels: [...this.labels],
        datasets: [
          {
            ...this.datasets,
            data: [1, 13, 9, 17, 34, 41, 38],
            label: 'Twitter',
            ...this.colors,
          },
        ],
      },
    },
    {
      icon: this.icons.cibLinkedin,
      values: [
        { title: 'Usuarios', value: '702' },
        { title: 'Publicidad', value: '2000$' },
      ],
      capBg: { '--cui-card-cap-bg': '#4875b4' },
      data: {
        labels: [...this.labels],
        datasets: [
          {
            ...this.datasets,
            data: [78, 81, 80, 45, 34, 12, 40],
            label: 'LinkedIn',
            ...this.colors,
          },
        ],
      },
    },

    {
      icon: this.icons.cibGoogle,
      values: [
        { title: 'Usuarios', value: '1500' },
        { title: 'Publicidad', value: '200$' },
      ],
      capBg: { '--cui-card-cap-bg': '#fbbc05' },
      data: {
        labels: [...this.labels],
        datasets: [
          {
            ...this.datasets,
            data: [78, 81, 80, 45, 34, 12, 40],
            label: 'LinkedIn',
            ...this.colors,
          },
        ],
      },
    },
  ];

  capStyle(value: string) {
    return !!value ? { '--cui-card-cap-bg': value } : {};
  }

  ngAfterContentInit(): void {
    this.changeDetectorRef.detectChanges();
  }
}

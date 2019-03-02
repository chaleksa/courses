import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  doughnutChart: any;
  lineChart: any;

  constructor() { }

  ngOnInit() {
    this.doughnutChart = new Chart('doughnut', {
        type: 'doughnut',
        data: {
            labels: ["Course A", "Course B", "Course C", "Course D"],
            datasets: [{
                data: [22, 12, 35, 6],
                backgroundColor: [
                    'rgba(252, 145, 49, 1)',
                    'rgba(151, 57, 153, 1)',
                    'rgba(7, 167, 227, 1)',
                    'rgba(0, 166, 0, 1)'
                ]
            }]
        },
        options: {
            cutoutPercentage: 70,

            legend: {
                position:'bottom',
                labels:{
                    pointStyle:'star',
                    usePointStyle:true
                }
            }
        }
    });

    this.lineChart = new Chart('line', {
        type: 'line',
        data: {
            labels: ["January", "February", "March", "April", "May"],
            datasets: [{
                label: "Course A",
                data: [0, 0, 15, 32, 46],
                borderColor: [
                    'rgba(252, 145, 49, 1)'
                ],
                backgroundColor: [
                    'rgba(252, 145, 49, 1)'
                ],
                fill: false
              },
              {
                label: "Course B",
                data: [60, 67, 70, 77, 85],
                borderColor: [
                    'rgba(151, 57, 153, 1)'
                ],
                backgroundColor: [
                    'rgba(151, 57, 153, 1)'
                ],
                fill: false
              },
              {
                label: "Course C",
                data: [10, 35, 50, 75, 95],
                borderColor: [
                    'rgba(7, 167, 227, 1)'
                ],
                backgroundColor: [
                    'rgba(7, 167, 227, 1)'
                ],
                fill: false
              },
              {
                label: "Course D",
                data: [0, 0, 0, 0, 15],
                borderColor: [
                    'rgba(0, 166, 0, 1)'
                ],
                backgroundColor: [
                    'rgba(0, 166, 0, 1)'
                ],
                fill: false
              }],

        },
        options: {
            legend: {
                position:'bottom',
                labels:{
                    pointStyle:'circle',
                    usePointStyle:true
                }
            },

            scales: {
                yAxes: [{
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        beginAtZero:true
                    }
                }],

                xAxes: [{
                    gridLines: {
                        display: false
                    }
                }]
            }
        }
    });
  }

}

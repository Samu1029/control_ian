import { Component } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
})
export class GraphComponent {


  // options
  legend: boolean = false;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = false;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  colorScheme = 'vivid';
  /*colorScheme = {
    domain: ['#72efdd', '#ffd60a']
  };*/

  multi = [
    {
      "name": "Egypt",
      "series": [
        {
          "value": 5612,
          "name": "2016-09-16T18:02:01.005Z"
        },
        {
          "value": 2770,
          "name": "2016-09-14T09:14:24.066Z"
        },
        {
          "value": 5394,
          "name": "2016-09-16T09:11:57.829Z"
        },
        {
          "value": 5520,
          "name": "2016-09-14T04:57:06.915Z"
        },
        {
          "value": 2514,
          "name": "2016-09-16T11:39:43.407Z"
        }
      ]
    },
    {
      "name": "Luxembourg",
      "series": [
        {
          "value": 4274,
          "name": "2016-09-16T18:02:01.005Z"
        },
        {
          "value": 3322,
          "name": "2016-09-14T09:14:24.066Z"
        },
        {
          "value": 3287,
          "name": "2016-09-16T09:11:57.829Z"
        },
        {
          "value": 6151,
          "name": "2016-09-14T04:57:06.915Z"
        },
        {
          "value": 2909,
          "name": "2016-09-16T11:39:43.407Z"
        }
      ]
    }
  ]

}

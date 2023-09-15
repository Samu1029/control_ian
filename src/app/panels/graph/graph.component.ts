import { Component, OnInit } from '@angular/core';
import { CrisisControlService } from 'src/app/services/service_crisis_control/crisis-control.service';
import * as moment from 'moment';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})

export class GraphComponent implements OnInit{

  //columnsToDisplay: string[] = ['name', 'value'];

  // Propiedad para almacenar las crisis del usuario
  datos: any[] = [];
  multi: any[] = [];
  
  tiempoGraph: { crisis: string, date: string }[] = [];

  constructor(private crisisService: CrisisControlService) {
    this.multi =

      [
        {
          "series": [
            
          ]
        }
      ]

    // Object.assign(this, {
  }

  ngOnInit(): void {
    // Método obtenerCrisisControl del servicio para obtener los datos de la API
    this.crisisService.obtenerCrisisControl().subscribe((data) => {
    // Asigna los datos a la propiedad crisisControl
    this.datos = data;

    data.forEach((element: any) => {
      let crisis = element.crisis;
      let date = element.date;
      let info = {
        crisis: crisis,
        date: date
      }

      this.tiempoGraph.push(info);

    });

    this.multi = this.tiempoGraph;
    console.log('multi => ', this.tiempoGraph)

    });
  }


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

}

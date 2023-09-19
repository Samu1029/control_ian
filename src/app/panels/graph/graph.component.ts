import { Component, OnInit } from '@angular/core';
import { CrisisControlService } from 'src/app/services/service_crisis_control/crisis-control.service';
import * as moment from 'moment';
import { count } from 'd3';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})

export class GraphComponent implements OnInit{

  //columnsToDisplay: string[] = ['name', 'value'];

  // Propiedad para almacenar las crisis del usuario
  datos: any[] = [];
  multi: any[];

   // options
   legend: boolean = false;
   showLabels: boolean = true;
   animations: boolean = true;
   xAxis: boolean = true;
   yAxis: boolean = true;
   showYAxisLabel: boolean = false;
   showXAxisLabel: boolean = false;
   xAxisLabel: string = 'Year';
   yAxisLabel: string = 'Population';
   timeline: boolean = false;
 
   colorScheme = 'vivid';
   /*colorScheme = {
     domain: ['#72efdd', '#ffd60a']
   };*/
  
  tiempoGraph: { value: Number, name: Date }[] = [];

  constructor(private crisisService: CrisisControlService) {
    this.multi =

      [
        {
          "name": "IAN",
          "series": [
            {
              "value": Number,
              "name": Date
            },     
          ]
        }
      ]

    // Object.assign(this, {
  }

  ngOnInit(): void {
    // Método obtenerCrisisControl del ser  vicio para obtener los datos de la API
    this.crisisService.obtenerCrisisControl().subscribe((data) => {
    // Asigna los datos a la propiedad crisisControl
    this.datos = data;
    var cant = 1;
  
    data.forEach((element: any) => {
      let crisis = element.total;
      let date = element.date;
      //let filtrados = data.filter((dato: { date: number; }) => dato.date > date);
      //let cantidad = filtrados.length;
      console.log('date => ',date)
      //console.log('cant => ',cantidad)
      let info = {
        value: crisis,
        name: date
      };

      this.tiempoGraph.push(info);

    });

    /*const [IAN] = this.tiempoGraph;
    const crisisIAN = IAN.value;
    const [currentIAN] = this.multi;*/

    this.multi[0].series = this.tiempoGraph;
    this.multi = [...this.multi]
    console.log('multi => ', this.multi)

    });
  }

  parseDate(dataRaw: Array<any>): Array<any> {
    const result = dataRaw.map(([name, value], index) => { // TODO: 1919199119
      return {
        name: moment(name, 'x').toDate(),
        value
      }
    });

    return result
  }

}

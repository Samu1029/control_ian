import { Component, OnInit } from '@angular/core';
import { CrisisControlService } from 'src/app/services/service_crisis_control/crisis-control.service';

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
  num = 0;

   // options
   legend: boolean = true;
   legendTitle: string = 'User';
   legendPosition: string = 'right';
   showLabels: boolean = true;
   animations: boolean = true;
   xAxis: boolean = true;
   yAxis: boolean = true;
   showYAxisLabel: boolean = true;
   showXAxisLabel: boolean = true;
   xAxisLabel: string = 'Resumen por día';
   yAxisLabel: string = 'Cantidad de Crisis';
   roundDomains: boolean = false;
   autoScale: boolean = false;
   timeline: boolean = false;
 
   colorScheme = 'cool';
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
  }

  ngOnInit(): void {
    // Método obtenerCrisisControl del servicio para obtener los datos de la API
    this.crisisService.obtenerCrisisControl().subscribe((data) => {
    // Asigna los datos a la propiedad crisisControl
    this.datos = data;
  
    data.forEach((element: any) => {
      let crisis = element.total;
      let date = element.date;
      console.log('date => ',date)
      let info = {
        value: crisis,
        name: date
      };

      this.tiempoGraph.push(info);

    });

    this.multi[0].series = this.tiempoGraph;
    this.multi = [...this.multi]
    console.log('multi => ', this.multi)

    });
  }

}

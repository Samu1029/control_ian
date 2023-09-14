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
  multi: any[] = [];

  constructor(private crisisService: CrisisControlService) {
    this.datos =

      [
        {
          "name": 'IAN',
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

    const [date, crisis] = data;
    const [currenDate, currenCrisis] = this.datos;

    this.datos[0].series = currenDate.series.concat(date);
    this.datos[1].series = currenCrisis.series.cancat(crisis);

    this.datos = [...this.multi]
    console.log('multi => ',this.datos)
    console.log('Datos => ',this.datos[0].date)
    console.log('Datos => ',this.datos[1].crisis)
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

  cris = this.datos;

}

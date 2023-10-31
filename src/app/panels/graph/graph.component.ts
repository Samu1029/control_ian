import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { CrisisControlService } from 'src/app/services/service_crisis_control/crisis-control.service';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { Sort, MatSortModule, MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})

export class GraphComponent implements OnInit {

  //Almacenar las crisis del usuario
  datos: any[] = [];
  multi: any[];
  //view: any[] = [300, 100];
  
  displayedColumns: string[] = ['user', 'date', 'total'];
  //sortedData: { user: string, date: Date, total: number }[] = [];
  dataSource!: MatTableDataSource<datos[]>;

   // options
   legend: boolean = true;
   legendTitle: string = 'User';
   showLabels: boolean = true;
   animations: boolean = true;
   xAxis: boolean = true;
   yAxis: boolean = true;
   showYAxisLabel: boolean = true;
   showXAxisLabel: boolean = true;
   xAxisLabel: string = 'Resumen por día';
   yAxisLabel: string = 'Cantidad de Crisis';
   timeline: boolean = true;
 
  colorScheme = 'cool';
  
  tiempoGraph: { value: Number, name: Date }[] = [];
 
  constructor(private _liveAnnouncer: LiveAnnouncer, private crisisService: CrisisControlService) {
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
    this.multi = [...this.multi];
    this.dataSource = new MatTableDataSource<datos[]>(this.datos);
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort = this.sort;
    console.log('dataSource => ', this.dataSource)
    });

  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}

export interface datos {
  user: string, 
  date: Date, 
  total: number
}

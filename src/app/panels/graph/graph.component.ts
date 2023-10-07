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

export class GraphComponent implements OnInit, AfterViewInit {

  // Propiedad para almacenar las crisis del usuario
  datos: any[] = [];
  multi: any[];
  
  displayedColumns: string[] = ['user', 'date', 'total'];
  sortedData: { user: string, date: Date, total: number }[] = [];
  dataSource!:MatTableDataSource<any>;

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
   roundDomains: boolean = true;
   autoScale: boolean = true;
   timeline: boolean = false;
 
   colorScheme = 'cool';
   /*colorScheme = {
     domain: ['#72efdd', '#ffd60a']
   };*/
  
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
      ],
      this.sortedData = this.datos.slice();
      this.dataSource= new MatTableDataSource(this.sortedData);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort = this.sort;
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
    this.sortedData = data;
    console.log('dataSource => ', this.datos)
    console.log('sortedData => ', this.sortedData)

    });

  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  sortData(sort: Sort) {
    const data = this.sortedData.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData  = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'user':
          return compare(a.user, b.user, isAsc);
        case 'date':
          return compare(a.date, b.date, isAsc);
        case 'total':
          return compare(a.total, b.total, isAsc);
        default:
          return 0;
      }
    });
    this.dataSource = new MatTableDataSource(this.sortedData);
    this.dataSource.paginator=this.paginator;
  }
}

function compare(a: number | Date | string, b: number | Date | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

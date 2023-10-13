import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { CrisisControlService } from 'src/app/services/service_crisis_control/crisis-control.service';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { Sort, MatSortModule, MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})

export class GraphComponent implements OnInit, AfterViewInit {

  //Almacenar las crisis del usuario
  datos: any[] = [];
  multi: any[];
  
  displayedColumns: string[] = ['user', 'date', 'total'];
  //sortedData: { user: string, date: Date, total: number }[] = [];
  dataSource!: MatTableDataSource<datos[]>;

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

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

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

  /*sortData(sort: Sort) {
    const data = this.datos.slice();
    if (!sort.active || sort.direction === '') {
      this.datos = data;
      return;
    }

    this.datos  = data.sort((a, b) => {
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
    this.dataSource = new MatTableDataSource<datos[]>(this.datos);
    this.dataSource.paginator=this.paginator;
  }*/
}

/*function compare(a: number | Date | string, b: number | Date | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}*/

export interface datos {
  user: string, 
  date: Date, 
  total: number
}

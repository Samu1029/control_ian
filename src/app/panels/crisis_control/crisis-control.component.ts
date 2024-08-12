import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, SortDirection } from '@angular/material/sort';
import { merge, Observable, of as observableOf} from 'rxjs';
import { switchMap, startWith, catchError, map } from 'rxjs/operators';
import { Crisis, CrisisControlService } from '../../services/service_crisis_control/crisis-control.service'
import { Time } from '@angular/common';


@Component({
  selector: 'app-crisis-control',
  templateUrl: './crisis-control.component.html',
  styleUrls: ['./crisis-control.component.scss'],
})

export class CrisisControlComponent implements OnInit{
  
  displayedColumns: string[] = ['user', 'date', 'crisis', 'time'];
  crisis: Array<any> = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  //@ViewChild(MatPaginator) paginator!: MatPaginator;
  //@ViewChild(MatSort) sort!: MatSort;


  constructor(
    private _crisisControlService: CrisisControlService
  ) { }

  ngOnInit(): void {
      this._crisisControlService.getCrisisControl().subscribe(crisis=>{
        this.crisis = [...crisis];
        console.log('Angel'+this.crisis);
      }
      )
  }
  
}

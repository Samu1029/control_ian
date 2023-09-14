import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GraphComponent } from './graph.component';
import { CrisisControlComponent } from '../crisis_control/crisis-control.component';

const routes: Routes = [
  { 
    path: '', component: GraphComponent, 
    children: [
      {
        path: 'crisis-component', // child route path
        component: CrisisControlComponent, // child route component that the router renders
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class GraphRoutingModule { }

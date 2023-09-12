import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from 'src/app/app-material.module';
import { GraphRoutingModule } from './graph-routing.module';
import { GraphComponent } from './graph.component';


@NgModule({
  declarations: [
    GraphComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    GraphRoutingModule,
  ]
})
export class GraphModule { }

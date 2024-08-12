import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from 'src/app/app-material.module';
import { GraphRoutingModule } from './graph-routing.module';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    GraphRoutingModule,
    AppMaterialModule,
    NgChartsModule
  ]
})
export class GraphModule { }

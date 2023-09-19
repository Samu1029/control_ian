import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from 'src/app/app-material.module';
import { GraphRoutingModule } from './graph-routing.module';


@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    GraphRoutingModule,
    AppMaterialModule
  ]
})
export class GraphModule { }

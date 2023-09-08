import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphComponent } from './panels/graph/graph.component';
import { AppMaterialModule } from './app-material.module';
import { MedicControlComponent } from './panels/medic-control/medic-control.component';
import { CrisisControlComponent } from './panels/crisis-control/crisis-control.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { GraphRoutingModule } from './panels/graph/graph-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    MedicControlComponent,
    CrisisControlComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    GraphRoutingModule,
    NgxChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

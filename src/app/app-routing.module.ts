import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphComponent } from './panels/graph/graph.component';
import { CrisisControlComponent } from './panels/crisis_control/crisis-control.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./panels/graph/graph.module').then(m => m.GraphModule) }
  /*{ path: 'graph-component', component: GraphComponent },
  { path: 'crisis-component', component: CrisisControlComponent },
  { path: '',   redirectTo: '/crisis-component', pathMatch: 'full' }, // redirect to `crisis-component`*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

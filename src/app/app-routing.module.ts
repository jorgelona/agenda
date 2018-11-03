import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyDashComponent } from './my-dash/my-dash.component';
import { MyTableComponent } from './my-table/my-table.component';
import { MyTreeComponent } from './my-tree/my-tree.component';
import { MyDdComponent } from './my-dd/my-dd.component';

const routes: Routes = [
{ path: '', component: MyDashComponent },
{ path: 'lista', component: MyTableComponent },
{ path: 'arbol', component: MyTreeComponent},
{ path: 'dd', component: MyDdComponent},
{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
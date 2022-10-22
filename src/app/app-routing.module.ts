import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HOCComponent} from "./components/hoc/hoc.component";

const routes: Routes = [
  {
    path: '',
    component: HOCComponent
  },
  {
    path:'**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

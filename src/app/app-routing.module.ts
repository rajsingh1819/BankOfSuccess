import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { EditLoanComponent } from './view/view-loan/edit/edit-loan/edit-loan.component';
import { ViewLoanComponent } from './view/view-loan/view-loan.component';

const routes: Routes = [
  { path: 'rigester', component:FormComponent},
  { path: 'view', component:ViewLoanComponent},
  { path: 'edit/:id', component:EditLoanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

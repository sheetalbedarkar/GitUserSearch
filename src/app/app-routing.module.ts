import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FpHomeComponent } from './component/fp-home/fp-home.component';
import { FpHistoryComponent } from './component/fp-history/fp-history.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  { path: 'home', component: FpHomeComponent },
  { path: 'history', component: FpHistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

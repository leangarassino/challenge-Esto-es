import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddprojectComponent } from './pages/addproject/addproject.component';
import { EditprojectComponent } from './pages/editproject/editproject.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'addproject',
    component: AddprojectComponent
  },
  {
    path: 'editproject/:index',
    component: EditprojectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

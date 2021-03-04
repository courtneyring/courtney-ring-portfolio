import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WorkComponent } from './pages/work/work.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'work/:id',
        component: WorkComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

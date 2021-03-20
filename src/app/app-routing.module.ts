import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { WorkComponent } from './pages/work/work.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'work',
        component: PortfolioComponent
    },
    {
        path: 'work/:id',
        component: WorkComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

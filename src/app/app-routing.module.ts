import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorService } from './projects/calculator';
import { CalculatorRoutes } from './projects/calculator/calculato-routing.module';
import { DashboardRoutes } from './projects/dashboard/dashboard-routing.module';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  ...DashboardRoutes,
  ...CalculatorRoutes,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CalculatorService],
})
export class AppRoutingModule {}

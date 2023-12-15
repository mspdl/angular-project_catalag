import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorService } from './projects/calculator';
import { CalculatorRoutes } from './projects/calculator/calculator-routing.module';
import { CurrencyConverterRoutes } from './projects/currency_converter/converter-routing.module';
import { DashboardRoutes } from './projects/dashboard/dashboard-routing.module';
import { TaskRoutes } from './projects/task_manager';
import { TicTacToeRoutes } from './projects/tic-tac-toe/tic-tac-toe.routing-module';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  ...DashboardRoutes,
  ...CalculatorRoutes,
  ...CurrencyConverterRoutes,
  ...TaskRoutes,
  ...TicTacToeRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CalculatorService],
})
export class AppRoutingModule {}

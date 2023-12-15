import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConverterModule } from './projects/currency_converter/converter.module';
import { DashboardModule } from './projects/dashboard/dashboard.module';
import { TasksModule } from './projects/task_manager';
import { TicTacToeModule } from './projects/tic-tac-toe/tic-tac-toe.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DashboardModule,
    ConverterModule,
    TasksModule,
    TicTacToeModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

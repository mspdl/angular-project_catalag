import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConverterModule } from './projects/currency_converter/converter.module';
import { DashboardModule } from './projects/dashboard/dashboard.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, DashboardModule, ConverterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

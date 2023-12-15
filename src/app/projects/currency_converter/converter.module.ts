import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConverterComponent } from './components/converter.component';
import { NumberDirective } from './directives/number.directive';
import { ConverterService } from './services/converter.service';
import { CurrencyService } from './services/currency.service';
import { ExchangeRateComponent } from './utils/exchange-rate.component';

@NgModule({
  declarations: [ConverterComponent, NumberDirective, ExchangeRateComponent],
  imports: [CommonModule, HttpClientModule, FormsModule],
  exports: [ConverterComponent, ExchangeRateComponent],
  providers: [CurrencyService, ConverterService],
})
export class ConverterModule {}

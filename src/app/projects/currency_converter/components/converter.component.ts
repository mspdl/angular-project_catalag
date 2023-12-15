import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Conversion } from '../models/conversion.model';
import { Currency } from '../models/currency.model';
import { ConverterService } from '../services/converter.service';
import { CurrencyService } from '../services/currency.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
})
export class ConverterComponent implements OnInit {
  currencies: Currency[];
  conversion: Conversion;
  hasError: boolean;
  conversionResponse: any;

  @ViewChild('converterForm', { static: true })
  converterForm: NgForm;

  constructor(
    private currencyService: CurrencyService,
    private converterService: ConverterService
  ) {}

  ngOnInit(): void {
    this.currencies = this.currencyService.getCurrencies();
    this.init();
  }

  init(): void {
    this.conversion = new Conversion('USD', 'BRL', null);
    this.hasError = false;
  }

  convert(): void {
    if (this.converterForm.form.valid) {
      this.converterService.convert(this.conversion).subscribe(
        (response) => {
          this.hasError = false;
          this.conversionResponse =
            response[
              `${this.conversion.fromCurrency}${this.conversion.toCurrency}`
            ];
        },
        (error) => (this.hasError = true)
      );
    }
  }
}

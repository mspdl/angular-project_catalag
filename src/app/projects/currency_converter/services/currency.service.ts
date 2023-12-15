import { Injectable } from '@angular/core';
import { Currency } from '../models/currency.model';

@Injectable()
export class CurrencyService {
  constructor() {}

  private currencies: Currency[] = [
    { symbol: 'BRL', description: 'Brazilian Real' },
    { symbol: 'EUR', description: 'Euro' },
    { symbol: 'USD', description: 'United States Dollar' },
  ];

  getCurrencies(): Currency[] {
    return this.currencies;
  }
}

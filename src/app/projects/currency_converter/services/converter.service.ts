import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ConversionResponse } from '../models/conversion-response.model';
import { Conversion } from '../models/conversion.model';

@Injectable()
export class ConverterService {
  BASE_URL = `http://economia.awesomeapi.com.br/json/last/`;

  constructor(private http: HttpClient) {}

  convert(conversion: Conversion): Observable<ConversionResponse> {
    let newUrl = `${this.BASE_URL}${conversion.fromCurrency}-${conversion.toCurrency}`;
    return this.http.get(newUrl).pipe(
      map((response) => {
        return response as ConversionResponse;
      })
    );
  }

  toExchangeRate(
    conversionResponse: ConversionResponse,
    conversion: Conversion
  ) {
    if (conversionResponse === undefined) {
      return 0;
    }
    return conversionResponse.rates[conversion.toCurrency];
  }

  fromExchangeRate(
    conversionResponse: ConversionResponse,
    conversion: Conversion
  ) {
    if (conversionResponse === undefined) {
      return '0';
    }
    return (1 / conversionResponse.rates[conversion.toCurrency]).toFixed(4);
  }

  exchangeRateDate(conversionResponse: ConversionResponse): string {
    if (conversionResponse === undefined) {
      return '';
    }
    return conversionResponse.date;
  }
}

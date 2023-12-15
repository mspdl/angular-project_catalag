import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ConversionResponse } from '../models/conversion-response.model';
import { Conversion } from '../models/conversion.model';

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.scss'],
})
export class ExchangeRateComponent {
  @Input() id: string;
  @Input() conversion: Conversion;
  @Input() conversionResponse: ConversionResponse;
  @Output() onConfirm: EventEmitter<any> = new EventEmitter<any>();

  newConversion() {
    this.onConfirm.emit();
  }

  get conversionValue(): number {
    return (+this.conversionResponse?.ask + +this.conversionResponse?.bid) / 2;
  }

  get conversionTotalValue(): number {
    return (
      ((+this.conversionResponse?.ask + +this.conversionResponse?.bid) / 2) *
      this.conversion?.value
    );
  }
}

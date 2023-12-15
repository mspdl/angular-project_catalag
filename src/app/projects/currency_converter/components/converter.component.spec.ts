import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ConverterService } from '../services/converter.service';
import { CurrencyService } from '../services/currency.service';
import { ConverterComponent } from './converter.component';
import { NumberDirective } from '../directives/number.directive';
import { ExchangeRateComponent } from '../utils/exchange-rate.component';

describe('ConverterComponent', () => {
  let component: ConverterComponent;
  let fixture: ComponentFixture<ConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConverterComponent, NumberDirective, ExchangeRateComponent],
      providers: [CurrencyService, ConverterService],
      imports: [HttpClientTestingModule, FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

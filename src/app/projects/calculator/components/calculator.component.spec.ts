import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CalculatorService } from '../services';
import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  let btn2: DebugElement;
  let btn3: DebugElement;
  let btnDecimal: DebugElement;

  let btnAddition: DebugElement;
  let btnSubtraction: DebugElement;
  let btnDivision: DebugElement;
  let btnMultiplication: DebugElement;

  let btnCalculate: DebugElement;
  let display: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculatorComponent],
      providers: [CalculatorService],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;

    btn2 = fixture.debugElement.query(By.css('#btn2'));
    btn3 = fixture.debugElement.query(By.css('#btn3'));
    btnDecimal = fixture.debugElement.query(By.css('#btnDecimal'));

    btnAddition = fixture.debugElement.query(By.css('#btnAddition'));
    btnSubtraction = fixture.debugElement.query(By.css('#btnSubtraction'));
    btnMultiplication = fixture.debugElement.query(
      By.css('#btnMultiplication')
    );
    btnDivision = fixture.debugElement.query(By.css('#btnDivision'));

    btnCalculate = fixture.debugElement.query(By.css('#btnCalculate'));
    display = fixture.debugElement.query(By.css('#display'));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ensure that 3 + 2 = 5', () => {
    btn3.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnAddition.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn2.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnCalculate.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('5');
  });

  it('should ensure that 3 - 2 = 1', () => {
    btn3.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnSubtraction.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn2.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnCalculate.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('1');
  });

  it('should ensure that 3 * 2 = 6', () => {
    btn3.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnMultiplication.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn2.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnCalculate.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('6');
  });

  it('should ensure that 3 / 2 = 6', () => {
    btn3.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnDivision.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn2.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnCalculate.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('1.5');
  });

  it('should ensure that only one decimal will be displayed', () => {
    btnDecimal.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(display.nativeElement.value.split('.').length - 1).toBe(1);

    btnDecimal.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(display.nativeElement.value.split('.').length - 1).toBe(1);
  });

  it('should ensure that 3 * 2 + 2 = 8', () => {
    btn3.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnCalculate.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnMultiplication.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn2.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnCalculate.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnAddition.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn2.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnCalculate.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('8');
  });
});

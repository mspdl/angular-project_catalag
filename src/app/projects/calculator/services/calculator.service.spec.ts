import { TestBed } from '@angular/core/testing';
import { OperationTypeEnum } from '../operation-type.enum';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CalculatorService] });
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should ensure that 1 + 4 = 5', () => {
    let addition = service.calculate(1, 4, OperationTypeEnum.ADDITION);
    expect(addition).toEqual(5);
  });

  it('should ensure that 1 - 4 = -3', () => {
    let subtraction = service.calculate(1, 4, OperationTypeEnum.SUBTRACTION);
    expect(subtraction).toEqual(-3);
  });

  it('should ensure that 1 * 4 = 4', () => {
    let multiplication = service.calculate(
      1,
      4,
      OperationTypeEnum.MULTIPLICATION
    );
    expect(multiplication).toEqual(4);
  });

  it('should ensure that 1 / 4 = 4', () => {
    let division = service.calculate(1, 4, OperationTypeEnum.DIVISION);
    expect(division).toEqual(0.25);
  });
});

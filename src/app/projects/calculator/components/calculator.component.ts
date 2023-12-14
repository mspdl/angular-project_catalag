import { Component, OnInit } from '@angular/core';
import { OperationTypeEnum } from '../operation-type.enum';
import { CalculatorService } from '../services';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {
  private firstNumber: string;
  private secondNumber: string;
  private result: number;
  private operation: OperationTypeEnum;

  protected get OperationType() {
    return OperationTypeEnum;
  }

  constructor(private calculatorService: CalculatorService) {}

  ngOnInit(): void {
    this.clear();
  }

  clear() {
    this.firstNumber = '0';
    this.secondNumber = null;
    this.result = null;
    this.operation = null;
  }

  addNumber(newNumber: string): void {
    if (this.operation === null) {
      this.firstNumber = this.concatenateNumber(this.firstNumber, newNumber);
    } else {
      this.secondNumber = this.concatenateNumber(this.secondNumber, newNumber);
    }
  }

  concatenateNumber(currentNumber: string, newNumber: string): string {
    if (currentNumber === '0' || currentNumber === null) {
      currentNumber = '';
    }
    if (newNumber === '.' && currentNumber === '') {
      return '0.';
    }
    if (newNumber === '.' && currentNumber.indexOf('.') > -1) {
      return currentNumber;
    }
    return currentNumber + newNumber;
  }

  defineOperation(operation: OperationTypeEnum): void {
    if (this.operation === null) {
      this.operation = operation;
      return;
    }

    if (this.secondNumber !== null) {
      this.calculate();
      this.operation = operation;
      this.firstNumber = this.result.toString();
      this.secondNumber = null;
      this.result = null;
    }
  }

  calculate(): void {
    if (this.secondNumber === null) {
      return;
    }
    this.result = this.calculatorService.calculate(
      parseFloat(this.firstNumber),
      parseFloat(this.secondNumber),
      this.operation
    );
  }

  get display(): string {
    return this.result
      ? this.result.toString()
      : this.secondNumber
      ? this.secondNumber
      : this.firstNumber;
  }
}

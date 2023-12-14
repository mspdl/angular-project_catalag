import { Injectable } from '@angular/core';
import { OperationTypeEnum } from '../operation-type.enum';

@Injectable()
export class CalculatorService {
  calculate(
    firstNumber: number,
    secondNumber: number,
    operationType: OperationTypeEnum
  ): number {
    switch (operationType) {
      case OperationTypeEnum.ADDITION:
        return this.addition(firstNumber, secondNumber);
      case OperationTypeEnum.SUBTRACTION:
        return this.subtraction(firstNumber, secondNumber);
      case OperationTypeEnum.MULTIPLICATION:
        return this.multiplication(firstNumber, secondNumber);
      case OperationTypeEnum.DIVISION:
        return this.division(firstNumber, secondNumber);
    }
  }

  addition(firstNumber: number, secondNumber: number): number {
    return firstNumber + secondNumber;
  }

  subtraction(firstNumber: number, secondNumber: number): number {
    return firstNumber - secondNumber;
  }

  multiplication(firstNumber: number, secondNumber: number): number {
    return firstNumber * secondNumber;
  }

  division(firstNumber: number, secondNumber: number): number {
    return firstNumber / secondNumber;
  }
}

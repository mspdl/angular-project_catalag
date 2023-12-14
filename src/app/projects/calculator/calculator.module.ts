import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CalculatorComponent } from './components';
import { CalculatorService } from './services';

@NgModule({
  declarations: [CalculatorComponent],
  exports: [CalculatorComponent],
  imports: [CommonModule],
  providers: [CalculatorService],
})
export class CalculatorModule {}

import { Directive, ElementRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[number]',
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: NumberDirective, multi: true },
  ],
})
export class NumberDirective implements ControlValueAccessor {
  onTouched: any;
  onChanged: any;

  constructor(private el: ElementRef) {}

  @HostListener('keyup', ['$event'])
  onKeyUp($event: any) {
    let value = $event.target.value;
    let decimalsPos = value.indexOf('.');

    value = value.replace(/[\D]/g, '');

    if (decimalsPos > 0) {
      value = value.substr(0, decimalsPos) + '.' + value.substr(decimalsPos);
    }
    $event.target.value = value;
    this.onChanged(value);
  }

  writeValue(newValue: any): void {
    this.el.nativeElement.value = newValue;
  }
  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}

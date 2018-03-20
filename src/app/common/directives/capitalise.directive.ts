import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appCapitalise]'
})
export class CapitaliseDirective {

  constructor(private el: ElementRef) {  }

  @HostListener('keyup')
  onKeyUp() {
    this.el.nativeElement.value = this.el.nativeElement.value.toUpperCase();

  }
}

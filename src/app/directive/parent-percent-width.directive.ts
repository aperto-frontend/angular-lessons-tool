import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appParentPercentWidth]'
})
export class ParentPercentWidthDirective implements OnChanges {

  @Input('appParentPercentWidth') percentWidth: number;

  private parentEl;

  constructor(private el: ElementRef) {}

  ngOnChanges() {
    this.applyPercentWidth();
  }

  private applyPercentWidth() {
    if (!this.parentEl) {
      this.parentEl = this.el.nativeElement.parentElement;
    }

    if (this.parentEl && this.percentWidth) {
      const parentElWidth = this.parentEl.offsetWidth;
      const newElWidth = Math.min(parentElWidth * (100 / this.percentWidth), parentElWidth);
      this.el.nativeElement.style.width = newElWidth + 'px';
    } else {
      this.el.nativeElement.style.width = '0';
    }
  }
}

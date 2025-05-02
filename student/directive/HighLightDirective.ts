import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
 selector: '[appHighlight]',
  standalone : true,
})
export class HighLightDirective{

  @Input() highlightColor: string = 'yellow';

  constructor(private _el: ElementRef) {

  }

  @HostListener('mouseenter') onMouseEnter() {
    this._el.nativeElement.style.color = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this._el.nativeElement.style.color = 'gray';
  }

}

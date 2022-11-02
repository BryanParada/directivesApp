import { Directive, OnInit, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[errorMsgDrt]'
})
export class ErrorMsgDirective implements OnInit {

htmlElement: ElementRef<HTMLElement>
@Input() color: string = 'red'

  constructor( private elem: ElementRef<HTMLElement>) { 
    this.htmlElement = elem; 
   }

  ngOnInit(): void {
    console.log('ngOnInit directive');
    this.setColor();
  }

  setColor(): void{
    this.htmlElement.nativeElement.style.color = this.color;
  }

}

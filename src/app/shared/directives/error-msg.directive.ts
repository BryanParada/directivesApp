import { Directive, OnInit, ElementRef, Input, OnChanges, SimpleChanges  } from '@angular/core';

@Directive({
  selector: '[errorMsgDrt]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

htmlElement: ElementRef<HTMLElement>
@Input() color: string = 'red'
@Input() msg: string = ' This Field is required'


  constructor( private elem: ElementRef<HTMLElement>) { 
    this.htmlElement = elem; 
   }

  ngOnInit(): void {
    console.log('ngOnInit directive');
    this.setColor();
    this.setMsg();
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['msg']) {
      const msje = changes['msg'].currentValue;
      this.htmlElement.nativeElement.innerText = msje;
      
    }

    if (changes['color']) {
      const color = changes['color'].currentValue;
      this.htmlElement.nativeElement.style.color = color;
    }
  
    console.log(changes);
    
  }

  setColor(): void{
    this.htmlElement.nativeElement.style.color = this.color;
    this.htmlElement.nativeElement.classList.add("form-text");
  }
  
  setMsg(): void{
    this.htmlElement.nativeElement.innerText = this.msg
  }

}

import { Directive, OnInit, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[errorMsgDrt]'
})
export class ErrorMsgDirective implements OnInit {

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

  setColor(): void{
    this.htmlElement.nativeElement.style.color = this.color;
    this.htmlElement.nativeElement.classList.add("form-text");
  }
  
  setMsg(): void{
    this.htmlElement.nativeElement.innerText = this.msg
  }

}

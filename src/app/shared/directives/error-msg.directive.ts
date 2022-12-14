import { Directive, OnInit, ElementRef, Input, OnChanges, SimpleChanges  } from '@angular/core';

@Directive({
  selector: '[errorMsgDrt]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

private _color: string = 'red'
private _message: string = 'This field is required!!'

htmlElement: ElementRef<HTMLElement>

//OPCIONAL EN HTML
@Input() set color( value: string ){  
  this._color = value;
  this.setColor();
}

 //OPCIONAL EN HTML
//@Input() msg: string = ' This Field is required'
@Input() set msg( value: string ){ 
  this._message = value;
  this.setMsg();
}

@Input() set valid( value: boolean ){ 
  if (value === true) {
    this.htmlElement.nativeElement.classList.add('hidden');
  }else{
    this.htmlElement.nativeElement.classList.remove('hidden');
  }
}

  constructor( private elem: ElementRef<HTMLElement>) { 
    this.htmlElement = elem; 
   }


  ngOnChanges(changes: SimpleChanges): void {

    // if (changes['msg']) {
    //   const msje = changes['msg'].currentValue;
    //   this.htmlElement.nativeElement.innerText = msje;
      
    // }

    // if (changes['color']) {
    //   const color = changes['color'].currentValue;
    //   this.htmlElement.nativeElement.style.color = color;
    // }
  
    // console.log(changes);
 
  }

  
  ngOnInit(): void {
    //console.log(this.color);  //undefined
    //console.log(this.msg); //undefined
    this.setColor();
    this.setMsg(); 
    this.setStyle();
  }

  setStyle(): void {
    this.htmlElement.nativeElement.classList.add("form-text");
  }

  setColor(): void{
    this.htmlElement.nativeElement.style.color = this._color;
    //this.htmlElement.nativeElement.classList.add("form-text");
  }
  
  setMsg(): void{
    this.htmlElement.nativeElement.innerText = this._message
  }

}

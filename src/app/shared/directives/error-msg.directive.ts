import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[errorMsgDrt]'
})
export class ErrorMsgDirective implements OnInit {

  constructor() {
    console.log('constructor directive');
    
   }

  ngOnInit(): void {
    console.log('ngOnInit directive');
  }

}

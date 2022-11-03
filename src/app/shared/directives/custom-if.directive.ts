import { Directive, OnDestroy, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective implements OnDestroy {

@Input() set customIf( condition: boolean)
{
  if (condition) {
    this.viewcontainer.createEmbeddedView( this.templateRef);
  }else{
    this.viewcontainer.clear();
  }
}
  constructor(
    private templateRef: TemplateRef<HTMLElement>,
    private viewcontainer: ViewContainerRef
    ) {
      
    //console.log('custom if');  
  }

  ngOnDestroy(): void {
  //   console.log('on destroy');  
  }

  
}

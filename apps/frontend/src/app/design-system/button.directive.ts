import { Directive, HostBinding, Input } from '@angular/core';
import { clsx } from 'clsx';

type ByttonType = 'default' | 'goBack';

@Directive({
  selector: '[productFeedbackAppButton]',
  standalone: true,
})
export class ButtonDirective {
  @Input() variant: ByttonType = 'default';

  @HostBinding ('class')
  get additionalClasses(){
    return clsx({
      'rounded-[10px] font-MainFont text-sm font-bold leading-normal capitalize h-min whitespace-nowrap cursor-pointer' : true, 
      'pt-[12.5px] pb-[11.5px] px-[25px] text-clr-white-dark-#F2F4FF' : this.variant === 'default',
      'hover:underline' : this.variant === 'goBack',
    })
  }
  constructor() {}
}

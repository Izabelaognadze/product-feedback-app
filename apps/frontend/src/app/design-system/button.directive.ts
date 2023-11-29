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
      'rounded-[10px] font-MainFont text-sm font-bold leading-normal capitalize' : true, 
      'pt-[12.5px] pb-[11.5px]  px-[25px] text-clr-grey-#F2F4FF hover:opacity-70' : this.variant === 'default',
      'hover:underline' : this.variant === 'goBack',
    })
  }
  constructor() {}
}

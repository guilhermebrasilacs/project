import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appCampoColorido]'
})
export class CampoColoridoDirective{
    @HostBinding('style.backgroundColor') corDeFundo: string;

    @HostListener('focus') onFocus(){
        this.corDeFundo = '#FFFFCC';
    }

    @HostListener('blur') outFocus(){
        this.corDeFundo = 'transparent';
    }
}
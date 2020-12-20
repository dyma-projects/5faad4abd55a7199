import { Directive, OnInit, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: '[direc]'
})

export class MaDirective implements OnInit {


    @HostListener('window:keyup.ArrowDown', ['$event']) windowKeyUpDown($event) {
        //this.el.nativeElement.style.color = "blue";
        this.renderer.setStyle(this.el.nativeElement, 'color', 'blue');
        //console.log(event);
    }
    @HostListener('window:keyup.ArrowUp', ['$event']) windowKeyUpUp($event) {
        //this.el.nativeElement.style.color = "red";
        this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
        //console.log(event);
    }
    @HostListener('window:keyup.ArrowRight', ['$event']) windowKeyUpRight($event) {
        //this.el.nativeElement.style.color = "green";
        this.renderer.setStyle(this.el.nativeElement, 'color', 'green');
        //console.log(event);
    }
    @HostListener('window:keyup.ArrowLeft', ['$event']) windowKeyUpLeft($event) {
        //this.el.nativeElement.style.color = "orange";
        this.renderer.setStyle(this.el.nativeElement, 'color', 'orange');
        //console.log(event);
    }


    constructor(private el: ElementRef, private renderer: Renderer2){}
    ngOnInit(){
        //this.el.nativeElement.style.background = 'red';
    }
}
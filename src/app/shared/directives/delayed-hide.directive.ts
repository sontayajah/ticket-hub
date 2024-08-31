import {
    Directive,
    ElementRef,
    Input,
    OnChanges,
    Renderer2,
    SimpleChanges,
} from '@angular/core';

@Directive({
    selector: '[appDelayedHide]',
    standalone: true,
})
export class DelayedHideDirective implements OnChanges {
    @Input() appDelayedHide: boolean = false;

    constructor(
        private el: ElementRef,
        private renderer: Renderer2,
    ) {}

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['appDelayedHide']) {
            if (this.appDelayedHide) {
                this.renderer.removeClass(this.el.nativeElement, 'hidden');
                this.renderer.addClass(this.el.nativeElement, 'opacity-100');

                setTimeout(() => {
                    this.renderer.removeClass(
                        this.el.nativeElement,
                        'opacity-0',
                    );
                }, 0); // trigger the opacity transition
            } else {
                this.renderer.addClass(this.el.nativeElement, 'opacity-0');

                setTimeout(() => {
                    this.renderer.removeClass(
                        this.el.nativeElement,
                        'opacity-100',
                    );
                }, 200); // match the transition duration

                setTimeout(() => {
                    this.renderer.addClass(this.el.nativeElement, 'hidden');
                }, 100); // ensure this happens after the opacity transition
            }
        }
    }
}

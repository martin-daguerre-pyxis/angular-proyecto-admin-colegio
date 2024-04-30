import { Component, Input } from '@angular/core';

@Component({
    selector: 'coming-soon',
    templateUrl: 'coming-soon.component.html'
})
export class ComingSoonComponent {
    @Input() title?: string | null = null;
    @Input() subtitle?: string | null = null;
    @Input() percentage?: number = 0;

    color: string = 'red';
}

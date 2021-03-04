import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-section-block',
    templateUrl: './block.component.html',
    styleUrls: ['../section.component.scss', './block.component.scss']
})
export class SectionBlockComponent implements OnInit {

    @Input() title;
    @Input() subtitle;
    @Input() content;

    constructor() { }

    ngOnInit(): void {
    }

    openLink() {
        window.open(this.content.ctaLink, '_blank');
    }

}

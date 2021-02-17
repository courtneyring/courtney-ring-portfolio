import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-section-promos',
    templateUrl: './promos.component.html',
    styleUrls: ['../section.component.scss', './promos.component.scss']
})
export class SectionPromosComponent implements OnInit {

    @Input() title;
    @Input() subtitle;
    @Input() promos;

    constructor() { }

    ngOnInit(): void {
    }

}

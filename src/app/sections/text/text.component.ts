import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-section-text',
    templateUrl: './text.component.html',
    styleUrls: ['../section.component.scss', './text.component.scss']
})
export class SectionTextComponent implements OnInit {

    @Input() title;
    @Input() subtitle;


    constructor() { }

    ngOnInit(): void {
    }

}

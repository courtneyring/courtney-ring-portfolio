import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-section-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['../section.component.scss', './contact.component.scss']
})
export class SectionContactComponent implements OnInit {

    @Input() title;
    @Input() subtitle;


    constructor() { }

    ngOnInit(): void {
    }

}

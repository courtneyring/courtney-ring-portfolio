import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-section-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['../section.component.scss', './grid.component.scss']
})
export class SectionGridComponent implements OnInit {

    @Input() title;
    @Input() subtitle;
    @Input() blocks;

    constructor(private router: Router) { }

    ngOnInit(): void {
        console.log
    }

    transitionToWork(id) {
        this.router.navigate([`work/${id}`])
    }

}

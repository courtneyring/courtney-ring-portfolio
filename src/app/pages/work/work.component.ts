import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import work from '../../../assets/json/work.json'

@Component({
    selector: 'app-work',
    templateUrl: './work.component.html',
    styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

    id;
    content;
    skills

    constructor(private route: ActivatedRoute) {
        route.params.subscribe(params => this.id = params['id']);
    }

    ngOnInit(): void {
       this.content = work.find((project) => project.id == this.id)
    }



}

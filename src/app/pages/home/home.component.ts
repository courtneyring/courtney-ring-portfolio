import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import work from '../../../assets/json/work.json';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    work = work;

    skillAreas = [
        {
            title: 'Code',
            body: 'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.',
            icon: 'icon-gear.png'
        }, 
        {
            title: 'Deployment Tools',
            body: 'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.',
            icon: 'icon-paper-plane.png'
        }, 
        {
            title: 'Content Management',
            body: 'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.',
            icon: 'icon-document.png'
        }, 
    ]


    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    transitionToWork(id) {
        this.router.navigate([`work/${id}`])
    }

}

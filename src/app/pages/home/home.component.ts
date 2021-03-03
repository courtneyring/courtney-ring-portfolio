import { Component, OnInit } from '@angular/core';
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

    recentWork = [
        {
            title: 'Aptiv SVA Virtual Tool', 
            image: 'placeholder.jpg',
            path: '/'

        },
        {
            title: 'Cigna Hong Kong', 
            image: 'placeholder2.jpg',
            path: '/'

        },
        {
            title: 'Tracer', 
            image: 'placeholder3.jpg',
            path: '/'

        },
        {
            title: 'Open Saudi', 
            image: 'placeholder3.jpg',
            path: '/'

        },
        {
            title: 'Open Saudi', 
            image: 'placeholder.jpg',
            path: '/'

        },
        {
            title: 'Open Saudi', 
            image: 'placeholder2.jpg',
            path: '/'

        },
    ]

    constructor() { }

    ngOnInit(): void {
    }

}

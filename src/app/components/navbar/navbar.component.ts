import { Component, HostBinding, HostListener, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    menuIsOpen;
    barBackground = '#20232c';

    links = [
        {label: 'Home', path: ''},
        {label: 'Work', path: ''},
        {label: 'Articles', path: ''},
        {label: 'Let\'s Talk', path: ''}
    ]

    constructor() { }

    ngOnInit(): void {
        this.onScroll();
    }

    @HostListener('window:scroll', ['$event'])
    onScroll(e = null) {
        this.barBackground = window.scrollY < 3 ? 'rgba(32, 35, 44, 0)': 'rgba(32, 35, 44, 1)';
        
    }


}

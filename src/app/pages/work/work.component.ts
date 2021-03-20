import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import work from '../../../assets/json/work.json'

@Component({
    selector: 'app-work',
    templateUrl: './work.component.html',
    styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit, AfterViewInit {

    @ViewChild('gif', {static: false}) gif;

    id;
    content;
    skills

    gifHeight;

    constructor(private route: ActivatedRoute) {
        route.params.subscribe(params => this.id = params['id']);
    }

    ngOnInit(): void {
       this.content = work.find((project) => project.id == this.id)
    }

    ngAfterViewInit() {
        this.getGifHeight();
    }

    openLink() {
        window.open(this.content.ctaLink, '_blank');
    }

    @HostListener('window:resize', ['$event'])
    getGifHeight() {
        if (!this.gif) return;
        let ratio = 800/505;
        let elWidth = this.gif?.nativeElement.clientWidth;
        console.log(elWidth);
        console.log(elWidth/ratio);
        this.gif.nativeElement.style.height = elWidth/ratio + 'px';


    }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['../section.component.scss', './grid.component.scss']
})
export class SectionGridComponent implements OnInit {

    @Input() title;
    @Input() subtitle;
    @Input() blocks;

  constructor() { }

  ngOnInit(): void {
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-inspirations',
  templateUrl: './inspirations.component.html',
  styleUrls: ['./inspirations.component.scss']
})
export class InspirationsComponent implements OnInit {
  @Input() fieldProjectInspiration: FormGroup;
  inspirations = [
    '367781121', '367935705', '365146054', '368564220', '362283091',
    '363441991', '360654782', '325639357', '328995860', '301933682'
  ];

  constructor() { }

  addInspiration(inspirationValue) {

  }

  ngOnInit() {
  }
}

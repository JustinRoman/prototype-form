import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-type',
  templateUrl: './form-type.component.html',
  styleUrls: ['./form-type.component.scss']
})
export class FormTypeComponent {
  @Input() fieldProjectType: FormGroup;
  formTypes = ['New Master Project', 'Adaptation Form', 'Localisation'];

  constructor() {
  }
}

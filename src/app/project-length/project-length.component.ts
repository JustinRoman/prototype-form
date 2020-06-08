import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-project-length',
  templateUrl: './project-length.component.html',
  styleUrls: ['./project-length.component.scss']
})
export class ProjectLengthComponent implements OnInit {
  @Input() fieldProjectLength: FormGroup;
  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
  }

  addProjectLength() {
    const control = this.formBuilder.control(null, Validators.required);

    (<FormArray> this.fieldProjectLength.get('projectLengths')).push(control);
  }

  removeProjectLength(index: number) {
    (<FormArray> this.fieldProjectLength.get('projectLengths')).removeAt(index);
  }
}

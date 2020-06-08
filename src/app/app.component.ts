import {Component, OnInit} from '@angular/core';
import {Form, FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  prototypeForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.prototypeForm = this.formBuilder.group({
      formType: ['', Validators.required],
      network: ['', Validators.required],
      projectLengths: this.formBuilder.array([
        this.formBuilder.control(6, Validators.required)
      ]),
      inspirations: ['', Validators.required]
    });
  }

  isEmpty() {
  }

  onSubmit() {
  }
}

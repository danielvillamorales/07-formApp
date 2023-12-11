import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches-page',
  templateUrl: './switches-page.component.html',
  styleUrls: ['./switches-page.component.css']
})
export class SwitchesPageComponent implements OnInit {

  public myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    wantNotifications: [true, Validators.required],
    termsAndConditions: [false, Validators.requiredTrue]

  });

  public person = {
    gender: 'F',
    wantNotifications: false
  }

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.myForm.reset(this.person);
  }

  isValidField(field: string) {
    return this.myForm.controls[field].errors &&
      this.myForm.controls[field].touched;
  }

  getFieldsError(field: string) {
    const errors = this.myForm.controls[field].errors || {};
    for (const key in errors) {
      console.log(key);
    }
    return Object.keys(errors);
  }

  onSaVe() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    const  { termsAndConditions , ...newPerson } = this.myForm.value;
    this.person = newPerson;
    console.log(this.person);
  }
}

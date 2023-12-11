import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-pages',
  templateUrl: './basic-pages.component.html',
  styleUrls: ['./basic-pages.component.css']
})
export class BasicPagesComponent implements OnInit{

  public myForm: FormGroup = this.fb.group({
    name : ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    inStorage : [0 , [Validators.required, Validators.min(0)]],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    //this.myForm.reset({price: 0, inStorage: 0});
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

  public onSave(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    this.myForm.reset({price: 0, inStorage: 0});
  }
}

import { Component } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/services/validators.service';
import { EmailValidatorService } from 'src/app/shared/validators/email-validator.service';
import * as customValidators from 'src/app/shared/validators/validators.functions';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

public myForm: FormGroup = this.fb.group({
  name: ['', [Validators.required, Validators.minLength(3), Validators.pattern(this.validatorService.firstNameAndLastnamePattern)]] ,
  email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern) ], [new EmailValidatorService()]],
  username: ['', [Validators.required, Validators.minLength(3), this.validatorService.cantBeStrider], ],
  password: ['', [Validators.required, Validators.minLength(6)]],
  password2: ['', [Validators.required]]
}, {validators: [this.validatorService.isFieldOneEqualFieldTwo('password', 'password2')]} );

  constructor(private fb: FormBuilder,
    private validatorService: ValidatorsService ) { }

  isValidField(field: string) {
    return this.validatorService.isValidField(field, this.myForm);
  }

  onSubmit() {
    this.myForm.markAllAsTouched();
  }
}

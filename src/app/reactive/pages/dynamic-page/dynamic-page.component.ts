import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styleUrls: ['./dynamic-page.component.css']
})
export class DynamicPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['Metal Gear Solid', Validators.required],
      ['Death Stranding', Validators.required]
    ])
  });

  public newFavorite: FormControl = new FormControl('', Validators.required);

  constructor(private fb: FormBuilder) { }

  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }

  isValidField(field: string) {
    if (field === 'favoriteGames') {
      return
    }
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

  isValidFieldInArray(formArray : FormArray, index: number) {
    return formArray.controls[index].errors &&
      formArray.controls[index].touched;

  }

  onAddFavoriteGame() {
    if (this.newFavorite.invalid) return;
    this.favoriteGames.push(
      this.fb.control(this.newFavorite.value, Validators.required));
    this.newFavorite.reset();
  }

  onSubmit() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    (this.myForm.controls['favoriteGames'] as FormArray) = this.fb.array([]);
    this.myForm.reset();
  }

  onDeleteFavoriteGame(index: number) {
    this.favoriteGames.removeAt(index);
  }
}

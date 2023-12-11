import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidatorService implements AsyncValidator{


//  validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
//    const email = control.value;
//    return of({
//      emailTaken: true
//    }).pipe(
//      delay(3500)
//    );
//  }

validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
  const email = control.value;
  const httpCallObservable = new Observable<ValidationErrors | null>(subscriber => {
    console.log({email});
    if (email === 'danielvillamorales@gmail.com'){
      subscriber.next({emailTaken: true});
      subscriber.complete();
      //return
    }
    subscriber.next(null);
    subscriber.complete();
  });
  return httpCallObservable
  }


}

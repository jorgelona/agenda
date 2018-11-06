import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.scss'],
})
export class NewFormComponent {
  personForm = this.fb.group({
    //company: null,
    name: [null, Validators.required],
    lastname: [null, Validators.required],
    email: [null, [Validators.email, Validators.required]],
    phone: [null, Validators.required],
    nick: [null],
    avatar: [null]
    //address: [null, Validators.required],
    //address2: null,
    //city: [null, Validators.required],
    //state: [null, Validators.required],
    //postalCode: [null, Validators.compose([
    //  Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    //],
    //shipping: ['free', Validators.required]
  });

  //hasUnitNumber = false;
  constructor(private fb: FormBuilder, private personService:PersonService) {}

  onSubmit() {
    console.log(this.personForm.value);
    this.personService.addPerson(this.personForm.value)
    .subscribe(
      response=>{
        console.log('Ok: ', response);
      },
      error=>{
        console.log('Error: ', error);
      }
    );
  }
}

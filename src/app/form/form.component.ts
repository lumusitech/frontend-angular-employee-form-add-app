import { Component, OnInit } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormControl,
  Validators,
  ValidationErrors,
  AbstractControl,
} from '@angular/forms';

import { EmployeeService } from '../employee.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass'],
})
export class FormComponent implements OnInit {
  form: UntypedFormGroup;

  constructor(private employeeService: EmployeeService) {
    this.form = new UntypedFormGroup({
      name: new UntypedFormControl('', [
        Validators.required,
        this.stringValidator,
      ]),
      lastname: new UntypedFormControl('', [
        Validators.required,
        this.stringValidator,
      ]),
      email: new UntypedFormControl('', [
        Validators.required,
        this.emailValidator,
      ]),
      age: new UntypedFormControl('', [Validators.required, this.ageValidator]),
      department: new UntypedFormControl('', [Validators.required]),
      password: new UntypedFormControl('', [Validators.required]),
      image: new UntypedFormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.form.controls.age.valueChanges.subscribe((values) =>
      console.log(/^[1-9]$|^[1-9][0-9]$|^1[0-2][0-9]$/.test(values))
    );
  }

  onSubmit(): void {
    console.log(this.form.value);
    const $ = this.form.value;
    const employee: Employee = new Employee(
      $.name,
      $.lastname,
      $.email,
      $.age,
      $.department,
      $.password,
      $.image
    );

    this.employeeService.insert(employee);

    this.form = new UntypedFormGroup({
      name: new UntypedFormControl('', [
        Validators.required,
        this.stringValidator,
      ]),
      lastname: new UntypedFormControl('', [
        Validators.required,
        this.stringValidator,
      ]),
      email: new UntypedFormControl('', [
        Validators.required,
        this.emailValidator,
      ]),
      age: new UntypedFormControl('', [Validators.required, this.ageValidator]),
      department: new UntypedFormControl('', [Validators.required]),
      password: new UntypedFormControl('', [Validators.required]),
      image: new UntypedFormControl('', [Validators.required]),
    });
  }

  stringValidator(control: AbstractControl): ValidationErrors | null {
    let value = control.value;
    if (/^[a-zA-Z\s^/d]*$/.test(value)) return null;
    return { stringValidator: { error: 'it is allow only letters' } };
  }

  emailValidator(control: AbstractControl): ValidationErrors | null {
    //if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(form.value)) return null;
    if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(control.value)) return null;
    return { emailValidator: { error: 'Formato de email incorrecto' } };
  }

  ageValidator(control: AbstractControl): ValidationErrors | null {
    if (/^[1-9]$|^[1-9][0-9]$|^1[0-2][0-9]$/.test(control.value)) return null;
    return { ageValidator: { error: 'invalid age format' } };
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { debounceTime } from 'rxjs/operators';
import { EmployeeService } from '../employee.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  form: FormGroup;

  constructor(private employeeService: EmployeeService) {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        this.stringValidator
      ]),
      lastname: new FormControl('', [
        Validators.required,
        this.stringValidator
      ]),
      email: new FormControl('', [
        Validators.required,
        this.emailValidator
      ]),
      age: new FormControl('', [
        Validators.required,
        this.ageValidator
      ]),
      department: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
      image: new FormControl('', [
        Validators.required
      ])
    });
  }

  ngOnInit(): void {
    this.form.controls.age.valueChanges.subscribe(values =>
      console.log(
        /^[1-9]$|^[1-9][0-9]$|^1[0-2][0-9]$/.test(values))
    );
  }

  onSubmit(): void {
    console.log(this.form.value);
    const $ = this.form.value;
    const employee: Employee = new Employee(
      $.name, $.lastname, $.email, $.age, $.department, $.password, $.image
    );

    this.employeeService.insert(employee);

    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        this.stringValidator
      ]),
      lastname: new FormControl('', [
        Validators.required,
        this.stringValidator
      ]),
      email: new FormControl('', [
        Validators.required,
        this.emailValidator
      ]),
      age: new FormControl('', [
        Validators.required,
        this.ageValidator
      ]),
      department: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
      image: new FormControl('', [
        Validators.required
      ])
    });
  }

  stringValidator(form: FormGroup): object | null {
    let value = form.value;
    if (/^[a-zA-Z\s^/d]*$/.test(value)) return null;
    return { stringValidator: { error: 'it is allow only letters' } };
  }

  emailValidator(form: FormGroup): object | null {
    //if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(form.value)) return null;
    if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(form.value)) return null;
    return { emailValidator: { error: "Formato de email incorrecto" } };
  }

  ageValidator(form: FormGroup): object | null {
    if (/^[1-9]$|^[1-9][0-9]$|^1[0-2][0-9]$/.test(form.value)) return null;
    return { ageValidator: { error: 'invalid age format' } };
  }
}

import { Injectable } from '@angular/core';
import { Employee } from './models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: Employee[];

  constructor() {
    this.employees = [
      { name: 'Carlos', lastname: 'Figueroa', email: 'lux@g.com', age: 40, department: 'systems', password: '1234', image: 'https://images.generated.photos/wYT5FEQJrls_4fBH_NRxauP0z08VzzMdsL7fx8HMY10/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA2MDUzNDAuanBn.jpg' },
      { name: 'Elías', lastname: 'Figueroa', email: 'eli@g.com', age: 40, department: 'systems', password: '1234', image: 'https://images.generated.photos/6Cow6kC0VAHG-XskwR8l6m4tbQS7V2bjVnzm957FJ2o/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA4NDc5ODYuanBn.jpg' },
      { name: 'Melanie', lastname: 'Figueroa', email: 'melu@g.com', age: 20, department: 'marketing', password: '1234', image: 'https://images.generated.photos/ndSjfDZwGC5bFGBVA1IdRMroeFEL3vraLs_mQEMJ5S8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAyMzYzNjAuanBn.jpg' },
      { name: 'Emma', lastname: 'Ponce', email: 'emma@g.com', age: 42, department: 'Marketing', password: '1234', image: 'https://images.generated.photos/voTeDs61yu2axbT6BuiBrBMuUwY_Xb65VU5ZbKjtH5s/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA1ODY4MDYuanBn.jpg' },
      { name: 'Zion', lastname: 'Figueroa', email: 'zion@g.com', age: 35, department: 'systems', password: '1234', image: 'https://images.generated.photos/AxUa1S3cOemOKrvvxXJUmLjZYKdu879xpmDM8aCXhlA/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA2OTk5NjkuanBn.jpg' },
      { name: 'Lucas', lastname: 'Marx', email: 'marx@g.com', age: 42, department: 'systems', password: '1234', image: 'https://images.generated.photos/lgRJN0Oyw-E9oBrhDfUj_CjWCXHrQIOEFZsJ3RibNf8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA4NDcxMjMuanBn.jpg' },
    ];
  }

  insert(e: Employee): void {
    this.employees.push(e);
    console.log(this.employees);
  }

  getAll(): Employee[] {
    return this.employees;
  }
}

import { Injectable } from '@angular/core';
import { Employee } from './models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employees: Employee[];

  constructor() {
    this.employees = [
      {
        name: 'Carlos',
        lastname: 'Figueroa',
        email: 'lux@g.com',
        age: 40,
        department: 'systems',
        password: '1234',
        image:
          'https://images.generated.photos/YceTKZkXLQUO9n1uUPmF5sKzEd0acWltO9JNr7u_meE/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDY1MzU3LmpwZw.jpg',
      },
      {
        name: 'Elías',
        lastname: 'Figueroa',
        email: 'eli@g.com',
        age: 40,
        department: 'systems',
        password: '1234',
        image:
          'https://images.generated.photos/SICvuOz0dlLhJLXyiXEnXmkIR5yOZD2YmLiOLrgbmLo/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTM5NDIzLmpwZw.jpg',
      },
      {
        name: 'Melanie',
        lastname: 'Figueroa',
        email: 'melu@g.com',
        age: 20,
        department: 'marketing',
        password: '1234',
        image:
          'https://images.generated.photos/0DhV9fBq2tNXblsn85Jofsx90JyL1ekZe1zcysncpOY/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjI2NjI0LmpwZw.jpg',
      },
      {
        name: 'Emma',
        lastname: 'Ponce',
        email: 'emma@g.com',
        age: 42,
        department: 'Marketing',
        password: '1234',
        image:
          'https://images.generated.photos/v_0FtdOTOY0OTPz1jlH52d9N_wNNC_c1A2171a0ra6o/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODE1MDQ5LmpwZw.jpg',
      },
      {
        name: 'Zion',
        lastname: 'Figueroa',
        email: 'zion@g.com',
        age: 35,
        department: 'systems',
        password: '1234',
        image:
          'https://images.generated.photos/J1yuFaFZkQTOLX5MqIo37wRp93DJGiQ06gPaDV3-ri0/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjAzNjEyLmpwZw.jpg',
      },
      {
        name: 'Lucas',
        lastname: 'Marx',
        email: 'marx@g.com',
        age: 42,
        department: 'systems',
        password: '1234',
        image:
          'https://images.generated.photos/7XmMCNIsXU305EKA5NcsoUhmd5QBfjAT1UgNU7CXnV4/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDE1NTM5LmpwZw.jpg',
      },
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

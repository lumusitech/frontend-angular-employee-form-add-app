export class Employee {
  name: string;
  lastname: string;
  email: string;
  age: number;
  department: string;
  password: string;
  image: string;


  constructor($name: string, $lastname: string, $email: string, $age: number, $department: string, $password: string, $image: string) {
    this.name = $name;
    this.lastname = $lastname;
    this.email = $email;
    this.age = $age;
    this.department = $department;
    this.password = $password;
    this.image = $image;
  }
}

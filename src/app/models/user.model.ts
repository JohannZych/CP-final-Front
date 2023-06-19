export class User {

  constructor(
    public id: number = 0 ,
    public firstname: string = '',
    public lastname: string = '',
    public email: string = '',
    public password: string = '') {
  }

  getId(): number {
    return this.id;
  }

  setId(value: number) {
    this.id = value;
  }

  getFirstname(): string {
    return this.firstname;
  }

  setFirstname(value: string) {
    this.firstname = value;
  }

  getLastname(): string {
    return this.lastname;
  }

  setLastname(value: string) {
    this.lastname = value;
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(value: string) {
    this.email = value;
  }

  getPassword(): string {
    return this.password;
  }

  setPassword(value: string) {
    this.password = value;
  }
}

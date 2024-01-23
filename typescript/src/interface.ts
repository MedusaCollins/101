interface IUser {
  id: number,
  name: string,
  surname: string,
  email: string,
  password: string,
  phone?: string,
  getMessage(): string,
}

const user: IUser = {
  id: 1,
  name: "Medusa",
  surname: "Collins",
  email: "test@email.com",
  password: "123456",
  phone: "123456789",
  getMessage() {
    return "Hello World"
  }
}

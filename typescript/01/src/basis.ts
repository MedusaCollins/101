// let user = {
// name: string,
// }
// let user : {
// name: string,
// age: number,
// isAdmin: boolean,
// phone?: string
// }
// user = {
// name: 'John',
// age: 30,
// isAdmin: true,
// }
// console.log(user)
// let sum = (num1: number, num2: number, num3?: number) => {
// return num1 + num2 * (num3 || 0) ;
// };
// sum(2,3,4)
//
//interface IUser {
//  name: string,
//  age: number,
//  isAdmin: boolean,
//  phone?: string
//}
//interface IEmployer extends IUser {
//  employeeId: number,
//  deperment: string
//}
//
//let user: IEmployer = {
//  name: "John",
//  age: 1,
//  isAdmin: true,
//  phone: "123123",
//  employeeId: 22222,
//  deperment: "test123123"
//}

const getFullName = (name: string, surname: string): string => {
  return name + " " + surname;
}

console.log(getFullName("deneme", "test"));



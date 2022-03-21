let a: number;
let b: boolean;
let c: string;

/*
type User = {
  name: string;
  surname: string;
  age: number;
  isAdmin: boolean;
};

*/

interface BasicUser<A = boolean> {
  name: string;
  surname: string;
  age: number;
  isAdmin: A;
}

interface UserWithPermissions extends BasicUser {
  permissions: string[];
}

let user: BasicUser = {
  name: "joe",
  surname: "contreras",
  age: 21,
  isAdmin: true,
};

let user2: UserWithPermissions = {
  name: "joe",
  surname: "contreras",
  age: 21,
  isAdmin: true,
  permissions: ["manager", "operator", "instructor"],
};

// Another way to define types on functions
type MathFunction = (a: number, b: number) => number;

const add: MathFunction = (a, b) => a + b;
const mul: MathFunction = (a, b) => a * b;

// GENERICS
const usersArr: BasicUser[] = [user, user, user];
const numberArr: number[] = [1, 2, 3];

const firstUser = (users: BasicUser[]): BasicUser => {
  return users[0];
};
firstUser(usersArr);

//Function that does the same thing but not just for users
const getFirst = <T>(arr: T[]): T => {
  return arr[0];
};

//calling the function
getFirst<number>(numberArr);
getFirst<BasicUser>(usersArr);

// Type intersection == interface merge
type basicCar = {
  color: string;
  model: string;
};

type advancedCar = {
  license: string;
};

type fullCar = basicCar & advancedCar;

// Unknown, never & any
const logFunction = (data: any): void => {
  const data2: unknown = data;
  console.log(data);
  console.log(data2);
};

// Utility types
type ReqUser = Required<BasicUser>;
type ReadOnlyUser = Readonly<BasicUser>;
type PartialUser = Partial<BasicUser>;
// Can be combined
type readOnlyRequired = Readonly<Required<BasicUser>>;

#The significance of union and intersection types in Typescript

## What is Union Types?  (`|`)
Union types allow to hold multiple types. It is useful when you want to define a variable that can accept multiple types. But at a time it will accept one type.

### Example
``` Typescript
function printId( id: number | string) {
    console.log(id);
}
printId("abc");  // Valid
printId(123);    // Valid
printId(true);    // error because it's boolean

```
## What is Intersection Types? (`&`)
An intersection type combines multiple types into one. You have to fulfill all the conditions. They are defined using the ampersand (&) symbol.

### Example
``` Typescript
interface User {
  name: string;
  age: number;
}

interface Admin {
  role: string;
}

let adminUser: User & Admin = {
  name: "John",
  age: 30,
  role: "Administrator"
};

```

TypeScript documentation provides detailed information on [Union Types][1] and [Intersection Types][2].

[1]: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types
[2]: https://https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html


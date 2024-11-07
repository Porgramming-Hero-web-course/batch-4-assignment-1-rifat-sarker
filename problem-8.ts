// Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.


const validateKeys = <T>(obj: T, keys: (keyof T)[]): boolean => {
  const rifat = keys.some(value => {
    return typeof value == "object"
  })
  return rifat;
}


// Sample Input:
const person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person, ["name", "age"]));

// Sample Output:
true;
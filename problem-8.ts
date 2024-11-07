const validateKeys = (obj: object, keys: string[]): boolean => {
  let allExistsProperty = true;
  for (let i = 0; i < keys.length; i++) {
    const element = keys[i]
    if (!(element in obj)) {
      allExistsProperty = false
    }
  }
  return allExistsProperty
}


// Sample Input:
// const person = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(validateKeys(person, ["name", "email", "age"]));

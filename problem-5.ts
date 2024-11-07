const getProperty = <X, Y extends keyof X>(obj: X, property: Y) : X[Y] => {
    const propertyValue = obj[property]
    return propertyValue;
}
// const person = { name: "Alice",village:"tangail", age: 30 };
// console.log(getProperty(person, "village"));

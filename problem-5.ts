const getProperty = <X, Y extends keyof X>(obj: X, property: Y) : X[Y] => {
    const propertyValue = obj[property]
    return propertyValue;
}
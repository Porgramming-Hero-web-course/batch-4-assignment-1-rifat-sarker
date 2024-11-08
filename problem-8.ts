const validateKeys = <T extends object>(obj: T, keys: (keyof T)[]): boolean => {
  let allExistsProperty = true;
  for (let i = 0; i < keys.length; i++) {
    const element = keys[i]
    if (!(element in obj)) {
      allExistsProperty = false
    }
  }
  return allExistsProperty
}


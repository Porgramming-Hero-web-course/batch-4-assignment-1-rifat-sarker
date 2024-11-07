interface Profile {
    name: string;
    age: number;
    email: string;
}

// type PartialUpdates<T> = {
//     [P in keyof T]?: T[P]
// }

const updateProfile = (obj: Profile, partialObj: Partial<Profile>):Profile => {
    const updateProfile = Object.assign({}, obj, partialObj)
    console.log(partialObj);
    return updateProfile
}


// const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(updateProfile(myProfile, { age: 26 }));
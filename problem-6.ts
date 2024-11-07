interface Profile {
    name: string;
    age: number;
    email: string;
}

interface UpdateProfile extends Profile {

}

const updateProfile = <T, Y extends keyof T>(param: T, update: Y) => {
    return update
}


const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 30 }));
// const person: {
//     name: string;
//     age: number
// } 

// const person : {
//     name: string;
//     age: number;
//     hobbies: string;
//     role: [number, string]
// } = {
//     name: "Maximilian",
//     age: 30,
//     hobbies: ["games", "bowling", "test"],
//     role: [2, "author"]
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR'}


const person = {
    name: "Maximilian",
    age: 30,
    hobbies: ["games", "bowling", "test"],
    role: Role.ADMIN
};

//person.role.push("admin"); //aici tuple nu poate limita 2 elemente, typescript inca nu stie sa faca asta
//person.role[1] = 10 // tuple error

let favoriteActivities : string[];
favoriteActivities = ["handbal"]

for(let hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
   // console.log(hobby.map()) // !!! ERROR !!! 
}

if(person.role === Role.ADMIN) {
    console.log("admin")
}
const Address = {
    name : "rohini",
    age : 23 
};

console.log(Address.name);

// Nested Objects
const Person ={
    id: 1,
    name: "janu",
    age: 20,
    skils:["java","javascript","typescript"],
    Address:{
        city: "bangalore",
        phonenumber: 9876543223
    }
}
console.log(Person.Address);
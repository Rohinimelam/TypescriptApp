enum Roles  { ANALYST,  MANAGER, DEVELOPER, TESTER };
const Person ={
    id:1,
    name:"rohini",
    roles: Roles.ANALYST
};

if(Person.roles === Roles.ANALYST){
    console.log("is Present");
}
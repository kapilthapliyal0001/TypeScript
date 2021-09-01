console.log("Hello Typescript");
var x = "Kapil";
console.log(x);
// TYPE INDERENCE
// x = true
// x = 100
// TS makes the JS a strongly typed languag
var user = {
    name: "Kapil",
    country: "India"
};
console.log(user.name);
// Typed examples;
var y;
var z;
// I have declared the variable with its type and 
//  initialize the variable.
var arrayOfStrings = [];
arrayOfStrings.push('kapil');
var addition = function (n1, n2) {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        return n1 + n2;
    }
    else {
        return 'these are not numbers !';
    }
};
addition('3', '4').toString();
addition(3, 4);
var student = {
    name: 'Stefano',
    surname: 'Casasola',
    age: 35
};
var professor = {
    name: 'David',
    surname: 'Revic',
    age: 21,
    country: 'India'
};
var striveTeachers = [
    {
        firstName: 'Stefano',
        lastName: 'Casasola',
        roles: ['Tutor/FrontEnd', 'tycoon'],
        age: 35
    }
];

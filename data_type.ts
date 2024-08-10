console.log("data types in typescript");

// primitive data type

// 1. number

let age : number = 26;

console.log(age);

//2. String

let fullName : string = "dheeraj upadhyay";

console.log(fullName);

//3. Boolean

let isActive : boolean = true;

console.log(isActive);

// 4. Null

let jsonData : null = null;

console.log(typeof (jsonData));
console.log(jsonData);


//5. undefined

let marks : undefined = undefined;

console.log(marks);

//. any

let jsonResponse : any = {

    "name": "dheeraj upadhyay",
    "age" : "26",
    "isActive": "true"
};

console.log(jsonResponse.isActive);
console.log(typeof jsonResponse);


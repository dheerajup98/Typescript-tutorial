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

//6. any

let jsonResponse : any = {

    "name": "dheeraj upadhyay",
    "age" : "26",
    "isActive": "true"
};

console.log(jsonResponse.isActive);
console.log(typeof jsonResponse);


// Non Primitive Data types

// 1. Array

let friends : string[] = ["dheeraj","suresh","kedu"];

console.log(friends);

friends.push("fakir");
console.log(friends);

console.log(typeof (friends));
console.log(typeof friends[1]);

friends.forEach((i)=>{
  console.log(i);
});

// how to store mixed data types in array like number and string.

let mixed : (string | number)[] = ["banana","apple","dragon",55,36,89];

console.log(mixed);

// 2. Object

let student : {
  name:string;
  rollno: number;
  isActive: boolean;
} = {
  name:"dheeraj",
  rollno: 25,
  isActive: true,
};

console.log(student.isActive);
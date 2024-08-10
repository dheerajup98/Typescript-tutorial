console.log("data types in typescript");
// primitive data type
// 1. number
var age = 26;
console.log(age);
//2. String
var fullName = "dheeraj upadhyay";
console.log(fullName);
//3. Boolean
var isActive = true;
console.log(isActive);
// 4. Null
var jsonData = null;
console.log(typeof (jsonData));
console.log(jsonData);
//5. undefined
var marks = undefined;
console.log(marks);
//. any
var jsonResponse = {
    "name": "dheeraj upadhyay",
    "age": "26",
    "isActive": "true"
};
console.log(jsonResponse.isActive);
console.log(typeof jsonResponse);
// Non Primitive Data types
// 1. Array
var friends = ["dheeraj", "suresh", "kedu"];
console.log(friends);
friends.push("fakir");
console.log(friends);
console.log(typeof (friends));
console.log(typeof friends[1]);
friends.forEach(function (i) {
    console.log(i);
});

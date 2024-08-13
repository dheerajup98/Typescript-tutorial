# Typescript Learn

-> Typescript is an superset of javascript.
-> It all same to javascript but the additional thing is type provided which is unique or more protected. 
The type is check at the compile time if any error they through it.
-> Javascript check type at the run time it's known as dynamic type language.


# syntax

let myName : string = "dheeraj upadhyay";

# primitive data type in typescript

1. Number
2. Boolean
3. String 
4. Undefined-> this is falsy value in javascript it is bascially not intialized in data in variable. untialized data.
5. NuLL--> It is also falsy value in javascript null means if you fetch the data from backend and you dont know whwn your data is comes from backend. so you intialized the null keyword. you do intensionaly.
6. Any -> This is new in typescript means they avoid the type checking it means you dont know which type of data comes from the json response.

# Non Primtive data types

1. Array
=> Array is an ordered list which store data, And in javascript or typescript is array is an object.

ex- let myArr : number[] = [2,6,,9];

# Note:- If you store mixed data types in an array so, than you create in this way!
ex- let mixedArr : (string | number)[]= ["shakir","fakir","janam",25,36,89];

2. Object

ex- let student : {
    name: string;
    address: string;
    rollno: number;
    isActive: boolean;
} = {
    name:"dheeraj",
    address; "noida",
    rollno: 22,
    isActive: true
};

3. Function :- Function is an set of statement to do specific task.
In typescript the important thing is whenever you set a parameter the type is important which type of value call and return.

ex:- function callMe(dku: string, say: number):void
{
    console.log(dku,"i call you");
}

callMe("dheeraj");

3. union
=> Means we are using mixed data types.

ex:- let myInformation : (string | number)[] = ["dheeraj upadhyay",26];

4. Never
=> Never is an used in function when a function never return any value or throw an error.

ex:- function myFun():never{
    throw new Error("error);
}

myfun();

5. Unknown 
=> Unknown is also same as any but in unkown they  check type safety. Means we don't know which type of data come from the backend.

ex:- let something : never = myFun();
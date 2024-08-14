// tuple is like same as array only difference is the length of array is fixed. And type of data type is important.

let info : [string, number] = ["dheeraj",26];

console.log(info);
console.log(info.map((i)=>{
    return "the name of student is" +" "+ i + "and the age is"+" "+ i;
}));
console.log("some more function advance concept in typescript");

// let x = function (a:number, b:number) :number{
//     return a+b
// }

// console.log(x(2,65));

// optional parameter

// let myFunc = function (a:string, b?:number) : void{
//     console.log("my name is " + " "+a);
// }

// myFunc("dheeraj",undefined);
    
//default parameter

// let defParamFunc = function(x:number, y:number, z:number=1) :number{
//      return x+y+z;
// }

// console.log(defParamFunc(2,5));

// rest parameter

let restFunc = function (x:number, y:number, ...rest : number[]) : number{
    let sum = x+y;

    rest.forEach((n)=>{
        sum=sum+n;
    });

    console.log(sum);
    return sum;
}

restFunc(25,98,36,65,78,33);




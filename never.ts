// never is not return any value they are only use in infinite loop and throw an error. When function never return an value.

function dku () : never{
    throw new Error("this is my error");
}

dku();


/**
 * This program demonstrates using functions as parameters
 * and creating function types
 */

//Type script allows for new types to be created, these can also be exported to 
//different files to be reused
type mutateFunction = (e: number) => number;
type adderFunction = (val: number) => number

export function mutateArray(myArr: number[], mutate: mutateFunction): number[] {
    return myArr.map(mutate);
}

export function createAdder(num: number): adderFunction {
    return (val: number) => num + val;
}

let add10 = createAdder(10);

console.log(mutateArray([3, 6, 9], (num: number) => num ** 2));
console.log(add10(5));
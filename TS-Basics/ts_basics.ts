/**
 * This file demonstrates types and basic functions used in TS
 */

let wagmi: boolean = false;
let num: number = 10;
let rgx: RegExp = /$./;

let userName: string = "Tom";
userName += " Brady";
console.log(userName);

//typescript infers array of strings (strings[])
let names = userName.split(" ");

//You can also create an array using generics
let nums: Array<number> = [4, 5, 6];

//Objects
const Person: {
    firstName: string,
    lastName: string
} = {
    firstName: "Tom",
    lastName: "Brady"
};

//Type definition is tedious and may need to change or be reused,
//interfaces can be used to facilitate this.
interface Car {
    manufacturer: string,
    topSpeed: string
};

const myCar: Car = {
    manufacturer: "Ferrari",
    topSpeed: "250km/h"
};

console.log(myCar);

//Using object as map
//To avoid the keys being inferred as strings, 
//the utility type record is used to define key and value type
const IDs: Record<number, string> = {
    1: "Marcus",
    2: "Nelli",
    3: "0xNelli",
    4: "0xN3lli",
    5: "0xnelli"
};

IDs[6] = "Tom Brady";

console.log(IDs);



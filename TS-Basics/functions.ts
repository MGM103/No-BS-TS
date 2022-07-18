/**
 * This file demonstrates basic functions in typescript
 */

//When not given a type parameters are of the any type which will cause an error
//function return val goes after the parantheses
function powers(base: number, exponent: number): number {
    return base ** exponent;
}

export default powers;

//Now arrow functions
//str2 has been given a default val of empty string
export const stringConcat = (str1: string, str2: string = ""): string => {
    return `${str1} ${str2}`;
};

//Union types are used when a param could take more than one type
export const format = (title: string, publishYear: number | string): string => {
    return `${title} was published in: ${publishYear}`
};

//functions that don't return anything are of type void
export const printFormat = (title: string, publishYear: number | string): void => {
    console.log(`${title} was published in: ${publishYear}`);
};

//functions that return a promise
export const fetchData = (url: string): Promise<string> => 
    Promise.resolve(`Data from ${url}`);

//Note types are only enforced at compile time not at runtime
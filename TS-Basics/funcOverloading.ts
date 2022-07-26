/**
 * This file demonstrates how function overloading can facilitate
 * a function to be executed with different signatures for different
 * types of inputs
 */

//Creating interface for function
interface Coordinate {
    x: number,
    y: number
};

//Different signatures function can take
function parseCoord(obj: Coordinate): Coordinate;
function parseCoord(x: number, y: number): Coordinate;
function parseCoord(str: string): Coordinate;

function parseCoord(param1: unknown, param2?: unknown): Coordinate {
    let coord: Coordinate = {
        x: 0,
        y: 0
    };
    
    if(typeof param1 == 'object'){
        coord = {
            ...(param1 as Coordinate)
        }
    }else if(typeof param1 == 'string'){
        param1.split(',').forEach((str) => {
            const [key, value] = str.split(':');
            coord[key as "x" | "y"] = parseInt(value);
        })
    }else {
        coord = {
            x: param1 as number,
            y: param2 as number
        }
    }

    return coord;
}

console.log(parseCoord(1, 2));
console.log(parseCoord({x:3, y:4}));
console.log(parseCoord("x:5,y:6"));
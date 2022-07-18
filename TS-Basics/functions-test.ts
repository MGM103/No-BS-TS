import powers, {stringConcat, format, printFormat, fetchData} from "./functions";

console.log(powers(2, 3));
console.log(stringConcat("Tom", "Brady"));
console.log(stringConcat("Brady"));
console.log(format("Three body problem", 2014));
console.log(format("Catcher In the Rye", "the 1900s"));
printFormat("The Great Gatsby", "The Stone Age");
console.log(fetchData("localhost:8080"));

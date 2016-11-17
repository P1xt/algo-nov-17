let solutions = require( './solutions.js' );

let results = [];

// yes I know this is crappy and I should have used regex to parse out the solutions
// but for some reason "(.*ride.*?\)[ {=>(]*)(.*)([);}])" was tossing errors
// instead of giving me the function contents in $2
//
// if someone comes up with a cleaner way to count the characters inside both
// ES5 and ES6 function blocks, feel free to fix it and open a pull request :)
for (solution in solutions) {
    let body = solutions[solution].toString();
    let blockStart = body.indexOf(")");
    body = body.slice(blockStart+1);
    let first = body[0];
    while (first === " " || first === ">" || first === "{" || first === "(" || first === "=") {
        body = body.slice(1);
        first = body[0];
    }
    let last = body[body.length -1];
    if (last === ";" ) {
        body = body.slice(0, body.length -1);
    }
    last = body[body.length -1];
    if (last === "}" || last === ")") {
        body = body.slice(0, body.length -1);
    }
    results.push({camper: solution.replace("ride", ""), code: body, length: body.length});
}

console.log("All Participants\n=============================================\n");
for (let i=0, len=results.length; i < len; i++) {
    console.log(results[i].camper);
}

results = results.sort((a, b) => a.length < b.length ? -1 : 1);

console.log("\n\nTop Five by solution character count\n=============================================\n");
for (let i=0; i<5; i++) {
    console.log(results[i].camper + " - " + results[i].length + " characters")
}
console.log("\n\nAll Data \n=============================================\n")
console.log(results);
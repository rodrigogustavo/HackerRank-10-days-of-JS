'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Create the function factorial here
 */
function factorial(value){
	return (value == 1) ? 1 : value * factorial(value - 1);
}

function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}
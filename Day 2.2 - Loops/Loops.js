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
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
	
	//print all vowels
    for (let i = 0; i < s.length; i++){
    	
    	if (isVowel(s[i])){
    		console.log(s[i]);
    	}
    }
    
    //print all consonants
    for (let i = 0; i < s.length; i++){
    	if (!isVowel(s[i])){
    		console.log(s[i]);
    	}
    }
}

function isVowel(x){
    x = x.toLowerCase();
    return x == 'a' || x == 'i' || 
           x == 'e' || x == 'o' ||
           x == 'u' ;
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}
import { compose } from 'redux';

function removeSpaces(str) {
    return str.split(" ").join("");
}

function repeatString(str) {
    return str.repeat(2);
}

function makeUpperCase(str) {
    return str.toUpperCase();
}

function makeItalics(str) {
    return str.italics();
}

let str = "hello there how are you ?"

let composedFunction = compose(removeSpaces, repeatString, makeUpperCase, makeItalics);

console.log(composedFunction(str));

// compose method takes a bunch of functions and compose them into one chain of functions.
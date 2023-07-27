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

console.log(makeItalics(makeUpperCase(repeatString(removeSpaces(str)))))

// removeSpaces -> repeatString -> makeUpperCase -> makeItalics

// alternatives

const func = [str, removeSpaces, repeatString, makeUpperCase, makeItalics];
let result = func.reduce((prevAns, currFunc) => {
    console.log(prevAns, currFunc);
    return currFunc(prevAns);
});
console.log("final result is: ", result);

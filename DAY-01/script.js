//  Array ka Sum

// let arr = [5,10,15];

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log("Sum of the array is: " + sum);


// LargestNumberFind

function findMax(arr){
    let max = arr[0];
    for(let i = 1;i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
// console.log(findMax([2,7,3,9,5]));  


// stringReverse

function reverseString(str){
    let reversed = "";
    for(let i = str.length - 1; i >= 0; i--){
        reversed += str[i];
    }
    return reversed;
}
// console.log(reverseString("Hello World"));

// even number return karo

function getEvenNumbers(arr){
    let evenNumbers = [];
    for(let i = 0 ; i < arr.length;i++){
        if(arr[i] % 2 === 0){
            evenNumbers.push(arr[i]);
        }
    }
    return evenNumbers;
}

// console.log(getEvenNumbers([1,2,3,4,5,6,7,8,9,10]));


// odd number ka square karo


function getOddSquares(arr){
    let OddSquares = [];
    for(let i = 0 ; i < arr.length;i++){
        if(arr[i] % 2 !== 0){
            OddSquares.push(arr[i]* arr[i]);
        }
    }

    return OddSquares;
}
// console.log(getOddSquares([1,2,3,4,5,6,7,8,9,10]));

// count Vowel in string

function CountVowels(arr){
    let Vowels = "hello";
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === "a" || arr[i] === "e" || arr[i] === "i" || arr[i]=== "o" || arr[i] === "u"){
            Vowels += arr[i];
        }
    }
    return Vowels.length - 5;
}
// console.log(CountVowels("hello world"));

// longest word find karo
// Hint: split()

function findLargestWord(arr){
    let largestWord = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i].split("").length > largestWord.split("").length){
            largestWord = arr[i];
        }   
    }
    return largestWord;
}
// console.log(findLargestWord(["hello","world","javascript","programming"]));

// Duplicate remove karo

function removeDuplicates(arr){
    let uniqueElements = new Set(arr);
    return Array.from(uniqueElements);
}
// console.log(removeDuplicates([1,2,3,4,5,2,3,6,7,8,9,10]));

// array mein largest word length return karo
function findLargestWordLength(arr){
    let largestWordLength = arr[0].split("").length;
    for(let i = 1; i < arr.length; i++){
        if(arr[i].split("").length > largestWordLength){
            largestWordLength = arr[i].split("").length;
        }
    }
    return largestWordLength;
}
console.log(findLargestWordLength(["hello","world","javascript","programming"]));
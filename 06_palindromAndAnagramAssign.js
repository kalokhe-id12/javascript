
//MADAM
console.log(`-------------------step 1------------------------------`);

//CONST isPalindrome = function(word){

let checkPalindrom =(String) => {

    return String === String.split( " " ). reverse(). join(" ");
}

//}

const result = checkPalindrom("MADAM");
console.log(`MADAM is palindrom :${result}`);
const result1 = checkPalindrom("DAD");
console.log(`DAD is palindrom :${result1}`);
const result2 = checkPalindrom("HELLO");
console.log(`HELLO is palindrom :${result2}`);

//ANAGRAM

console.log(`---------------------------step 2----------------------------`);
console.log(`silent word is Anagram`);
// 'silent' and 'listen' are anagrams.
const str1 = 'silent'; // Sort in ascending order ==>  eilnst
const str2 = 'listen'; // Sort in ascending order ==> eilnst

const resultStr1 = str1.split("").sort().join("");
const resultStr2 = str2.split("").sort().join("");
console.log(resultStr1==resultStr2 ? true : false);

console.log(`silent word is Anagram`);
// 'hello' and 'world' are anagrams.
const str11 = 'hello'; // Sort in ascending order ==>  eilnst
const str22 = 'world'; // Sort in ascending order ==> eilnst

const resultStr11 = str11.split("").sort().join("");
const resultStr22 = str22.split("").sort().join("");
console.log(resultStr11==resultStr22 ? true : false);

console.log(`silent word is Anagram`);
// 'such' and 'much' are anagrams.
const str111 = 'such'; // Sort in ascending order ==>  eilnst
const str222 = 'much'; // Sort in ascending order ==> eilnst

const resultStr111 = str111.split("").sort().join("");
const resultStr222 = str222.split("").sort().join("");
console.log(resultStr11==resultStr22 ? true : false);
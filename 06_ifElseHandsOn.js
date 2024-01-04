
console.log("-----------------------step 1----------------------------------");

var isEvenOrOdd = function (num) {
    if (num % 2 == 0) {
      returnvalue = "EVEN";  
    }else{
        returnvalue = "ODD";
    }
    return returnvalue;
    
};
var result = isEvenOrOdd(45)
console.log(`45 Given number is ${result}`);
var result = isEvenOrOdd(70)
console.log(`70 Given number is ${result}`);
var result = isEvenOrOdd(67)
console.log(`67 Given number is ${result}`);
var result = isEvenOrOdd(98)
console.log(`98 Given number is ${result}`);
console.log(``);

console.log("-----------------------step 2--------------------------------");

var voteEligible = function (age){
    var returnValue = ""
    if (age>=18) {
        returnvalue = `you are eligibal for vote`;  
      }
      else{
          returnvalue = `sorry you are not eligibal for vote`;
      }
      return returnvalue;
};
 var result1 = voteEligible(18);
console.log(` ${result1}`);
var result1 = voteEligible(20);
console.log(` ${result1}`);
var result1 = voteEligible(17);
console.log(` ${result1}`);
var result1 = voteEligible(40);
console.log(` ${result1}`);
console.log(``);

console.log("----------------------step 3---------------------------------------");

var checkStart = function (word){
    if (word.startsWith("Java")) {
        console.log(`Given word - ${word},starts with "Java`);  
        
    }else{
        console.log(`Given word - ${word},does not start with "Java"`);
    }
}
 checkStart("JavaScript Language ");
 console.log(``);

 console.log("------------------------step 4---------------------------------------");

 var checkString = function (word){
    var returnValue = ""
    if (word.length >=10) {
        returnValue=` This string contain more than 10 character`
    }
    else{
       returnValue= `This string does not contain more than 10 character`
        
    }
    return returnValue;
}
var result = checkString("JavaScript")
console.log(` ${result}`);
var result = checkString("CSS")
console.log(` ${result}`);

console.log(`-----------------------step 1------------------------------`);
console.log(`--Array traverse using forEach() with arrow function--`);

const arrayNumbers = [1,-7,40,502,-77,91,0,108,89,-601 ];
arrayNumbers.forEach((currentvalue ,index)=>{
//console.log(`Original array :${arrayNumbers}`);
console.log(`Value=> ${currentvalue} , Index=> ${index}`);

})

console.log(`-----------------------step 2------------------------------`);

arrayNumbers.forEach( (element) => {
    if (element>=0) {

        console.log(`positive number in array is=> ${element}`);
    }
} );

console.log(`------------------------step 3-----------------------------`);

arrayNumbers.forEach( (element) => {
    if (element <=0 ) {
        console.log(`Negative number in array is => ${element}`);
    }
} );

console.log(`------------------------step 4-----------------------------`);

arrayNumbers.forEach( (element) => {

if (element%2==0) {
    console.log(`Even number in array is  => ${element}`);
    
}
}) 

console.log(`-------------------------step 5---------------------------`);

console.log(`Sum of all elements`);
const arrayNumbers1 = [1,-7,40,502,-77,91,0,108,89,-601 ];

const sum = arrayNumbers1.reduce( (arrayNumbers1, currentValue) => {
    return arrayNumbers1 + currentValue;
});
console.log(sum);

console.log(`-------------------------step 6--------------------------`);
console.log(`Even index values`);

arrayNumbers.forEach( (currentValue , index) => {

    if (index%2==0) {
        console.log(`Even number in array is  => ${index} , value=> ${currentValue}`);
        
    }
    }) 





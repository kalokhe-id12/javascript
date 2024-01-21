
const arrayNumber = [20,11,40,25,23,11,9,31,60,2,19];
console.log(arrayNumber);

console.log(`--------------------step 1--------------------------------`);

console.log(`--Add 10 into each element and log new array result--`);
console.log(`Orignal array => ${arrayNumber}`);
const arrayTransfer = arrayNumber.map(  (currentValue ) => {
    return currentValue + 10;

} )
console.log(`New array adding 10  => ${arrayTransfer}`);

console.log(`----------------------step 2--------------------------------`);

console.log(`==cube the each element in array==`);
console.log(`Orignal array => ${arrayNumber}`);
const arrayTransfer1 = arrayNumber.map(  (currentValue) => {
    return currentValue*currentValue*currentValue;
})
console.log(`cube of array element => ${arrayTransfer1}`);

console.log(`---------------------------step 3---------------------------`);

console.log(`Add the index value of each element in array`);
console.log(`Orignal array => ${arrayNumber}`);
const arrayTransfer11 = arrayNumber.map(  (currentValue ,index) => {
    //currentValue*currentValue*currentValue;
    console.log(`index==> ${index} , value==> ${currentValue}`);

})
//console.log(`index==> ${index} , value==> ${currentValue}`);


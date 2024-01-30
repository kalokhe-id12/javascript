console.log(`--given array--[113,45,56,11,32,45,109,799,56,45]`);

const arrayRollNumbers = [113,45,56,11,32,45,109,799,56,45];

console.log(`-----------------------step 1---------------------`);

console.log(`======After Reverse array is=====`);
arrayRollNumbers.reverse();
console.log(arrayRollNumbers);

console.log(`-------------------step 2--------------------------`);

console.log(`----Sorting Array Without Passing Any Arguments Array is--`);
var arrayRollNumbers1 = [113,45,56,11,32,45,109,799,56,45];
arrayRollNumbers1.sort();
console.log(arrayRollNumbers1);

console.log(`-----------------------step 3-----------------------`);

var arrayRollNumbers11 = [113,45,56,11,32,45,109,799,56,45];
console.log(`-----After sorting array in ascending order----`);
arrayRollNumbers11.sort((a, b)=> { 
    return a>b ? 1 : -1;
});
console.log(arrayRollNumbers11);

console.log(`--------------------------step 4-------------------------`);

const elementAtIndex9 = arrayRollNumbers11[9];
console.log(`Gretest element of array : ${elementAtIndex9}`);

console.log(`----------------------------step 5-----------------------`);

const elementIndex0 = arrayRollNumbers11[0];
console.log(`Smallest element of array :${elementIndex0}`);

console.log(`---------------------step 6----------------------------`);
const arr = [11,32,45,45,45,56,56,109,113,799];


function removeDuplicates(arr){
    let unique =  [];
    arr.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element);
            
        }
        
    });
    return unique;
}
console.log(removeDuplicates(arr));


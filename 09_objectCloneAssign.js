console.log(`-----------------------step 1-----------------------------`);

console.log(`Create object of Bank SBI`);
const banksbi = {  
    bankName :"SBI" ,
    address: "Mayur colony kothrud",
    place: "Kothrud" ,
    branch:"pune" ,
}

console.log(banksbi);

console.log(`------------------------step 2-----------------------------`);

console.log(`Create the object bank Location`);
const bankLocation ={
    Street:"pune,Maharashtra" ,
    City: "pune" ,
    Pin:415502
}

console.log(bankLocation);

console.log(`--------------------------step 3------------------------------`);

const bank =Object.assign({} ,banksbi,bankLocation);
bank.place ="Mumbai";

console.log(`Clone the object banksbi and bankLocation==>`);
console.log(bank);
console.log(banksbi ,bankLocation);

console.log(`------------------------step 4-----------------------------------`);

const rateOfIntrest ={
    homeLoanIntrest :5.5,
    personalLoanIntrest :7,
    dueIntrest:4.4
}
console.log(rateOfIntrest);

console.log(`------------------------step 5-------------------------------------`);

const banksbi1 = {  
    bankName :"SBI" ,
    address: "Mayur colony kothrud",
    place: "Kothrud" ,
    branch:"pune" ,
}

const bankLocation1 ={
    Street:"pune,Maharashtra" ,
    City: "pune" ,
    Pin:415502
}

const rateOfIntrest1 ={
    homeLoanIntrest :5.5,
    personalLoanIntrest :7,
    dueIntrest:4.4
}

const mergeObj = Object.assign({}, banksbi1, bankLocation1, rateOfIntrest1);
console.table(banksbi1);
console.table(bankLocation1);
console.table(rateOfIntrest1);
console.table(mergeObj);

console.log(`-------------------------step 6--------------------------------------`);

console.log(`Traverse object`);

for (const key in mergeObj) {
    if (Object.hasOwnProperty.call(mergeObj, key)) {
        const element = mergeObj[key];

        console.log(element);
        
    }
}
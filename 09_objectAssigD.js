console.log(`====================step 1,2,3=====================`);

let professor = {

    Name: "Saurabh",
    age:38,
    gender : "Male" ,
    isMarried: "true" ,
    Education:" Msc" ,
    city: "pune" ,
    certificate:['Hacker Rank Participation' , 'Certificate in LFE course', 'Certificate in Adv Programming']
}

let Degrees={
Engeineering:'CSC',
PHD:'Adv Coputing',
DLitte:'Writing',
MPhill:'Research project',

}
console.log(professor);
console.log(Degrees);
console.log(professor.certificate);

console.log(`=====================step 4========================`);

console.log(`Add new property totalExperiance`);
totalExperiance={
    Experiance : "14 years",
    }
    console.log(totalExperiance);

console.log(`=======================step 5============================`);   

console.log(`Modify age value`);
professor.age= 32
console.log(professor);

console.log(`=========================step 6===========================`);

console.log(`Add oracle Certificate at index 2`);
professor.certificate.splice(2,0,"Oracle Certificate");
console.log(professor.certificate);

console.log(`========================step 7==========================`);

console.log(`Last element of array`);
lastElement=professor.certificate[3];
console.log(lastElement);

console.log(`========================step 8========================`);

console.log(`Traverse array using forOf Loop`); 

for (const key in professor.certificate) {
    if (Object.hasOwnProperty.call(professor.certificate,key)) {
        const element = professor.certificate[key];
        console.log(`key ==> ${key}, value ==> ${element}`);
    }

}














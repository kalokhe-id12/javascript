
class Employee {

    constructor (emp_id ,emp_name ,emp_dept ,emp_salary , emp_company) {
         this.emp_id=emp_id ;
         this.emp_name = emp_name;
         this.emp_dept = emp_dept;
         this.emp_salary = emp_salary;
         this.emp_company = emp_company;

    }
}
const emp_anil = new Employee(22, "Anil" , "IT", 50000 , "TCS");
const emp_radha = new Employee (33 , "Radha" , "HR", 74000 , "Wipro");
const emp_rishi = new Employee (55 , "Rishi", "Finance", 47000 , "TCS");
const emp_sonali = new Employee (66 , "Sonali", "Finance", 45000 , "Infy");
const emp_monika = new Employee  (77 ,"Monika", "IT", 40000 , "Wipro");
const emp_vinay = new Employee (88, "Vinayak", "IT", 75000 , "TCS");
const emp_mahi = new Employee (99 , "Mahesh", "HR", 85000, "Infy");

const arrayEmployee = [emp_anil ,emp_radha, emp_rishi ,emp_sonali ,emp_monika,emp_vinay,emp_mahi];

console.log(`-----------------------step 1-------------------------------------------`);


const arr = arrayEmployee.filter( (Element) =>  {

    return Element.emp_company=='TCS' ;
});
console.log(arr);
arr.forEach(Element => {
    console.log(`Employee Name => ${Element.emp_name} ,employee company => ${Element.emp_company}`);
    
});
console.log(` `);

console.log(`---------------------------------step 2-------------------------------`);

const Employee1 = arrayEmployee.filter(person => person.emp_company === 'wipro');

const average = Employee1.reduce( (total,next) => total + next.emp_salary, 0) /Employee1.length
console.log(`The average salary of employee from wipro company==> ${average}`);
console.log(` `);

console.log(`-----------------------step 3------------------------------------------`);
const Employee2 = arrayEmployee.filter(person => person.emp_company== 'wipro' ||person.emp_company === 'Infy' )

const average1 = Employee2.reduce((total,next) => total + next.emp_salary ,0) /Employee2.length;
console.log(`The average salary of employee from wipro and infy===> ${average1}`);
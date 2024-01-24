
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

console.log(`----------------------------step 1------------------------`);
console.log(`List of all employees from wipro`);

const arrayEmps = arrayEmployee.filter((Element) => {
return Element.emp_company=='Wipro';

});
console.log(arrayEmps);

arrayEmps.forEach(Element => {
    console.log(`Employee ID => ${Element.emp_id} , Employee Name => ${Element.emp_name} ,Employee department => ${Element.emp_dept} ,Employee salary =>${Element.emp_salary} ,Employee company => ${Element.emp_company}`);

});
console.log(``);

console.log(`------------------------------step 2--------------------------------`);

console.log(`List of all employees 'IT' OR 'HR' `);

const arrayEmps1 = arrayEmps.filter(person => person.emp_dept== 'IT' ||person.emp_dept === 'HR' )

const arrayEmps11 = arrayEmps.reduce((total,next) => total + next.emp_dept ,0) /Employee2.length;
console.log(`total employee from IT or HR department===> ${total}`);

    
    
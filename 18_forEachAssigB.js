
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

console.log(`-----------step 1-----------------`);

arrayEmployee.forEach(emp => {
    if (emp.emp_company=="TCS") {
        console.log(`employee name: ${emp.emp_name} , employee company: ${emp.emp_company} `  )
        
    }
    
});

console.log(`--------------------step 2-----------------`);

arrayEmployee.forEach(emp => {
  if (emp.emp_salary >=50000) {
    console.log(`employee ID: ${emp.emp_id}, employee Name: ${emp.emp_name} , employee department: ${emp.emp_dept}, employee salary: ${emp.emp_salary}, employee company: ${emp.emp_company}`);
    
  }

}) ;

console.log(`-------------------step 3-------------------`);
const totalsalary =arrayEmployee.reduce( (runningTotal ,Element)=>{
return runningTotal + Element.emp_salary;

},0)
console.log(`Total salary =>${totalsalary}`);

console.log(`--------------------step 4--------------------`);

const Average = arrayEmployee.reduce( (runningTotal,Element)=>{
return runningTotal + Element.emp_salary/arrayEmployee.length;

},0);

console.log(`--------------------step 5-----------------------`);

arrayEmployee.forEach(emp => {

if (emp.emp_salary >=75000 || emp.emp_dept=="IT ,HR") {
    console.log(`employee ID: ${emp.emp_id}, company Name: ${emp.emp_name}, employee department: ${emp.emp_dept}`);
    
}

})




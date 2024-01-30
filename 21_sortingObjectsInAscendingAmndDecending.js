

class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha = new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi = new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali = new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika = new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny = new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi = new Employee(99,"Mahesh","HR",85000,"Infy");
const arryEmployee = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
console.log(`-------------------------step 1--------------------------------------------`);
console.log(`==Employee ID's in decending order ==`);
arryEmployee.sort((s1,s2)=>{
    return s1.id>=s2.id ? 1 : -1;
});
arryEmployee.forEach((emp)=>{
    console.log(`employee ID:${emp.emp_id},employee name: ${emp.emp_name},employee Department:${emp.emp_dept}`);
   // console.log(emp);
});
console.log(`-------------------------step 2--------------------------------------------`);
console.log(`==Employee Department's in ascending order==`);
arryEmployee.sort((s1,s2)=>{
    return s1.emp_dept>=s2.emp_dept ? 1 : -1;
});
arryEmployee.forEach((emp)=>{
    console.log(`employee ID: ${emp.emp_id},employee Department:${emp.emp_dept},employee company:${emp.emp_company}`);
   // console.log(emp);
});
//console.log(arryEmployee);
console.log(`-------------------------step 3--------------------------------------------`);
console.log(`==Employee salary in decending order==`);
arryEmployee.sort((s1,s2)=>{
    return s1.emp_salary>=s2.emp_salary ? -1 : 1;
});
arryEmployee.forEach((emp)=>{
    console.log(` employee name: ${emp.emp_name} ,employee salary : ${emp.emp_salary} ,employee company: ${emp.emp_company}` )
})
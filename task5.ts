class Employee
{
     protected empId:number;
     protected empName:string;
     protected empDesg:string;
     constructor(id:number,name:string,desi:string)
     {
         this.empId=id;
         this.empName=name;
         this.empDesg=desi;
     }
    empDetails()
    {
        return `EmpId:${this.empId}\nEmpName:${this.empName}\nEmpDesignation:${this.empDesg}`;
    }
}
class PaySlip extends Employee
{
     sal:number;
     
     constructor(id:number,name:string,desi:string,sal:number)
     {
        super(id,name,desi);
        this.sal=sal;

     }
     getEmpDetails()
     {
        var da=(25/100)*(this.sal);
        var tax=(15/100)*(this.sal);
        var hra=800;
        var gross=(this.sal)-(da+tax+hra);
        return `EmpId:${this.empId}\nEmpName:${this.empName}\nEmpDesignation:${this.empDesg}\nEmpSal:${this.sal}\nEmdDA:${da}\nEmpHra:${hra}\nEmpTax:${tax}\nNetSalary:${gross}`;
     }
}
var empObj=new PaySlip(1,"abcd","developer",20000);
console.log(empObj.empDetails());
console.log(empObj.getEmpDetails());


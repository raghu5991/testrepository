//class defination and object creation and calling menmbers

class Employee
{
    empId:number=1;
    empName:string="raghu";
    empSal:number=1000;
    constructor(id:number,name:string,sal:number)
    {
        this.empId=id;
        this.empName=name;
        this.empSal=sal;
    }
    dispalyDet()
    {
        console.log(`EmpId:${this.empId}, EmpName:${this.empName}`)
    }
}
// var emmObj=new Employee();
// console.log(emmObj.empId);
// emmObj.dispalyDet();

export class Position extends Employee
{
    post:string="java developer";
    constructor(id:number,name:string,sal:number,post:string)
    {
        super(id,name,sal);
        this.post=post;

    }
    dispalyDet()
    {
        console.log(`EmpId:${this.empId}, EmpName:${this.empName}, EmpPosition:${this.post}`)
    }
}
//var posObj=new Position(1,"raghu",100,"java");
//posObj.dispalyDet();
interface Student
{
    stuId:number;
    stuName:string;
    stDetails();
}
class StudentImpl implements Student
{
    stuId;
    stuName;
    constructor(id:number,name:string)
    {
        this.stuId=id;
        this.stuName=name;
    }
    stDetails()
    {
        console.log(`Id:${this.stuId}, name:${this.stuName}`);
    }
}
var obj=new StudentImpl(1,"raghu");
obj.stDetails();
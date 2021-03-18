class Stu
{
    private studentId:number;
    private studentName:string;
    set _stuId(value)
    {
       this.studentId=value;
    }
    get _stuId()
    {
        return this.studentId;
    }
    set _stuName(value)
    {
       this.studentName=value;
    }
    get _stuName()
    {
        return this.studentName;
    }

    
}
var stuObj=new Stu();
stuObj._stuId=1;
stuObj._stuName="raghuaaaa";
console.log(stuObj);



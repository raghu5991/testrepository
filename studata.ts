class StuData
{
    protected stdId:number;
    protected stdName:string;
    protected stdSection:string;
    protected stdContact:number;
    constructor(id:number,name:string,section:string,contact:number)
        {
            this.stdId=id;
            this.stdName=name;
            this.stdSection=section;
            this.stdContact=contact;
        }
}
class Marks extends StuData
{
    totalmarks:number;
    m1:number;
    m2:number;
    constructor(id:number,name:string,section:string,contact:number,marks:number)
        {
            super(id,name,section,contact);
            this.totalmarks=marks;
        }
        getAllInfo()
        {
            return `StudentID:${this.stdId}, StudentName:${this.stdName}, StudentSrction:${this.stdSection}, StudentNumber:${this.stdContact}, StudentMarks:${this.totalmarks}`;
        }
}
var markobj=new Marks(1,"abcd","a",9547863215,90);
console.log(markobj.getAllInfo());

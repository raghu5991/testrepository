class StudentDetails
{
    private rollnum:number;
    private address:string;
    private phonenum:number;
     set _rollnum(value)
    {
       this.rollnum=value;
    }
    get _rollnum()
    {
        return this.rollnum;
    }
    set _address(value)
    {
       this.address=value;
    }
    get _address()
    {
        return this.address;
    }
    set _phone_num(value)
    {
       this.phonenum=value;
    }
    get _phone_num()
    {
        return this.phonenum;
    }
}
var stuObj1=new StudentDetails();
stuObj1._rollnum=1;
stuObj1._address="hyd";
stuObj1._phone_num=3214569874;
console.log(stuObj1);

var stuObj2=new StudentDetails();
stuObj2._rollnum=2;
stuObj2._address="mumbai";
stuObj2._phone_num=12365478989;
console.log(stuObj2);

var stu:Array<StudentDetails>=[stuObj1,stuObj2];

stu.forEach((val)=>
{
    console.log(`Id:${val._rollnum}\nPhoneNumber:${val._phone_num}\nAddress:${val._address}`)
});
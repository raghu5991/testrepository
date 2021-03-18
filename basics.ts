//number type,string,boolean
var num:number=10.0;
var myname:string="raghu";
var condtion:boolean=true;
console.log(num+"===="+myname+"===="+condtion);

//arrays
var students:string[]=["raghu","raj","madu"];
var fruits:Array<String>=["apple","banana"];
console.log("array====="+students+"===="+fruits);

//tupple
var product:[string,number]=["raghu",1];
console.log("tupples====="+product);

//enum
enum colour{red,yellow,white,black}
var num1=colour.black;
console.log("enum====="+num1);

//union
var mix:string|number|boolean=10;
console.log("union====="+mix);

//any --we can store any type variabes ibto it
var unknown:any="my name is raghu";
console.log("unknownvalue===="+unknown);

//object type
var emp={
    empid:101,
    empname:"raghu",
    empsal:100,
    empDeta:function()
    {
       console.log(`Id: ${this.empid}, Name: ${this.empname}, Sal: ${this.empsal} `);
      // return "Id " + emp.empid;
    }
}
console.log("object type==="+emp.empDeta);
console.log("object type==="+emp.empid);

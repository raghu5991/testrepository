//for each method
var student:string[]=["raghu","raj","madhu","vamshi"];
var strlist:string="";
student.forEach((value)=>
{
    strlist +=value+"  ";
});
console.log("for eacg method=="+strlist);

//map, and filter methods

var numbers:number[]=[1,2,3,4,5,6,7];
var outnumbers=numbers.filter((val)=>
{
return val>2;
});
console.log("filter method=="+outnumbers);

var outnumbersmap=numbers.map((val)=>
{
return val*2;
});
console.log("map method=="+outnumbersmap);

//Every function
var everynum=numbers.every((val)=>
{
return val>1;
});
console.log("Every====="+everynum);

//some function
var sumnum=numbers.some((val)=>
{
return val>1;
});
console.log("sum====="+sumnum);

//reduce function
var reducenum=numbers.reduce((first,second)=>
{
return first+second;
});
console.log("reduce====="+reducenum);

//ES6
//let and const are the block level scopes 
function demo()
{
    var num1=100;
    const num2=200;
    if(num1>50)
    {
        let num1=300;
        const num2=400;
        console.log(num1);
        console.log(num2);
    }
        console.log(num1);
        console.log(num2);
}
demo();

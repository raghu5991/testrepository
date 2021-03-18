
var empList=[{id:1,name:"raghu"},{id:2,name:"raj"},{id:3,name:"rak"}];

empList.forEach((val)=>{

console.log(`Id=====:${val.id}\nName:${val.name}`)
});

var out=empList.filter((val)=>
{
    return val.id>2
});

console.log(out);

var mapout=empList.map((val)=>
{
    return val.id+10;
});
console.log(mapout);



//number type,string,boolean
var num = 10.0;
var myname = "raghu";
var condtion = true;
console.log(num + "====" + myname + "====" + condtion);
//arrays
var students = ["raghu", "raj", "madu"];
var fruits = ["apple", "banana"];
console.log("array=====" + students + "====" + fruits);
//tupple
var product = ["raghu", 1];
console.log("tupples=====" + product);
//enum
var colour;
(function (colour) {
    colour[colour["red"] = 0] = "red";
    colour[colour["yellow"] = 1] = "yellow";
    colour[colour["white"] = 2] = "white";
    colour[colour["black"] = 3] = "black";
})(colour || (colour = {}));
var num1 = colour.black;
console.log("enum=====" + num1);
//union
var mix = 10;
console.log("union=====" + mix);
//any --we can store any type variabes ibto it
var unknown = "my name is raghu";
console.log("unknownvalue====" + unknown);
//object type
var emp = {
    empid: 101,
    empname: "raghu",
    empsal: 100,
    empDeta: function () {
        console.log("Id: " + this.empid + ", Name: " + this.empname + ", Sal: " + this.empsal + " ");
        // return "Id " + emp.empid;
    }
};
console.log("object type===" + emp.empDeta);
console.log("object type===" + emp.empid);

//for each method
var student = ["raghu", "raj", "madhu", "vamshi"];
var strlist = "";
student.forEach(function (value) {
    strlist += value + "  ";
});
console.log("for eacg method==" + strlist);
//map, and filter methods
var numbers = [1, 2, 3, 4, 5, 6, 7];
var outnumbers = numbers.filter(function (val) {
    return val > 2;
});
console.log("filter method==" + outnumbers);
var outnumbersmap = numbers.map(function (val) {
    return val * 2;
});
console.log("map method==" + outnumbersmap);
//Every function
var everynum = numbers.every(function (val) {
    return val > 1;
});
console.log("Every=====" + everynum);
//some function
var sumnum = numbers.some(function (val) {
    return val > 1;
});
console.log("sum=====" + sumnum);
//reduce function
var reducenum = numbers.reduce(function (first, second) {
    return first + second;
});
console.log("reduce=====" + reducenum);
//ES6
//let and const are the block level scopes 
function demo() {
    var num1 = 100;
    var num2 = 200;
    if (num1 > 50) {
        var num1_1 = 300;
        var num2_1 = 400;
        console.log(num1_1);
        console.log(num2_1);
    }
    console.log(num1);
    console.log(num2);
}
demo();

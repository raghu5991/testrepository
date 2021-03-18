"use strict";
//class defination and object creation and calling menmbers
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Position = void 0;
var Employee = /** @class */ (function () {
    function Employee(id, name, sal) {
        this.empId = 1;
        this.empName = "raghu";
        this.empSal = 1000;
        this.empId = id;
        this.empName = name;
        this.empSal = sal;
    }
    Employee.prototype.dispalyDet = function () {
        console.log("EmpId:" + this.empId + ", EmpName:" + this.empName);
    };
    return Employee;
}());
// var emmObj=new Employee();
// console.log(emmObj.empId);
// emmObj.dispalyDet();
var Position = /** @class */ (function (_super) {
    __extends(Position, _super);
    function Position(id, name, sal, post) {
        var _this = _super.call(this, id, name, sal) || this;
        _this.post = "java developer";
        _this.post = post;
        return _this;
    }
    Position.prototype.dispalyDet = function () {
        console.log("EmpId:" + this.empId + ", EmpName:" + this.empName + ", EmpPosition:" + this.post);
    };
    return Position;
}(Employee));
exports.Position = Position;
//var posObj=new Position(1,"raghu",100,"java");
//posObj.dispalyDet();

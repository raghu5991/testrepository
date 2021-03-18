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
var Employee = /** @class */ (function () {
    function Employee(id, name, desi) {
        this.empId = id;
        this.empName = name;
        this.empDesg = desi;
    }
    Employee.prototype.empDetails = function () {
        return "EmpId:" + this.empId + "\nEmpName:" + this.empName + "\nEmpDesignation:" + this.empDesg;
    };
    return Employee;
}());
var PaySlip = /** @class */ (function (_super) {
    __extends(PaySlip, _super);
    function PaySlip(id, name, desi, sal) {
        var _this = _super.call(this, id, name, desi) || this;
        _this.sal = sal;
        return _this;
    }
    PaySlip.prototype.getEmpDetails = function () {
        var da = (25 / 100) * (this.sal);
        var tax = (15 / 100) * (this.sal);
        var hra = 800;
        var gross = (this.sal) - (da + tax + hra);
        return "EmpId:" + this.empId + "\nEmpName:" + this.empName + "\nEmpDesignation:" + this.empDesg + "\nEmpSal:" + this.sal + "\nEmdDA:" + da + "\nEmpHra:" + hra + "\nEmpTax:" + tax + "\nNetSalary:" + gross;
    };
    return PaySlip;
}(Employee));
var empObj = new PaySlip(1, "abcd", "developer", 20000);
console.log(empObj.empDetails());
console.log(empObj.getEmpDetails());

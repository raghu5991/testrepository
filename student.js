var StudentDetails = /** @class */ (function () {
    function StudentDetails() {
    }
    Object.defineProperty(StudentDetails.prototype, "_rollnum", {
        get: function () {
            return this.rollnum;
        },
        set: function (value) {
            this.rollnum = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StudentDetails.prototype, "_address", {
        get: function () {
            return this.address;
        },
        set: function (value) {
            this.address = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StudentDetails.prototype, "_phone_num", {
        get: function () {
            return this.phonenum;
        },
        set: function (value) {
            this.phonenum = value;
        },
        enumerable: false,
        configurable: true
    });
    return StudentDetails;
}());
var stuObj1 = new StudentDetails();
stuObj1._rollnum = 1;
stuObj1._address = "hyd";
stuObj1._phone_num = 3214569874;
console.log(stuObj1);
var stuObj2 = new StudentDetails();
stuObj2._rollnum = 2;
stuObj2._address = "mumbai";
stuObj2._phone_num = 12365478989;
console.log(stuObj2);
var stu = [stuObj1, stuObj2];
stu.forEach(function (val) {
    console.log("Id:" + val._rollnum + "\nPhoneNumber:" + val._phone_num + "\nAddress:" + val._address);
});

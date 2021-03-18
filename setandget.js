var Stu = /** @class */ (function () {
    function Stu() {
    }
    Object.defineProperty(Stu.prototype, "_stuId", {
        get: function () {
            return this.studentId;
        },
        set: function (value) {
            this.studentId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stu.prototype, "_stuName", {
        get: function () {
            return this.studentName;
        },
        set: function (value) {
            this.studentName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Stu;
}());
var stuObj = new Stu();
stuObj._stuId = 1;
stuObj._stuName = "raghuaaaa";
console.log(stuObj);

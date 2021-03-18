var StudentImpl = /** @class */ (function () {
    function StudentImpl(id, name) {
        this.stuId = id;
        this.stuName = name;
    }
    StudentImpl.prototype.stDetails = function () {
        console.log("Id:" + this.stuId + ", name:" + this.stuName);
    };
    return StudentImpl;
}());
var obj = new StudentImpl(1, "raghu");
obj.stDetails();

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
var StuData = /** @class */ (function () {
    function StuData(id, name, section, contact) {
        this.stdId = id;
        this.stdName = name;
        this.stdSection = section;
        this.stdContact = contact;
    }
    return StuData;
}());
var Marks = /** @class */ (function (_super) {
    __extends(Marks, _super);
    function Marks(id, name, section, contact, marks) {
        var _this = _super.call(this, id, name, section, contact) || this;
        _this.totalmarks = marks;
        return _this;
    }
    Marks.prototype.getAllInfo = function () {
        return "StudentID:" + this.stdId + ", StudentName:" + this.stdName + ", StudentSrction:" + this.stdSection + ", StudentNumber:" + this.stdContact + ", StudentMarks:" + this.totalmarks;
    };
    return Marks;
}(StuData));
var markobj = new Marks(1, "abcd", "a", 9547863215, 90);
console.log(markobj.getAllInfo());

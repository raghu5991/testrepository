"use strict";
exports.__esModule = true;
exports.Circle = void 0;
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        console.log("area of circle===" + (22 / 7) * Math.pow((this.radius), 2));
    };
    return Circle;
}());
exports.Circle = Circle;

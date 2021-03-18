var Area = /** @class */ (function () {
    function Area(len, wid) {
        this.length = len;
        this.width = wid;
    }
    Area.prototype.getArea = function () {
        console.log("area of rectangle===" + (this.length * this.width));
    };
    return Area;
}());
var area = new Area(10, 12);
area.getArea();

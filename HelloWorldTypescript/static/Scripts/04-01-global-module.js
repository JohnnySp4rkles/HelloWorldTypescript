/// <reference path="../../wwwroot/js/typings/toastr.d.ts" />
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    ;
    Point.prototype.getDist = function () { return Math.sqrt(this.x * this.y); };
    return Point;
}());
var p = new Point(3, 4);
var dist = p.getDist();
toastr.info("distance = " + dist);
//# sourceMappingURL=04-01-global-module.js.map
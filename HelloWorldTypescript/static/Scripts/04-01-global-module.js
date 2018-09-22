/// <reference path="../../wwwroot/js/typings/toastr.d.ts" />
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    ;
    Point.prototype.getDist = function () { return Math.sqrt(this.x * this.x + this.y * this.y); };
    return Point;
}());
var p = new Point(3, 4);
var dist = p.getDist();
var opt = {
    closeButton: true,
    positionClass: "toast-bottom-center",
    showDuration: 100,
    hideDuration: 100,
    timeOut: 1500,
    extendedTimeOut: 1000,
    messageClass: "toast-warning",
};
var opt2 = {
    closeButton: true,
    positionClass: "toast-top-right",
    showDuration: 100,
    hideDuration: 100,
    timeOut: 2000,
    closeHtml: "<button><i class='fas fa-angle-double-down'></i></button>'"
};
toastr.success("distance = " + dist, "No Title", opt2);
setTimeout(function () { toastr.success('We do have the Kapua suite available.', 'Turtle Bay Resort', opt2); }, 5000);
//# sourceMappingURL=04-01-global-module.js.map
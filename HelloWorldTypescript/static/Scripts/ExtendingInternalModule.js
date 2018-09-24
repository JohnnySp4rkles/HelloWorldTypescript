//Extending Internal modules
var LoggerMode = {
    Console: 1,
    Alert: 2,
    Toastr: 3
};
var App;
(function (App) {
    var Tools;
    (function (Tools) {
        var Utils;
        (function (Utils) {
            var Logger = /** @class */ (function () {
                function Logger(mode) {
                    if (mode === void 0) { mode = LoggerMode.Console; }
                    this.mode = mode;
                    switch (this.mode) {
                        case LoggerMode.Console:
                            this.writer = function (msg) { return console.log(msg); };
                            break;
                        case LoggerMode.Alert:
                            this.writer = function (msg) { return alert(msg); };
                            break;
                        case LoggerMode.Toastr:
                            this.writer = function (msg) { return toastr.info(msg); };
                            break;
                    }
                }
                Logger.prototype.write = function (msg) {
                    this.writer(msg);
                };
                ;
                return Logger;
            }());
            Utils.Logger = Logger;
        })(Utils = Tools.Utils || (Tools.Utils = {}));
    })(Tools = App.Tools || (App.Tools = {}));
})(App || (App = {}));
(function (App) {
    var Tools;
    (function (Tools) {
        var Shapes;
        (function (Shapes) {
            var Point = /** @class */ (function () {
                function Point(x, y) {
                    this.x = x;
                    this.y = y;
                }
                Point.prototype.getDist = function () { return Math.sqrt(this.x * this.x + this.y * this.y); };
                return Point;
            }());
            Shapes.Point = Point;
        })(Shapes = Tools.Shapes || (Tools.Shapes = {}));
    })(Tools = App.Tools || (App.Tools = {}));
})(App || (App = {}));
(function (App) {
    var Tools;
    (function (Tools) {
        var Shapes;
        (function (Shapes) {
            var Rectangle = /** @class */ (function () {
                function Rectangle(height, width) {
                    this.height = height;
                    this.width = width;
                }
                Rectangle.prototype.getPerimeter = function () { return this.height * 2 + this.width * 2; };
                Rectangle.prototype.getArea = function () { return this.height * this.width; };
                return Rectangle;
            }());
            Shapes.Rectangle = Rectangle;
        })(Shapes = Tools.Shapes || (Tools.Shapes = {}));
    })(Tools = App.Tools || (App.Tools = {}));
})(App || (App = {}));
var tools = App.Tools;
var util = App.Tools.Utils;
var logger = new util.Logger(3);
var p = new tools.Shapes.Point(4, 12);
var dist = p.getDist();
logger.write("Distance: " + dist);
//# sourceMappingURL=ExtendingInternalModule.js.map
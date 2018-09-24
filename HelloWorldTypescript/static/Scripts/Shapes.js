/// <reference path="utils.ts" />
var App;
(function (App) {
    var Shapes;
    (function (Shapes) {
        class Point {
            constructor(x, y) {
                this.x = x;
                this.y = y;
            }
            getDistance() { return this.x * this.x + this.y * this.y; }
        }
        Shapes.Point = Point;
        class Rectangle {
            constructor(width, height) {
                this.width = width;
                this.height = height;
            }
            getArea() { return this.height * this.width; }
            getPerimeter() { return this.height * 2 + this.width * 2; }
        }
        Shapes.Rectangle = Rectangle;
    })(Shapes = App.Shapes || (App.Shapes = {}));
})(App || (App = {}));
var MyShapes = App.Shapes;
var log = new App.Utils.Logger(App.LoggerMode.Toastr);
var p = new MyShapes.Point(3, 4);
var dist = p.getDistance();
log.write("Point distance: " + dist);
var rect = new MyShapes.Rectangle(3, 4);
var perimeter = rect.getPerimeter();
var area = rect.getArea();
log.write("Rectangle perimeter:" + perimeter);
log.write("Rectangle area:" + area);
//# sourceMappingURL=Shapes.js.map
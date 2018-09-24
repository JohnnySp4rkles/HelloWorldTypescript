/// <reference path="../../wwwroot/js/typings/toastr.d.ts" />
var Shapes;
(function (Shapes) {
    class Rectangle {
        constructor(height, width) {
            this.height = height;
            this.width = width;
        }
        getArea() { return this.height * this.width; }
        getPerimeter() { return (this.width + this.height) * 2; }
    }
    Shapes.Rectangle = Rectangle;
})(Shapes || (Shapes = {}));
var rect = new Shapes.Rectangle(10, 10);
console.log("Area of rectangle: " + rect.getArea());
toastr.info("Area of rectangle: " + rect.getArea());
//# sourceMappingURL=InternalModule.js.map
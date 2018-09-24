/// <reference path="../../wwwroot/js/typings/toastr.d.ts" />

interface IRectangle {
    width: number;
    height: number;
    getArea(): number;
}

namespace Shapes {
    export class Rectangle implements IRectangle {
        constructor(public height: number, public width: number) {
        }
        getArea() { return this.height * this.width; }
        getPerimeter() { return (this.width + this.height) * 2; }
    }
}

var rect = new Shapes.Rectangle(10, 10);

console.log("Area of rectangle: " + rect.getArea());
toastr.info("Area of rectangle: " + rect.getArea());
/// <reference path="utils.ts" />

namespace App.Shapes {
    export interface IPoint {
        getDistance(): number;
    }

    export interface IRectangle {
        width: number;
        height: number;
        getPerimeter(): number;
        getArea(): number;
    }

    export class Point implements IPoint {
        constructor(public x: number, public y: number) { }
        getDistance() { return this.x * this.x + this.y * this.y }
    }

    export class Rectangle implements IRectangle {
        constructor(public width: number, public height: number) {}
        getArea() { return this.height * this.width; }
        getPerimeter() { return this.height * 2 + this.width * 2; }
    }
}

import MyShapes = App.Shapes;
var log: App.Utils.ILogger = new App.Utils.Logger(App.LoggerMode.Toastr);


var p: MyShapes.IPoint = new MyShapes.Point(3, 4);
var dist = p.getDistance();

log.write("Point distance: " + dist);

var rect: MyShapes.IRectangle = new MyShapes.Rectangle(3, 4);
var perimeter = rect.getPerimeter();
var area = rect.getArea();

log.write("Rectangle perimeter:" + perimeter);
log.write("Rectangle area:" + area);
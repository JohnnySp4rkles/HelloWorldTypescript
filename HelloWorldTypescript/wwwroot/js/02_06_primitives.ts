module demo_02_06 {
    // object
    var points1 = { x: 10, y: 100 };
    var x = points1.x;

    var points2 = {};
    points2 = { x: 20, y: 90 };

    var points3: any = { x: 1 };

    var rectangle = {
        h: 10,
        w: 20,
        calcArea: function () {
            return this.h * this.w;
        }
    };

    //console.log("Rectangle area: " + rectangle.calcArea());

    var squareIt = function (rectangle: { h: number; w?: number; }) {
        if (rectangle.w === undefined)
            return rectangle.h * rectangle.h;
        return rectangle.h * rectangle.w;
    }

    var sqr1 = squareIt({ h: 100, w: 10 });
    var sqr2 = squareIt(rectangle);
    var sqr3 = squareIt(points3);
    console.log("SquareIt: ", sqr1);
    console.log("SquareIt: ", sqr2);
    console.log("SquareIt: ", sqr3);
}
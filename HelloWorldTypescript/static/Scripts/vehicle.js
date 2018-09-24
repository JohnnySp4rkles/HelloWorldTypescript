class Engine {
    constructor(hoursePower, engineType) {
        this.hoursePower = hoursePower;
        this.engineType = engineType;
    }
}
class Car {
    constructor(engine) {
        this.engine = engine;
    }
    get engine() {
        return this._engine;
    }
    set engine(value) {
        if (value === undefined)
            throw 'Please supply an engine';
        this._engine = value;
    }
    start() {
        alert("Car engine started " + this._engine.engineType + " with " + this._engine.hoursePower + " horse power");
    }
}
window.onload = function () {
    var engine = new Engine(300, 'V8');
    var car = new Car(engine);
    car.start();
};
//# sourceMappingURL=vehicle.js.map
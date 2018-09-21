class Engine {
    constructor(public hoursePower: number, public engineType: string) { }
}

class Car {
    private _engine: Engine;

    constructor(engine: Engine) {
        this.engine = engine;
    }

    get engine(): Engine {
        return this._engine;
    }
    set engine(value: Engine) {
        if (value === undefined)
            throw 'Please supply an engine';
        this._engine = value;
    }
    start() {
        alert("Car engine started " + this._engine.engineType + " with "+this._engine.hoursePower+" horse power");
    }
}

window.onload = function () {
    var engine = new Engine(300, 'V8');
    var car = new Car(engine);

    car.start();
}
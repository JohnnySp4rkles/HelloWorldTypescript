class AnEngine {
    constructor(hoursePower, engineType) {
        this.hoursePower = hoursePower;
        this.engineType = engineType;
    }
    start(callback) {
        window.setTimeout(() => {
            callback(true, this.engineType);
        }, 1000);
    }
    stop(callback) {
        window.setTimeout(() => {
            callback(true, this.engineType);
        }, 1000);
    }
}
class CustomEngine {
    start(callback) {
        window.setTimeout(() => {
            callback(true, "Custom Engine");
        }, 1000);
    }
    stop(callback) {
        window.setTimeout(() => {
            callback(true, "Custom Engine");
        }, 1000);
    }
}
class Accessory {
    constructor(accessoryNumber, title) {
        this.accessoryNumber = accessoryNumber;
        this.title = title;
    }
}
class Auto {
    constructor(options) {
        this.engine = options.engine;
        this.basePrice = options.basePrice;
        this.state = options.state;
        this.make = options.make;
        this.model = options.model;
        this.year = options.year;
    }
    calculateTotal() {
        return this.basePrice + (this.basePrice * 0.08);
    }
    addAccessory(...accessories) {
        this.accessoryList = '';
        for (var i = 0; i < accessories.length; i++) {
            var access = accessories[i];
            this.accessoryList += access.accessoryNumber + " " + access.title + "<br/>";
        }
    }
    getAccessoryList() {
        return this.accessoryList;
    }
    get basePrice() {
        return this._basePrice;
    }
    set basePrice(price) {
        if (price <= 0)
            throw 'price must be > 0';
        this._basePrice = price;
    }
    get engine() {
        return this._engine;
    }
    set engine(engine) {
        this._engine = engine;
    }
}
class Truck extends Auto {
    constructor(options) {
        super(options);
        this.bedLength = options.bedLength;
        this.fourByFour = options.FbyF;
    }
}
window.onload = function () {
    var truck = new Truck({
        engine: new AnEngine(200, "Super Engine"),
        basePrice: 45000,
        make: "Ford",
        model: "F-150",
        state: "Arizona",
        year: 2018,
        bedLength: "Long",
        FbyF: true
    });
    alert(truck.fourByFour);
};
//# sourceMappingURL=auto.js.map
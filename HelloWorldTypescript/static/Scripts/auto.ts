interface IEngine {
    start(callback: (startStatus: boolean, engineType: string) => void);
    stop(callback: (stopStatus: boolean, engineType: string) => void);
}

interface IAutoOptions {
    basePrice: number;
    engine: IEngine;
    state: string;
    make: string;
    model: string;
    year: number;
}
interface ITruckOptions extends IAutoOptions{
    bedLength: string;
    FbyF: boolean;
}

class AnEngine implements IEngine {
    constructor(public hoursePower: number, public engineType: string) { }
    start(callback: (startStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, this.engineType);
        }, 1000);
    }
    stop(callback: (stopStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, this.engineType);
        }, 1000);
    }
}

class CustomEngine implements IEngine {
    start(callback: (startStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, "Custom Engine");
        }, 1000);
    }
    stop(callback: (stopStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, "Custom Engine");
        }, 1000);
    }
}

class Accessory {
    constructor(public accessoryNumber: number, public title: string) { }
}

class Auto {
    private _basePrice: number;
    private _engine: IEngine;
    make: string;
    model: string;
    accessoryList: string;
    state: string;
    year: number;

    constructor(options: IAutoOptions) {
        this.engine = options.engine;
        this.basePrice = options.basePrice;
        this.state = options.state;
        this.make = options.make;
        this.model = options.model;
        this.year = options.year;
    }

    calculateTotal(): number {
        return this.basePrice + (this.basePrice * 0.08);
    }

    addAccessory(...accessories: Accessory[]) {
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

    set basePrice(price: number) {
        if (price <= 0)
            throw 'price must be > 0';
        this._basePrice = price;
    }

    get engine(): IEngine{
        return this._engine;
    }

    set engine(engine: IEngine) {
        this._engine = engine;
    }
}

class Truck extends Auto  {
    bedLength: string;
    fourByFour: boolean;

    constructor(options: ITruckOptions) {
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
}
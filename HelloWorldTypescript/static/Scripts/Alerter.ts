import ds = require("./DataService");

var dataService = new ds.DataService();

export interface IAlerter {
    name: string;
    showMsg(): void;
}

export class Alerter implements IAlerter {
    name = "Johnny";
    showMsg() {
        var message = dataService.getMessage();
        toastr.info(message + ", " + this.name);
    }
}
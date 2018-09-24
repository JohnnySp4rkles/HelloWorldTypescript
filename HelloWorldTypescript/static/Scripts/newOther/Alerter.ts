/// <reference path="../../../wwwroot/js/typings/jquery.d.ts" />
/// <reference path="../../../wwwroot/js/typings/toastr.d.ts" />

import ds = require("./DataService");

declare var toastr: Toastr;
declare var $: JQueryStatic;

var dataService = new ds.DataService();

export interface IAlerter {
    name: string;
    showMsg(): void;
}

export class Alerter implements IAlerter {
    name = "Johnny";
    showMsg() {
        var message = dataService.getMessage();
        $("#messageBox").text(message + ", " + this.name);
        toastr.info(message + ", " + this.name);
    }
}
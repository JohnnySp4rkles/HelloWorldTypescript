/// <reference path="../../../wwwroot/js/typings/jquery.d.ts" />
/// <reference path="../../../wwwroot/js/typings/toastr.d.ts" />
define(["require", "exports", "./DataService"], function (require, exports, ds) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var dataService = new ds.DataService();
    class Alerter {
        constructor() {
            this.name = "Johnny";
        }
        showMsg() {
            var message = dataService.getMessage();
            $("#messageBox").text(message + ", " + this.name);
            toastr.info(message + ", " + this.name);
        }
    }
    exports.Alerter = Alerter;
});
//# sourceMappingURL=Alerter.js.map
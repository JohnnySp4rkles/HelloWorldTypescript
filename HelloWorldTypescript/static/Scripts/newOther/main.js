/// <reference path="../../../wwwroot/js/typings/require.d.ts" />
/// <reference path="../../../wwwroot/js/typings/toastr.d.ts" />
require.config({
    baseUrl: "static/Scripts/newOther",
    shim: {
        jquery: {
            exports: '$'
        }
    },
    paths: {
        "jquery": "../../../lib/jquery/dist/jquery",
        "toastr": "../../../js/toastr"
    }
});
require(['bootstrapper', "jquery", "toastr"], (bootstrapper, $, toastr) => {
    bootstrapper.run();
});
//# sourceMappingURL=main.js.map
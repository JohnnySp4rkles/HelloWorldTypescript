/// <reference path="typings/index.d.ts" />
var demo_02_04;
(function (demo_02_04) {
    var name = ko.observable('Johnny Diamond');
    var id = ko.observable(1);
    var guy = {
        id: id,
        fullname: name
    };
    var value = guy.fullname();
    console.log(value);
})(demo_02_04 || (demo_02_04 = {}));
//# sourceMappingURL=ambient-declarations.js.map
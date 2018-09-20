/// <reference path="typings/index.d.ts" />

module demo_02_04{
    declare var ko: KnockoutStatic;

    var name = ko.observable('Johnny Diamond');
    var id = ko.observable(1);

    var guy = {
        id: id,
        fullname: name
    };

    var value: string = guy.fullname();
    console.log(value);
}
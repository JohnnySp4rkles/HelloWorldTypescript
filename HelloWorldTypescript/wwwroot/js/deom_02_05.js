var demo_02_05;
(function (demo_02_05) {
    //any
    var data;
    var info;
    var doSometing = function (arg) {
        return arg;
    };
    //var x = doSometing(5);
    // primitives
    var age = 29;
    var score = 99.99;
    var rating = 99.98;
    var hasData = true;
    var isReady = true;
    var isBald = function () { return 'yes'; };
    var hasHair = isBald();
    var first_name = 'Johnny';
    var last_name = 'Diamond';
    // string array
    function getArrayLength(x) {
        var len = x.length;
        return len;
    }
    var names = ['Johnny', 'Padraig', 'Marlon', 'Daire', 'Daniel'];
    var personA = names[0];
    //console.log(getArrayLength(names));
    var guitatSales = null;
    var animal = null;
    var orderDate = null;
    var quantity;
    var company = undefined;
    //console.log('Undefined Example:');
    //console.log(quantity);
    //console.log(company);
})(demo_02_05 || (demo_02_05 = {}));
//# sourceMappingURL=deom_02_05.js.map
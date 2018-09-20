module demo_02_05 {
    //any
    var data: any;
    var info;
    var doSometing = function (arg) {
        return arg;
    }

    //var x = doSometing(5);

    // primitives
    var age: number = 29;
    var score: number = 99.99;
    var rating: number = 99.98;

    var hasData: boolean = true;
    var isReady = true;
    var isBald = function () { return 'yes' };
    var hasHair = isBald();

    var first_name: string = 'Johnny';
    var last_name = 'Diamond';

    // string array
    function getArrayLength(x: string[]) {
        var len: number = x.length;
        return len;
    }
    var names: string[] = ['Johnny', 'Padraig', 'Marlon', 'Daire', 'Daniel'];

    var personA: string = names[0];
    //console.log(getArrayLength(names));

    var guitatSales: any = null;
    var animal = null;
    var orderDate: Date = null;

    var quantity: number;
    var company = undefined;
    //console.log('Undefined Example:');
    //console.log(quantity);
    //console.log(company);
}
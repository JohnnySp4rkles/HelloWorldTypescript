module interfaces_02_07 {
    //interface to define what the object it self has for properties.
    interface Person {
        name: string,
        age?: number,
        kids: number,
        calcKids: () => number,
        makeYounger: (years: number) => void,
        greet: (msg: string) => string
    }

    var p: Person = {
        name: "Johnny",
        age: 29,
        kids: 2,
        calcKids: function () {
            return this.kids * 2;
        },
        makeYounger: function (years) {
            this.age -= years;
        },
        greet: function (msg: string) {
            return msg + ", " + this.name;
        }
    }

    //console.log(p.calcKids());
    //console.log("Current age: "+p.age);
    //p.makeYounger(8)
    //console.log("I made you young again: "+p.age)
    //console.log(p.greet("Hey there"));


    // This shows how we can use an interface as return type of object
    interface SessionEval {
        addRating: (rating: number) => void;
        calcRating: () => number;
    }

    function sessionEvaluator(): SessionEval {
        var ratings: number[] = [];
        var addRating = (rating: number = 5) =>
            ratings.push(rating);
        //;
        var calcRating = () => {
            var sum: number = 0;
            ratings.forEach(function (score) {
                sum += score;
            });

            return sum / ratings.length;
        };

        return {
            addRating: addRating,
            calcRating: calcRating
        }
    }

    var s = sessionEvaluator();
    s.addRating(4);
    s.addRating(5);
    s.addRating(5);
    s.addRating(5);
    console.log(s.calcRating());
}
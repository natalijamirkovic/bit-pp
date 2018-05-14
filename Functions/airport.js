(function () {

    function Person(name, surname) {

        this.name = name;
        this.surname = surname;

    }


    Person.prototype.getData = function () {

        var fullName = "";
        return this.name + " " + this.surname;


    }


    function Seat(num, category) {

        var category = category || "e";
        this.number = num || Math.floor(Math.random() * (100 - 10) + 10);

        this.num = num;
        this.category = category.toUpperCase();

    }

    Seat.prototype.getData = function () {

        return this.number + ", " + this.category;

    }

    function Passenger() {

        this.person = function (person) {
            if (!person && !(person instanceof Person)) {
                return "Error input";
            } else {
                return this.person = person;
            }
        }

        this.seat = function (seat) {
            if (!seat && !(seat instanceof Seat)) {
                return "Error input";
            } else {
                return this.seat = seat;
            }

        }
    }

    Passenger.prototype.getData = function (){

        var seatPerson = "";

        this.seatPerson = person.getData() + ", " + seat.getData();

        return this.seatPerson;

    }

    function Flight(relation, date, listOfPassengers) {

        this.relation = relation;
        this.date = new Date(date);
        this.listOfPassengers = [];
    }

    function Airport() {
        this.name = "Nikola Tesla";
        this.listOfFlights = [];
    }



    var natalija = new Person("Natalija", "Mirkovic");
    //console.log(natalija.getData());

    var sediste = new Seat("32", "b");
    console.log(sediste.getData());

    var putnik = new Passenger ();

    console.log(putnik.getData());
})();




(function () {

    function Person(name, surname) {

        this.name = name;
        this.surname = surname;

    }


    Person.prototype.getData = function () {

        var fullName = "";
        return this.name + " " + this.surname;


    }


    function Seat(number, category) {

        var category = category || "e";
        if (this.category !== "b" && this.category !== "e") {
            return "Invalid category input";
        this.number = number || Math.floor(Math.random() * (100 - 10) + 10);

        this.number = number;
        this.category = category.toUpperCase();

    }

    Seat.prototype.getData = function () {
        if (this.category === "e") {
          return this.number + ", " + "economy";
        } else if (this.category === "b") {
          return this.number + ", " + "business";
        }
      }
    

    function Passenger() {

        this.person = function (person) {
            if (!person || !!(person instanceof Person)) {
                return "Error input";
            } else {
                return this.person = person;
            }
        }

        this.seat = function (seat) {
            if (!seat || !(seat instanceof Seat)) {
                return "Error input";
            } else {
                return this.seat = seat;
            }

        }
    }

    Passenger.prototype.getData = function () {
        return this.seat.getData() + ", " + this.person.getData();
      }
  
  

    function Flight(relation, date) {

        this.relation = relation;
        this.date = new Date(date);
        this.listOfPassengers = [];

    }
    Flight.prototype.addPassenger = function() {}




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




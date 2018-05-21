(function () {
    var listOfMovies = [];

    function Movie(title, length, genre) {
        this.title = title;
        this.length = length;
        this.genre = genre;
    }

    Movie.prototype.getData = function () {
        return this.title + ", " + this.genre;
    }

    function createMovie(title, length, genre) {
        var createMovie = new Movie(title, length, genre);
    }

    function addMovieToList(movie) {
        listOfMovies.push(movie);
    }

    return {
        createMovie: createMovie,
        addMovieToList: addMovieToList
    }

    function Program(date) {
        this.date = new Date(date);
        this.listOfMovies = [];
    }
    
    Program.prototype.lengthOfAllMovies = function () {
        var sumOfMinutes = 0;
        this.listOfMovies.forEach(function (item) {
          sumOfMinutes += item.length;
        });
        return sumOfMinutes;
    }
    
    Program.prototype.addMovie = function (movie) {
        if (!movie || !(movie instanceof Movie)) {
          console.log("Invalid input!!!");
          return;
        }
        this.listOfMovies.push(movie);
    }
    
    Program.prototype.getTotalMovies = function () {
        return this.listOfMovies.length;
    };
    
    Program.prototype.getData = function () {
        var day = this.date.getDate();
        var month = this.date.getMonth() + 1;
        var year = this.date.getFullYear();
        var date = day + "." + month + "." + year;
        var resultStr = date;
        if (this.getTotalMovies() === 0) {
            resultStr += ", Program to be announced.";
            return resultStr;
        }
        resultStr += ", " + this.getTotalMovies() + " movies, duration: " + this.lengthOfAllMovies() + "min";
        return resultStr;
      }

})();










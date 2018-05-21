var uiModule = (function () {

    function collectData() {
        var movieTitleInput = document.querySelector(".movie-title");
        var movieLengthInput = document.querySelector(".movie-length");
        var movieGenreSelect = document.querySelector(".movie-genre");

        var titleValue = movieTitleInput.value;
        var lengthValue = movieLengthInput.value;
        var genreValue = movieGenreSelect.value;
    

    return {
        title: titleValue,
        length: lengthValue,
        genre: genreValue

    }

}

function updateMovieList(movie) {
    var movieListElement = document.querySelector('.movie-list');
    movieListElement.innerHTML += movie.getData() + "<br>";

}

return {
    collectData: collectData,
    updateMovieList: updateMovieList
}


function collectProgram() {
    inputDateElement = document.querySelector("#date"),
    programErrorElement = document.querySelector("#program-error"),
    ulProgramListElement = document.querySelector("#program-list"),
    programSelectElement = document.querySelector("#program-select"),
}

}) ();
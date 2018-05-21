var mainModule = function (data, ui) {
  var createMovieButton = document.querySelector(".create=movie");
  createMovieButton.addEventListener("click", function(){
      //collect data 
      var formData = ui.collectData()
      //create movie, add to list
      var createdMovie = data.createMovie(formData.title, formData.legth, formData.genre);
      data.addMovieToList(createdMovie);
      //update list (ui)
      ui.upadateMovieList(createdMovie);

  })  
} (dataModule, uiModule);
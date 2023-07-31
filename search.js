var musicButton = document.getElementById('music-btn');
var movieButton = document.getElementById('movie-btn');
var imageButton = document.getElementById('image-btn');
var newsButton = document.getElementById('news-btn');


// Event listener for Enter key press
function handleKeyDown(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      term = document.getElementById('searchInput').value;

      if (musicButton.style.backgroundColor === 'grey') {
        updateMusicTerm(term);
      }
      else if (movieButton.style.backgroundColor === 'grey') {
        updateMovieTerm(term);
      }
      else if(imageButton.style.backgroundColor === 'grey'){
        updateImageTerm(term);
      }
      else{
        updateNewsTerm(term);
      }
    }
}


  
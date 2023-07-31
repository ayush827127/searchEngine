searchbar = document.getElementById('search-bar');

musicButton = document.getElementById('music-btn');
movieButton = document.getElementById('movie-btn');
imageButton = document.getElementById('image-btn');
chatgptButton = document.getElementById('chatgpt-btn');
newsButton = document.getElementById('news-btn');

musicContainer = document.getElementById('songs');
movieContainer = document.getElementById('movies');
imageContainer = document.getElementById('images');
chatgptContainer = document.getElementById('chatgpt');
newsContainer = document.getElementById('news');

musicButton.style.backgroundColor = "grey";
updateMusicTerm("bollywood");


term = document.getElementById('searchInput').value;

musicButton.onclick = function () {
    if (musicContainer.style.display === "none") {

        if (term === "") {
            updateMusicTerm("movies");
        } else {
            updateMusicTerm(term);
        }
        searchbar.style.display= "flex";
        musicContainer.style.display = "flex";
        musicButton.style.backgroundColor = 'grey';
        movieContainer.style.display = "none";
        movieButton.style.backgroundColor = 'red';
        imageContainer.style.display = "none";
        imageButton.style.backgroundColor = 'red';
        chatgptContainer.style.display = "none";
        chatgptButton.style.backgroundColor = 'red';
        newsContainer.style.display = "none";
        newsButton.style.backgroundColor = 'red';
    }
};

movieButton.onclick = function () {

    if (movieContainer.style.display === "none") {

        if (term === "") {
            updateMovieTerm("movies");
        } else {
            updateMovieTerm(term);
        }
        searchbar.style.display= "flex";
        movieContainer.style.display = "flex";
        movieButton.style.backgroundColor = 'grey';
        musicContainer.style.display = "none";
        musicButton.style.backgroundColor = 'red';
        imageContainer.style.display = "none";
        imageButton.style.backgroundColor = 'red';
        chatgptContainer.style.display = "none";
        chatgptButton.style.backgroundColor = 'red';
        newsContainer.style.display = "none";
        newsButton.style.backgroundColor = 'red';
    }
}

imageButton.onclick = function () {

    if (imageContainer.style.display === "none") {

        if (term === "") {
            updateImageTerm("animal");
        } else {
            updateImageTerm(term);
        }
        searchbar.style.display= "flex";
        imageContainer.style.display = "flex";
        imageButton.style.backgroundColor = 'grey';
        musicContainer.style.display = "none";
        musicButton.style.backgroundColor = 'red';
        movieContainer.style.display = "none";
        movieButton.style.backgroundColor = 'red';
        chatgptContainer.style.display = "none";
        chatgptButton.style.backgroundColor = 'red';
        newsContainer.style.display = "none";
        newsButton.style.backgroundColor = 'red';
    }

}

chatgptButton.onclick = function () {

    if (chatgptContainer.style.display === "none") {

        //remove search bar from top
       searchbar.style.display = "none"

        chatgptContainer.style.display = "block";
        chatgptButton.style.backgroundColor = 'grey';
        musicContainer.style.display = "none";
        musicButton.style.backgroundColor = 'red';
        movieContainer.style.display = "none";
        movieButton.style.backgroundColor = 'red';
        imageContainer.style.display = "none";
        imageButton.style.backgroundColor = 'red';
        newsContainer.style.display = "none";
        newsButton.style.backgroundColor = 'red';
    }
}

newsButton.onclick = function () {

    if (newsContainer.style.display === "none") {

        if (term === "") {
            updateNewsTerm("government");
        } else {
            updateNewsTerm(term);
        }
        searchbar.style.display= "flex";
        newsContainer.style.display = "flex";
        newsButton.style.backgroundColor = 'grey';
        musicContainer.style.display = "none";
        musicButton.style.backgroundColor = 'red';
        movieContainer.style.display = "none";
        movieButton.style.backgroundColor = 'red';
        chatgptContainer.style.display = "none";
        chatgptButton.style.backgroundColor = 'red';
        imageContainer.style.display = "none";
        imageButton.style.backgroundColor = 'red';
    }

}
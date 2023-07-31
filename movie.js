

const updateMovieTerm = (term) => {

    // check term exist
    if (!term || term === '') {
        alert('Please enter a seach term');
    } else {
        const url = `https://imdb8.p.rapidapi.com/auto-complete?q=${term}`;
        const movieContainer = document.getElementById('movies');
        while (movieContainer.firstChild) {
            movieContainer.removeChild(movieContainer.firstChild);
        }
        fetch(url, {
            "method": "GET",
            "headers": {
                'X-RapidAPI-Key': '345a556c63msh7d4e5b84e615a1ep1a08fejsn25c587a4a14e',
                'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
            }
        })
            .then((Response) => Response.json())
            .then((data) => {
                const list = data.d;
  
                return list.map(item => {
                    // Now create Html Element 
                    var divElement = document.createElement('div'),//
                        divElement2 = document.createElement('div'), //
                        divElement3 = document.createElement('div'),//
                        movie = document.createElement('h5'),//
                        movieTitle = document.createElement('p'),
                        img = document.createElement('img');
  
                    divElement.className = 'col-md-4';
                    divElement2.className = 'song-card';
                    divElement3.className = 'card-body';
                    divElement3.className = 'flex';
                    movie.className = 'card-title-movie';
  
                    // Now put content 
                    movie.innerHTML = item.l;
                    img.src = item.i.imageUrl;
                    movieTitle.innerHTML= item.s;
                    
  
                    divElement.appendChild(divElement2);
                    divElement2.appendChild(img);
                    divElement2.appendChild(divElement3);
                    divElement3.appendChild(movie);
                    movie.appendChild(movieTitle);
  
                    movieContainer.appendChild(divElement);
                })
            })
            .catch(err => {
                console.error(err);
            })
    }
  }
  
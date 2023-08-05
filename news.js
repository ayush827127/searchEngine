function updateNewsTerm(term) {

    var newsContainer = document.getElementById('news');

    const url = `https://newsapi.org/v2/everything?q=${term}&apiKey=33c32c6456184e719bdbed4f5e44dd57`
    while (newsContainer.firstChild) {
        newsContainer.removeChild(newsContainer.firstChild);
    }

    fetch(url)
        .then((Response) => Response.json())
        .then((data) => {
            const results = data.articles;
            return results.map((result) => {


                // Now create Html Element 
                var divElement = document.createElement('div'),//
                    divElement2 = document.createElement('div'), //
                    divElement3 = document.createElement('div'),//
                    newsTitle = document.createElement('p'),
                    imageLink = document.createElement("a"),
                    img = document.createElement('img');

                imageLink.target = "__blank";

                divElement.className = 'col-md-4';
                divElement2.className = 'news-card';
                divElement3.className = 'card-body';
                divElement3.className = 'flex';
                newsTitle.className = 'card-title-news'

                // Now put content 
                img.src = result.urlToImage;
                imageLink.href = result.url;
                newsTitle.innerHTML = result.title;


                divElement.appendChild(divElement2);
                imageLink.appendChild(img);
                divElement2.appendChild(imageLink);
                divElement2.appendChild(divElement3);
                imageLink.appendChild(newsTitle);
                newsContainer.appendChild(divElement);


            })
        });

}

async function updateImageTerm(term) {

    const accesskey = "cJk-36ItPEEgOQ-GdI1YL4bLi-3H1QKFNnMry3jwP20";
    var imageConatiner = document.getElementById('images');
    let page = 1;

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${term}&client_id=${accesskey}`;
    while (imageConatiner.firstChild) {
        imageConatiner.removeChild(imageConatiner.firstChild);
    }
    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    results.map((result) => {


        // Now create Html Element 
        var divElement = document.createElement('div'),//
            divElement2 = document.createElement('div'), //
            divElement3 = document.createElement('div'),//
            imageLink = document.createElement("a"),
            img = document.createElement('img');

        imageLink.target = "__blank";

        divElement.className = 'col-md-4';
        divElement2.className = 'song-card';
        divElement3.className = 'card-body';
        divElement3.className = 'flex';

        // Now put content 
        img.src = result.urls.small;
        imageLink.href = result.links.html;


        divElement.appendChild(divElement2);
        imageLink.appendChild(img);
        divElement2.appendChild(imageLink);
        divElement2.appendChild(divElement3);
        imageConatiner.appendChild(divElement);

    })
}


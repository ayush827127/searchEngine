record = document.getElementById('voice-search');


record.addEventListener('click', function () {
  document.getElementById('searchInput').value = "";
  record.classList.add('voice-search-change');

  var speech = true;
  window.SpeechRecognition = window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  recognition.interimResults = true;

  recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('')

    document.getElementById('searchInput').value = transcript;
    console.log(transcript)
  });

  if (speech == true) {
    recognition.start();
  }
  recognition.addEventListener("end", () => {
    // Update status paragraph to show recognition has stopped
    record.classList.remove('voice-search-change');
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
    console.log("Stop");
  });
})

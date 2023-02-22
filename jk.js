const API_KEY = 'O6EPK68gCYoYZh0l0CDPX7R3TDUbOWVI';
const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=jennie+kim&limit=25&rating=r`;


fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    const gifs = data.data.map(gif => gif.images.fixed_height.url);
    const shuffledGifs = shuffle(gifs);
    console.log(shuffledGifs);
  })
  .catch(error => console.error(error));

function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  // While there remain elements to shuffle
  while (0 !== currentIndex) {

    // Pick a remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

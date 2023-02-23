const giphyApiKey = "O6EPK68gCYoYZh0l0CDPX7R3TDUbOWVI";
const gifSection = document.querySelector(".gif-section");
const shuffleButton = document.querySelector("#shuffle-button");

// Function to get 3 random GIFs and add them to a row
function getAndAddRandomGifsToRow(rowId) {
  const giphyUrl = `https://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=jennie+kim&rating=R&limit=3`;
  fetch(giphyUrl)
    .then(response => response.json())
    .then(data => {
      const row = document.querySelector(`#${rowId}`);
      row.innerHTML = "";
      data.data.forEach(gif => {
        const gifUrl = gif.images.fixed_width.url;
        const gifElement = `<img src="${gifUrl}" alt="Jennie Kim GIF" class="col-sm-4">`;
        row.insertAdjacentHTML("beforeend", gifElement);
      });
    });
}

// Initial loading of 3 random GIFs in each row
getAndAddRandomGifsToRow("gif-row-1");
getAndAddRandomGifsToRow("gif-row-2");
getAndAddRandomGifsToRow("gif-row-3");

// Shuffle button functionality to replace each row with 3 new random GIFs
shuffleButton.addEventListener("click", () => {
  getAndAddRandomGifsToRow("gif-row-1");
  getAndAddRandomGifsToRow("gif-row-2");
  getAndAddRandomGifsToRow("gif-row-3");
});

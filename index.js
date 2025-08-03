// OMDB API KEY: https://www.omdbapi.com/?i=tt3896198&apikey=253f9b44
// OMDB API: https://www.omdbapi.com/?apikey=253f9b44&s=avengers

async function renderMedia(filter) {
   const avengers = await fetch("https://www.omdbapi.com/?apikey=253f9b44&s=avengers");
   const avengersData = await avengers.json();
   const avengersListEl = document.querySelector('.avengers__list');
   if (filter === 'OLD_TO_NEW') {
       console.log(filter)
        const renderedMedia = avengers.sortByYear.sort((a, b) => (a.Year) - (b.Year));
        console.log(renderedMedia)
    }
    
    avengersListEl.innerHTML = avengersData.Search.map((avengers) => avengersHTML(avengers)).join("");
}
    
    function avengersHTML(avengers) {
        return `<div class="avengers__card">
        <div class="avengers__card--container">
        <h2>${avengers.Title}</h2>
        <p><b>Type:</b> ${avengers.Type}</p>
        <p><b>Year:</b> ${avengers.Year}</p>
        <p><b>Poster</b> <img scr="${avengers.Poster}" target="_blank">${avengers.Poster}></p>
        </div>
        </div>`
    }
    
    function filterMedia(event) {
        renderMedia(event.target.value);
    }
    
renderMedia();
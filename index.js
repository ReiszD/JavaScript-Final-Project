// OMDB API KEY: https://www.omdbapi.com/?i=tt3896198&apikey=253f9b44
// OMDB API: https://www.omdbapi.com/?apikey=253f9b44&s=avengers

function openMenu() {
    document.body.classList += " menu--open"
}

function closeMenu() {
    document.body.classList.remove('menu--open')
}

async function renderMedia(filter) {
    const avengers = await fetch("https://www.omdbapi.com/?apikey=253f9b44&s=avengers");
    const avengersData = await avengers.json();
    const avengersListEl = document.querySelector('.avengers__list');
    
    document.body.classList += ' media__loading--spinner'
    avengersListEl.innerHTML = avengersData.Search.map((avengers) => avengersHTML(avengers)).join("");
    document.body.classList.remove('media__loading--spinner')
    
    
    if (filter === 'OLD_TO_NEW') {
        console.log(filter)
        avengers.sort((a, b) => a.Year - b.Year)
    }
    else if (filter === 'NEW_TO_OLD') {
        console.log(filter)
        avengers.sort((a, b) => b.Year - a.Year)
    }
    else if (filter === 'TYPE') {
        console.log(filter)
        avengers.sort((a, b) => a.Type - b.Type)
    }
    else if (filter === 'TITLE') {
        console.log(filter)
        avengers.sort((a, b) => a.Title - b.Title)
    }
}

function filterMedia(event) {
    renderMedia(event.target.value);
}


function avengersHTML(avengers) {
    return `<div class="avengers__card">
    <div class="avengers__card--container">
    <h2>${avengers.Title}</h2>
    <p><b>Type:</b> ${avengers.Type}</p>
    <p><b>Year:</b> ${avengers.Year}</p>
    <img src="${avengers.Poster}">
    </div>
    </div>`
          }
    
renderMedia();
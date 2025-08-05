// OMDB API KEY: https://www.omdbapi.com/?i=tt3896198&apikey=253f9b44
// OMDB API: https://www.omdbapi.com/?apikey=253f9b44&s=avengers

function openMenu() {
    document.body.classList += " menu--open"
}

function closeMenu() {
    document.body.classList.remove('menu--open')
}

async function onSearchChange(event){
    const Title = event.target.value;
    const media = await fetch(`https://www.omdbapi.com/?apikey=253f9b44&s=${Title}`);
    const mediaData = await media.json();
    const mediaListEl = document.querySelector('.avengers__list');

    mediaListEl.innerHTML = mediaData.Search.map((media) => mediaHTML(media)).join("");
    `<div class="avengers__card">
    <div class="avengers__card--container">
    <h2>${media.Title}</h2>
    <p><b>Type:</b> ${media.Type}</p>
    <p><b>Year:</b> ${media.Year}</p>
    <img src="${media.Poster}">
    </div>
    </div>`
}

async function renderMedia(filter) {
    const Title = localStorage.getItem("Title")
    const media = await fetch(`https://www.omdbapi.com/?apikey=253f9b44&s=${Title}`);
    const mediaData = await media.json();
    const mediaListEl = document.querySelector('.avengers__list');
    
    mediaListEl.classList += ' media__loading'
    mediaListEl.classList.remove('media__loading')
    
    if (filter === 'OLD_TO_NEW') {
        console.log(filter)
        mediaData.Search.sort((a, b) => a.Year - b.Year)
    }
    else if (filter === 'NEW_TO_OLD') {
        console.log(filter)
        mediaData.Search.sort((a, b) => b.Year - a.Year)
    }
    else if (filter === 'MOVIES_TO_SERIES') {
        console.log(filter)
        mediaData.Search.sort((a, b) => a.Type.localeCompare(b.Type))
    }
    else if (filter === 'SERIES_TO_MOVIES') {
        console.log(filter)
        mediaData.Search.sort((a, b) => b.Type.localeCompare(a.Type))
    }
    else if (filter === 'TITLE') {
        console.log(filter)
        mediaData.Search.sort((a, b) => a.Title.localeCompare(b.Title))
    }
    
    mediaListEl.innerHTML = mediaData.Search.map((media) => mediaHTML(media)).join("");
}


function filterMedia(event) {
    renderMedia(event.target.value);
}

function mediaHTML(media) {
    return `<div class="avengers__card">
    <div class="avengers__card--container">
    <h2>${media.Title}</h2>
    <p><b>Type:</b> ${media.Type}</p>
    <p><b>Year:</b> ${media.Year}</p>
    <img src="${media.Poster}">
    </div>
    </div>`
}
    
renderMedia();
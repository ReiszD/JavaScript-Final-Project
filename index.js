// OMDB API KEY: https://www.omdbapi.com/?i=tt3896198&apikey=253f9b44
// OMDB API: https://www.omdbapi.com/?apikey=253f9b44&s=avengers

function openMenu() {
    document.body.classList += " menu--open"
}

function closeMenu() {
    document.body.classList.remove('menu--open')
}

let allMedia = [];

async function onSearchChange(event){
    const Title = event.target.value;
    const media = await fetch(`https://www.omdbapi.com/?apikey=253f9b44&s=${Title}`);
    const mediaData = await media.json();

    if (!mediaData.Search) {
        document.querySelector('.avengers__list').inerHTML = "<h2>No Results Found</h2>";
        return;
    }

    allMedia = mediaData.Search;
    renderMedia();
}
    
function filterMedia(event) {
    const filterValue = (event.target.value);
    renderMedia(filterValue);
}

function renderMedia(filter = "") {
    let filtered = [...allMedia];

    switch (filter) {
        case "OLD_TO_NEW":
            filtered.sort((a, b) => (a.Year) - (b.Year));
            break;
        case "NEW_TO_OLD":
            filtered.sort((a, b) => (b.Year) - (a.Year));
            break;
        case "MOVIES_TO_SERIES":
            filtered.sort((a, b) => a.Type.localeCompare(b.Type));
            break;
        case "SERIES_TO_MOVIES":
            filtered.sort((a, b) => a.Type.localeCompare(b.Type));
            break;
        case "TITLE":
            filtered.sort((a, b) => a.Title.localeCompare(b.Title));
            break;
    }

    const mediaListEl = document.querySelector(".avengers__list");

    mediaListEl.innerHTML = filtered.map((media) => mediaHTML(media)).join("")

    mediaListEl.classList += ' media__loading'
    mediaListEl.classList.remove('media__loading')
}

function mediaHTML(media) {
    const poster = media.Poster === "N/A" ? "https://via.placeholder.com/200x300?text=No+Image" : media.Poster;
    return `<div class="avengers__card">
                <div class="avengers__card--container">
                    <h2>${media.Title}</h2>
                    <p><b>Type:</b> ${media.Type}</p>
                    <p><b>Year:</b> ${media.Year}</p>
                    <img src="${poster}" alt="${media.Title}">
                </div>
            </div>`;
}
//     `<div class="avengers__card">
//     <div class="avengers__card--container">
//     <h2>${media.Title}</h2>
//     <p><b>Type:</b> ${media.Type}</p>
//     <p><b>Year:</b> ${media.Year}</p>
//     <img src="${media.Poster}">
//     </div>
//     </div>`

// async function renderMedia(filter = "") {
//     let filtered = [allMedia];

//     switch (filter) {
//         case "OLD_TO_NEW":
//             filtered.sort((a, b) => parseInt(a.Year) - parseInt(b.Year))
//             break;
//     }

    // const Title = localStorage.getItem("Title")
    // const media = await fetch(`https://www.omdbapi.com/?apikey=253f9b44&s=${Title}`);
    // const mediaData = await media.json();
    // const mediaListEl = document.querySelector('.avengers__list');
    
    // mediaListEl.classList += ' media__loading'
    // mediaListEl.classList.remove('media__loading')
    
    // if (filter === 'OLD_TO_NEW') {
    //     console.log(filter)
    //     filtered.sort((a, b) => a.Year - b.Year)
    // }
    // else if (filter === 'NEW_TO_OLD') {
    //     console.log(filter)
    //     mediaData.Search.sort((a, b) => b.Year - a.Year)
    // }
    // else if (filter === 'MOVIES_TO_SERIES') {
    //     console.log(filter)
    //     mediaData.Search.sort((a, b) => a.Type.localeCompare(b.Type))
    // }
    // else if (filter === 'SERIES_TO_MOVIES') {
    //     console.log(filter)
    //     mediaData.Search.sort((a, b) => b.Type.localeCompare(a.Type))
    // }
    // else if (filter === 'TITLE') {
    //     console.log(filter)
    //     mediaData.Search.sort((a, b) => a.Title.localeCompare(b.Title))
    // }

//     const mediaListEl = document.querySelector(".avengers__list")
    
//     mediaListEl.innerHTML = filtered.map((media) => mediaHTML(media)).join("");
// }

// function mediaHTML(media) {
//     return `<div class="avengers__card">
//     <div class="avengers__card--container">
//     <h2>${media.Title}</h2>
//     <p><b>Type:</b> ${media.Type}</p>
//     <p><b>Year:</b> ${media.Year}</p>
//     <img src="${media.Poster}">
//     </div>
//     </div>`
// }
    
// renderMedia();
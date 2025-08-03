// OMDB API KEY: https://www.omdbapi.com/?i=tt3896198&apikey=253f9b44
// OMDB API: https://www.omdbapi.com/?apikey=253f9b44&s=avengers

async function main() {
   const avengers = await fetch("https://www.omdbapi.com/?apikey=253f9b44&s=avengers");
   const avengersData = await avengers.json();
   console.log(
    avengersData.map((avengers) =>
    `<div class="avengers__card">
        <div class="avengers__card--container">
            <h2>${Title}</h2>
            <p><b>Type:</b> ${Type}</p>
            <p><b>Year:</b> ${Year}</p>
            <p><b>Poster</b> <a href="https://website.website"></a></p>
        </div>
    </div>`)
   );
}

main();
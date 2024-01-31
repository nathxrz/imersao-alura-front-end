const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById('result-artist')
const resultPlaylist = document.getElementById('result-playlists')

document.addEventListener('input', ()=> {
    const searchValue = searchInput.value.toLowerCase();

    if(searchValue === ""){
        resultArtist.classList.add("hidden");
        resultPlaylist.classList.remove("hidden");
        return;
    }

    requestApi(searchValue);
    
})

function requestApi(searchValue){

    fetch(`http://localhost:3000/artists?name_like=${searchValue}`)

    .then((response) => response.json())
    .then((results) => displayResults(results));
}

function displayResults(result){
    resultPlaylist.classList.add("hidden");
    
    const artistImage = document.getElementById("artist-img");
    const artistName = document.getElementById("artist-name");

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultArtist.classList.remove("hidden");
}
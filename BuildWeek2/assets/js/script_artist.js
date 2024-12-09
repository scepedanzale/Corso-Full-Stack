let artistID= sessionStorage.getItem('idArtist')

console.log(artistID) 
let urlArtist=`https://striveschool-api.herokuapp.com/api/deezer/artist/${artistID}`  /* 'https://striveschool-api.herokuapp.com/api/deezer/artist/412' */

 /* closeFaBtn.addEventListener('click', () => sidebar.classList.add('d-none')) */
async function getArtist() {
    let artistData= await fetch(urlArtist).then(response => response.json()) //chiamata GET, response trasformata in JSON e inserita nell'array
    console.log(artistData)
    loadMetaData(artistData) // load dati nel banner
    let artistTopTracks=artistData.tracklist.replace('limit=50','limit=10') // riduzione popular traks a 10 brani
    console.log(artistTopTracks)
    let topTracks= await fetch(artistTopTracks).then(response => response.json())
    console.log(topTracks.data)
    topTracksList(topTracks.data)
    

    /* createList(topTrack.data)  */

}
/* sessionStorage.clear() */
getArtist()

function topTracksList(topTracks) {
    let topTracksList = document.querySelector(".topTracksList");
    topTracks.forEach((t) => {
      let topTrack = document.createElement("div");
      topTrack.classList.add('row', 'align-items-center', 'justify-space-between', 'my-3', 'p-3')
      topTrack.innerHTML=`<div class="col-1 col-lg-1 text-center ">${(topTracks.indexOf(t)+1)}</div> 
                            <div class="col-3 col-lg-3 "><img src="${t.album.cover_small}" alt="Album Cover" class="album-cover"></div>
                            <div class="col-4 col-lg-4 fs-6">${t.title}</div>
                            <div class="col-1 col-lg-3 ">${t.rank.toLocaleString('us-US')}</div>
                            <div class="col-lg-1 d-none d-xl-block">${Math.floor(t.duration/60)}:${(t.duration%60).toString().padStart(2, '0')}</div>`
      topTracksList.appendChild(topTrack);
    });

    
}

function loadMetaData (artist) {
    let bannerImg= document.querySelector('.artist-banner')
    bannerImg.style.backgroundImage=`url(${artist.picture_big})`//immagine del Banner
    let artistIcon=document.querySelector('.artistIcon')
    artistIcon.setAttribute('src', `${artist.picture}`) //icona artista "brani che ti piacciono"
    let artistName = document.querySelectorAll('.artistName')
    artistName[0].innerText=artist.name //nome dell'artista
    artistName[1].innerText=`di ${artist.name}`
    let artistListener= document.querySelector('.artistListener')
    artistListener.innerText=`${artist.nb_fan.toLocaleString('us-US')} ascoltatori mensili` //numero ascoltatori
    
}
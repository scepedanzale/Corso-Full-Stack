let albumID= sessionStorage.getItem('idAlbum')
console.log(albumID)
/* sessionStorage.clear() */
let urlAlbum= `https://striveschool-api.herokuapp.com/api/deezer/album/${albumID}`
/* let urlAlbum= `https://striveschool-api.herokuapp.com/api/deezer/album/75621062` */
async function getAlbum() {
 let albumData= await fetch(urlAlbum).then(response => response.json()) //chiamata GET, response trasformata in JSON e inserita nell'array0
    console.log(albumData)
    loadMetaData(albumData) //funzione che carica le info dell'album nel banner
    console.log(albumData.tracks.data)
    createTrackList(albumData.tracks.data)
}    

getAlbum()

function createTrackList(tracks) {
    let div = document.querySelector(".albumTrackList");
    console.log(div)
    tracks.forEach((t) => {
      let riga = document.createElement("div");
      riga.classList.add('row', 'pt-1', 'pb-1', 'object-fit-lg-contain', 'd-flex')
      riga.innerHTML=`<div class=" opacity-75 d-flex">
                        <div id="indice" class=" col-sm-none col-md-1 fs-4 ">${(tracks.indexOf(t)+1)}</div>
                      </div>
                      <div class="col-sm-11 col-md-6">
                          <div>
                              <p class="m-0 p-0 opacity-100 fw-semibold">${t.title}</p>
                              <p class="opacity-75 m-0 p-0 opacity-75">${t.artist.name}</p>
                          </div>
                      </div>
                      <div class="col-sm-none col-md-2 opacity-75 d-flex flex-row-reverse"><div id="riproduzione">${t.rank.toLocaleString('us-US')}</div></div>
                      <div class=" col-sm-none col-md-2 opacity-75" id="spazio"></div>
                      <div class=" col-sm-1 col-md-1 opacity-75 d-flex flex-row-reverse"><div id="durata">${Math.floor(t.duration/60)}:${(t.duration%60).toString().padStart(2, '0')}</div></div>
                      </div>`
/*       p.innerText = (tracks.indexOf(u)+1) + "-" + u.title + " (" + Math.floor(u.duration/60) + ":" +  +")";
 */      div.appendChild(riga);
    });
    
  }

function loadMetaData (album) { //funzione che carica le info dell'album nel banner
    let albumCover= document.querySelector('.albumCover') // copertina album
    albumCover.setAttribute('src', `${album.cover}` )
    let albumTitle= document.querySelector('.albumTitle') // titolo album
    albumTitle.innerText=album.title 
    let albumArtistIcon=document.querySelector('.albumArtistIcon') //icona artista
    albumArtistIcon.setAttribute('src', `${album.artist.picture_small}`)

    let AlbumInfo= document.querySelector('.albumInfo') //info album
    AlbumInfo.innerHTML=`<strong>${album.artist.name}</strong>
    &middot; ${album.release_date.slice(0,4)}  &middot; ${album.tracks.data.length} brani, ${Math.floor(album.duration/60)} min ${album.duration%60} sec.`
    
}


 








  /* 
addEventListener('DOMContentLoaded', () => {
    let divCover= document.querySelector('.cover')
    console.log(divCover)

})
 */


// al caricamento della pagina, seleziona gli album correlati e permette il link
/* addEventListener('DOMContentLoaded', () => {
  let albums= document.querySelectorAll(".albumName")
console.log(albums)

albums.forEach(alb => {
  alb.addEventListener('click', (evt) => {
      
     sessionStorage.clear() 
      console.log(evt.target)
      console.log(evt.target.attributes[0].nodeValue)
      sessionStorage.setItem('idalbum', evt.target.attributes[0].nodeValue)
      })
})
})
 */


    
/* 
albums.forEach(alb => {
    alb.addEventListener('click', (evt) => {
        
        sessionStorage.clear()
        console.log(evt.target)
        console.log(evt.target.attributes[0].nodeValue)
        sessionStorage.setItem('idalbum', evt.target.attributes[0].nodeValue)
        })
}) */
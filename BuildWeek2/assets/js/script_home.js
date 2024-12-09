sessionStorage.clear()


addEventListener('DOMContentLoaded', () => {
let albums= document.querySelectorAll(".albumTitle")
console.log(albums)
let artists= document.querySelectorAll('.albumArtist')
console.log(artists)

albums.forEach(alb => {
    alb.addEventListener('click', (evt) => {
        
        sessionStorage.clear()
        console.log(evt.target)
        console.log(evt.target.attributes[0].nodeValue)
        sessionStorage.setItem('idAlbum', evt.target.attributes[0].nodeValue)
        console.log(sessionStorage)
        })
})

artists.forEach(art => {
  art.addEventListener('click', (evt) => {
      
      sessionStorage.clear()
      console.log(evt.target)
      console.log(evt.target.attributes[0].nodeValue)
      sessionStorage.setItem('idArtist', evt.target.attributes[0].nodeValue)
      console.log(sessionStorage)
      })
})

})






let albumIDs = [173465852, 6328172, 7898271, 37734411, 85609322, 63203772, 228423362, 47702742]
let albumData= []
 async function loadAlbums() {
  
  for(i=0; i<albumIDs.length; i++) {
    albumData[i]= await fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${albumIDs[i]}`).then(response => response.json()) //chiamata GET, response trasformata in JSON e inserita nell'array0
    
  }
  console.log(albumData)
  
  let albumList= document.querySelectorAll('.albumList')
  console.log(albumList)
  fillAlbum()
}





/* let albumList= document.querySelectorAll('.albumList')
    console.log(albumList)

addEventListener('DOMContentLoaded', loadAlbums())

function fillAlbum() {
  let albumList= document.querySelectorAll('.albumList')
  console.log(albumList)
  albumData.forEach(alb => {
    let albumCard= document.createElement('div')
    albumCard.classList.add('column', 'my-2')
    albumList[0].appendChild(albumCard)
    albumCard.innerHTML= `<div class="card bg-dark text-white" style="width: 10rem;" id="id album">
                            <img src="" class="card-img-top" alt="...">
                              <div class="card-body">
                                <h5 class="card-title"></h5>
                                <h6 class="card-subtitle mb-2 text-white-50"></h6>
                              </div>
                            </div>
                            
                            <div  class="card bg-dark text-white" style="width: 10rem;">
                            <a href="lisa.html">
                              <img src="${alb.cover} " class="card-img-top" alt="...">
                              <div class="card-body">
                                <h5 ID='${alb.id}' class="card-title albumTitle">${alb.title.slice(0,11)}...</h5>
                                <a href="artist_Frank.html">
                                  <h6 ID='${alb.artist.id}' class="card-subtitle mb-2 text-white-50 albumArtist">${alb.artist.name.slice(0,11)}...</h6>
                                </a>
                              </div>
                            </a>
                          </div>
                        </div> `

  });
} */
/* let closeFaBtn= document.querySelector('#FaCloseBtn')
console.log(closeFaBtn)
let sidebar= document.querySelector('aside')

 */


{/* <div class="column my-2">
                          <div  class="card bg-dark text-white" style="width: 10rem;">
                            <a href="lisa.html">
                              <img src="https://api.deezer.com/album/3666371/image" class="card-img-top" alt="...">
                              <div class="card-body">
                                <h5 ID='3666371' class="card-title albumTitle">LIVING THINGS</h5>
                                <a href="artist_Frank.html">
                                  <h6 ID='92' class="card-subtitle mb-2 text-white-50 albumArtist">Linkin Park</h6>
                                </a>
                              </div>
                            </a>
                          </div>
                        </div>  */}
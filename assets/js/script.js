
fetch("https://api.tvmaze.com/shows")
    .then(res=>res.json())
    .then(data => fillHTML(data))

function fillHTML(datas){
    const charList = document.getElementById('top-rated');
    var result = '';
   
for (let i = 0; i < datas.length; i++) {
  if (datas[i].rating.average>8.5) {
        
    
    result += 
    `
    <li>
    <div class="movie-card">

          <a href="./movie-details.html">
            <figure class="card-banner">
            <img src="${datas[i].image.medium}">
            </figure>
          </a>

          <div class="title-wrapper">
            <a href="./movie-details.html">
            <h3 class="card-title">${datas[i].name}</h3>
            </a>

            <time datetime="2022">${datas[i].premiered}</time>
          </div>

          <div class="card-meta">
            <div class="badge badge-outline"></div>

            <div class="duration">
            <ion-icon name="time-outline"></ion-icon>

              <time datetime="PT137M">${datas[i].runtime}</time>
            </div>

            <div class="rating">
              <ion-icon name="star"></ion-icon>

              <data>${datas[i].rating.average}</data>
              </div>
          </div>

        </div>
      </li>`
    } 
    
  }
    //console.log(result);
    charList.innerHTML = result;
        }
const header = document.querySelector("[data-header]");
window.addEventListener("scroll", function () {
  window.scrollY >= 10 ? header.classList.add("active") : header.classList.remove("active");
});





function myFunctionnn() {

  fetch("https://api.tvmaze.com/shows")
  .then(res=>res.json())
  .then(data => fillHTML(data))
} 
function fillHTML(datas){
  
    const charList = document.getElementById('top-rated');
    var result = '';
for (let i = 0; i < datas.length; i++) {
  if (datas[i].rating.average>8.5) { 
    result=ReturnResult(result,datas,i)
    } 
    
  }
    charList.innerHTML = result;
}

myFunctionnn();








function upcoming() {

  fetch("https://api.tvmaze.com/shows")
  .then(res=>res.json())
  .then(data => fillupcoming(data))
} 
upcoming();
function fillupcoming(datas){
  
  const charList = document.getElementById('upcome');
  const charList2 = document.getElementById('upcome');
    var result = '';
for (let i = 0; i < datas.length; i++) {
  if (datas[i].premiered>"2014-10-10") { 
    result=ReturnResult(result,datas,i)
    } 
    
  }
    charList.innerHTML = result;
}








        
        function fillScifi(datas){
          const charList = document.getElementById('cardslide');

          var result = '';
         
        for (let i = 0; i < datas.length; i++) {
          for (let a = 0; a < datas[i].genres.length; a++) {
            if (datas[i].genres[a]=="Science-Fiction") {
              result=ReturnResult(result,datas,i)
            break;
          }
         }
        }
          charList.innerHTML = result;  
              }




              const element = document.getElementById("sci-fi");
              element.addEventListener("click", myFunctionn);
              
              function myFunctionn() {
            
                fetch("https://api.tvmaze.com/shows")
                .then(res=>res.json())
                .then(data => fillScifi(data))
        
            
              } 




              
              const element1 = document.getElementById("drama");
              element1.addEventListener("click", drFunction);
              
              function drFunction() {
                
                fetch("https://api.tvmaze.com/shows")
                .then(res=>res.json())
                .then(data => filDrama(data))
                
              }
              

              function filDrama(datas){
                const charList = document.getElementById('cardslide');
  
                var result = '';
              for (let i = 0; i < datas.length; i++) {
                for (let a = 0; a < datas[i].genres.length; a++) {
                  if (datas[i].genres[a]=="Drama") {
                    result=ReturnResult(result,datas,i)
                  break;
                }
                }
              }
                charList.innerHTML = result;  
              }









              
              
              const element2 = document.getElementById("action");
              element2.addEventListener("click", actionfunc);
              
              function actionfunc() {
                
                fetch("https://api.tvmaze.com/shows")
                .then(res=>res.json())
                .then(data => fillact(data))
                
              }
              

              function fillact(datas){
                const charList = document.getElementById('cardslide');
  
                var result = '';
              for (let i = 0; i < datas.length; i++) {
                for (let a = 0; a < datas[i].genres.length; a++) {
                  if (datas[i].genres[a]=="Action") {
                    result=ReturnResult(result,datas,i)
                  break;
                }
                }
              }
                charList.innerHTML = result;  
              }







              const element3 = document.getElementById("adventure");
              element3.addEventListener("click", advfunc);
              
              function advfunc() {
                
                fetch("https://api.tvmaze.com/shows")
                .then(res=>res.json())
                .then(data => filladv(data))
                
              }
              

              function filladv(datas){
                const charList = document.getElementById('cardslide');
  
                var result = '';
              for (let i = 0; i < datas.length; i++) {
                for (let a = 0; a < datas[i].genres.length; a++) {
                  if (datas[i].genres[a]=="Adventure") {
                    result=ReturnResult(result,datas,i)
                  break;
                }
                }
              }
                charList.innerHTML = result;  
              }





                      







              
              function ReturnResult(result,datas,i)
              { 
                var detailid=i; 
                result += 
                `
                <li>
  <div class="movie-card">

  <a  href="./movie-details.html" onclick="detailfunc()">
  <figure class="card-banner">
         // <img src="${datas[i].image.medium}">
          </figure>
        </a>

        <div class="title-wrapper">
          <a  href="./movie-details.html" onclick="detailfunc()">
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
    </li>`;
  return result;
  }











  // function detailfunc() {

  //   fetch("https://api.tvmaze.com/shows")
  //   .then(res=>res.json())
  //   .then(data => fillHTML(data))
  // } 
  // function fillHTML(datas){
    
  //     const charList = document.getElementById('detailpage');
  //     var result = '';
  // for (let i = 0; i < datas.length; i++) {
  //   if (datas[i].id==1) 
  //   {
  //     genreler=''; 
  //     datas[i].genres.forEach(element => {
  //       genreler+="${element .}"
  //     });
  //     `
  //     <figure class="movie-detail-banner">
    
  //     <img src="${datas.image.medium}" alt="movie poster">
    
  //     <button class="play-btn">
  //       <ion-icon name="play-circle-outline"></ion-icon>
  //     </button>
    
  //   </figure>
    
  //   <div class="movie-detail-content">
    
  //     <p class="detail-subtitle">New Episodes</p>
    
  //     <h1 class="h1 detail-title">
  //       <strong>${datas.name}</strong>
  //     </h1>
    
  //     <div class="meta-wrapper">
    
  //       <div class="badge-wrapper">
  //         <div class="badge badge-fill">PG 13</div>
    
  //         <div class="badge badge-outline">HD</div>
  //       </div>
    
  //       <div class="ganre-wrapper">
  //         <a href="#">${genreler},</a>
    
        
  //       </div>
    
  //       <div class="date-time">
    
  //         <div>
  //           <ion-icon name="calendar-outline"></ion-icon>
    
  //           <time datetime="2021">${datas[i].premiered}</time>
  //         </div>
    
  //         <div>
  //           <ion-icon name="time-outline"></ion-icon>
    
  //           <time datetime="PT115M">${datas[i].runtime}</time>
  //         </div>
    
  //       </div>
    
  //     </div>
    
  //     <p class="storyline">
  //       ${datas[i].summary}
  //     </p>
    
  //     <div class="details-actions">
    
  //       <button class="share">
  //         <ion-icon name="share-social"></ion-icon>
    
  //         <span>Share</span>
  //       </button>
    
  //       <div class="title-wrapper">
  //         <p class="title">Prime Video</p>
    
  //         <p class="text">Streaming Channels</p>
  //       </div>
    
  //       <button class="btn btn-primary">
  //         <ion-icon name="play"></ion-icon>
    
  //         <span>Watch Now</span>
  //       </button>
    
  //     </div>
    
    
  //   </div>
  //   `
  //     } 
      
  //   }
  //     charList.innerHTML = result;
  // }
  
  
  
  
  





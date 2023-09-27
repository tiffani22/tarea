const url = "https://raw.githubusercontent.com/tiffani22/json/main/db.json";
const imgUrl = "https://xsgames.co/randomusers/assets/avatars/pixel/";
const container = document.getElementsByClassName("content")[0];

function cargarDatos() {
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((elem, i) => {
      container.innerHTML +=  `
      <div>  
        <div class="tweets">
            <div class="profile-pic"> 
              <img width="50px" src="${imgUrl + i}.jpg" />
            </div>
          <div class="content">
            <div class="names">
              <p class="full-name">${elem.name}</p>
              <p class="user-name">@${elem.name}</p>
              <p class="time">${elem.time}mins</p>
            </div>
          <div class="tweet-content">
            <p>${elem.twit}</p>
          </div>
          <div class="tweet-icons">
            <i class="fa fa-comment" aria-hidden="true"></i>
            <i class="fa fa-heart" aria-hidden="true"></i>
            <i class="fa fa-retweet" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
    `;
  });
})
    .catch((error) => {
      console.error("Error al cargar los datos:", error);
    });
}

cargarDatos();

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjhjY2Y1OTI5NTQ5OWYxYmJhODgzOTJlZWRjZWIyMCIsInN1YiI6IjY2MmEzMjc3ZGUxMWU1MDA5YjcwZTg4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OGPqGSssL5SW0ZxO3aZx2708eovOcaKRvbTOQQeFT8A",
  },
};

const cardList = document.querySelector(".card-list");

fetch(
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  options
)
  .then((response) => response.json())
  .then((response) => {
    const movieList = response["results"];

    movieList.forEach((a) => {
      const img = a["poster_path"]; // 포스터
      const title = a["title"];
      const overview = a["overview"]; // 요약 내용
      const voteAverage = a["vote_average"]; // 평점
      const id = a["id"]; // id

      const card = document.createElement("div");
      card.classList.add("card");

      const cardImage = document.createElement("img");

      const cardTitle = document.createElement("h1");
      card.classList.add("cardTitle");

      const cardOverview = document.createElement("p");
      card.classList.add("cardOverview");

      const cardVoteAverage = document.createElement("p");
      card.classList.add("cardVoteAverage");

      cardImage.src = `https://image.tmdb.org/t/p/w200/${img}`;
      cardTitle.textContent = title;
      cardOverview.textContent = overview;
      cardVoteAverage.textContent = voteAverage;

      card.append(cardImage, cardTitle, cardOverview, cardVoteAverage);
      cardList.append(card);

      window.alert(`${id}`);
    });
  })
  .catch((err) => console.error(err));

// let id = document.querySelector(".card-List");
// id.addEventListener("click", function (event) {
//   alert(event.target.id);
// });

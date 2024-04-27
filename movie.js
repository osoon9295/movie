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
    const movies = response["results"];
    const idButton = response["results"];

    movies.forEach((a) => {
      const img = a["poster_path"]; // 포스터
      const title = a["title"];
      const overview = a["overview"]; // 요약 내용
      const voteAverage = a["vote_average"]; // 평점
      const id = a["id"];

      const card = document.createElement("div");
      card.classList.add("card");

      const cardImage = document.createElement("img");
      cardImage.src = `https://image.tmdb.org/t/p/w200/${img}`;

      const cardTitle = document.createElement("h1");
      cardTitle.textContent = title;
      // card.classList.add("cardTitle");

      const cardOverview = document.createElement("p");
      cardOverview.textContent = overview;
      // card.classList.add("cardOverview");

      const cardVoteAverage = document.createElement("p");
      cardVoteAverage.textContent = voteAverage;
      // card.classList.add("cardVoteAverage");

      card.append(cardImage, cardTitle, cardOverview, cardVoteAverage);
      cardList.append(card);

      card.addEventListener("click", () => {
        alert(`영화 ID: ${id}`);
      });
    });
  })

  .catch((err) => console.error(err));

// idButton.forEach((b) => {
//   const id = b["id"];

// const print = () => {
//   alert(`영화id :` + id);
// };

// document.getElementById("button").addEventListener("click", print);

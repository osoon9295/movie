const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjhjY2Y1OTI5NTQ5OWYxYmJhODgzOTJlZWRjZWIyMCIsInN1YiI6IjY2MmEzMjc3ZGUxMWU1MDA5YjcwZTg4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OGPqGSssL5SW0ZxO3aZx2708eovOcaKRvbTOQQeFT8A",
  },
};

document.getElementById("button").addEventListener("click", () => {
  const searchInput = document.getElementById("search");
  const inputText = searchInput.value.toLowerCase();
  loadMovies(inputText); // Load or reload movies based on search
});

function loadMovies(filter = "") {
  const cardList = document.querySelector(".card-list");
  fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    options
  )
    .then((response) => response.json())
    .then((data) => {
      const movies = data.results;
      cardList.innerHTML = ""; // Clear the list before adding new cards

      movies
        .filter((movie) => movie.title.toLowerCase().includes(filter))
        .forEach((movie) => {
          const { poster_path, title, overview, vote_average, id } = movie;

          const card = document.createElement("div");
          card.classList.add("card");
          card.addEventListener("click", () => {
            alert(`영화 ID: ${id}`);
          });

          const cardImage = document.createElement("img");
          cardImage.src = `https://image.tmdb.org/t/p/w200/${poster_path}`;

          const cardTitle = document.createElement("h1");
          cardTitle.textContent = title;

          const cardOverview = document.createElement("p");
          cardOverview.textContent = overview;

          const cardVoteAverage = document.createElement("p");
          cardVoteAverage.textContent = vote_average;

          card.append(cardImage, cardTitle, cardOverview, cardVoteAverage);
          cardList.appendChild(card);
        });
    })
    .catch((err) => console.error("Error fetching data:", err));
}

// Initial load without filter
loadMovies();

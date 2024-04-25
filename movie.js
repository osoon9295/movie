const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjhjY2Y1OTI5NTQ5OWYxYmJhODgzOTJlZWRjZWIyMCIsInN1YiI6IjY2MmEzMjc3ZGUxMWU1MDA5YjcwZTg4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OGPqGSssL5SW0ZxO3aZx2708eovOcaKRvbTOQQeFT8A'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
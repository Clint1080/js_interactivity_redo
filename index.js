function addMovie(e) {
    e.preventDefault();
    inputField = document.querySelector(`input`).value;
    const movie = document.createElement(`li`);
    const movieTitle = document.createElement(`span`);

    movieTitle.textContent = inputField;
    movie.appendChild(movieTitle);
    document.querySelector(`ul`).appendChild(movie) // Attaching the <ul></ul><span></span>
    
}

document.querySelector(`form`).addEventListener(`submit`, addMovie);

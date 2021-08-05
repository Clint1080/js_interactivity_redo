let message = document.querySelector(`#message`);

function addMovie(e) {
  e.preventDefault();
  const inputField = document.querySelector(`input`);
  const movie = document.createElement(`li`);
  const movieTitle = document.createElement(`span`);

  movieTitle.textContent = inputField.value;
  movieTitle.addEventListener(`click`, crossOffMovie);
  const deleteBtn = document.createElement(`button`);
  movie.appendChild(movieTitle);
  movie.appendChild(deleteBtn);
  deleteBtn.textContent = `X`;
  deleteBtn.addEventListener(`click`, deleteMovie);

  document.querySelector(`ul`).appendChild(movie); // Attaching the <ul></ul><span></span>
  inputField.value = ``;
}
function deleteMovie(e) {
  e.target.parentNode.remove();
  console.log(e.target.parentNode.firstChild.textContent);
  message.textContent = `${e.target.parentNode.firstChild.textContent} deleted!`;
  revealMessage();
}

function crossOffMovie(e) {
  e.target.classList.toggle(`checked`);
  if (e.target.classList.contains(`checked`)) {
    message.textContent = `${e.target.textContent} watched`;
  } else {
    message.textContent = `${e.target.textContent} added back`;
  }
  revealMessage();
}
function revealMessage(e) {
  setTimeout(function () {
    message.classList.toggle(`hide`);
  }, 1000);
}
document.querySelector(`form`).addEventListener(`submit`, addMovie);

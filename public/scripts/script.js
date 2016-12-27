document.addEventListener('DOMContentLoaded', start);
function start () {
  findApple();
}

function findApple () {
  var apple = document.getElementsByClassName('apple')[0];
  var text = document.getElementById('clickhere');
  apple.addEventListener("click", showApple);
  text.addEventListener("click", hideText);
}

function showApple (evt) {
  evt.target.classList.toggle("visible");
}

function hideText (evt) {
    evt.target.classList.add("invisible");
}

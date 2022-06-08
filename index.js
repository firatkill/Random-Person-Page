const button = document.querySelector("button");

button.addEventListener("click", generateNew);

document.addEventListener("DOMContentLoaded", generateNew);

function generateNew() {
  fetch("https://randomuser.me/api/")
    .then((resp) => resp.json())
    .then((resp) => display(resp));
}
function display(object) {
  let image = `${object.results[0].picture.medium} `;
  let name = `${object.results[0].name.first} ${object.results[0].name.last} `;
  let location = `${object.results[0].location.city}, ${object.results[0].location.country}`;
  let phone = `${object.results[0].cell}`;
  let mail = `${object.results[0].email}`;

  document.querySelector("#mail").textContent = mail;
  document.querySelector("#cell").textContent = phone;
  document.querySelector("#location").textContent = location;
  document.querySelector("#name").textContent = name;
  document.querySelector("#image").src = image;
}

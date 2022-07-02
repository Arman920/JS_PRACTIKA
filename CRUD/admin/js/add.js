import Storages from "./storage.js";

let addHeroForm = document.querySelector('#addHeroForm')

let id = 1
function addHero(e) {
  e.preventDefault()

  const { herotype, heroname, heroImage } = e.target;

  const newHero = {
    id,
    type: herotype.value,
    name: heroname.value,
    image: heroImage.files[0].name || "unknown"
  }

  Storages.saveHero(newHero)
  id += 1;
  location.href = "admin.html"
}

addHeroForm.addEventListener('submit', addHero)

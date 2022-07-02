import Storages from "./storage.js";

if (!Storages.getItemToStorage("token")) {
  location.href = 'login.html'
}

const heroes = Storages.getAllHeroes()

const displeyHeroLists = () => {
  const tbody = document.querySelector('tbody')
  const heroes = Storages.getAllHeroes()
  console.log('heroes', heroes)
  heroes.forEach(hero => {
    tbody.innerHTML += `
        <tr>
            <td>${hero.id}</td>
            <td>${hero.name}</td>
            <td>${hero.type}</td>
            <td class="iamgeBox">
              <img src='./images/${hero.image}' alt=${hero.name}/>
            </td>
            <td>
            <a href="edit.html" class="edit">Edit</a>
            </td>
        </tr>
    `
  });
}
displeyHeroLists()
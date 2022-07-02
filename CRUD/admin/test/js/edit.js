import Storages from "./storages.js"

const form = document.querySelector('#editHeroForm')


	const foo = () => {

	let id = Storages.getToStorage("editid")
	let heroes = Storages.getAllHeroes()
	console.log({ heroes, id });
	let f = heroes.filter(hero => hero.id === Number(id))
	const inputName = document.getElementById("heroname")
	console.log(f);
	inputName.setAttribute("placeholder", f[0].name)
}
foo()
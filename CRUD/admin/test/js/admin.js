import Storages from "./storages.js"


if (!Storages.getToStorage("login")) {
		location.href = "login.html"
}


function displeyHeroes() {
	const heroes = Storages.getAllHeroes() || [];
	const body = document.getElementsByTagName('tbody')[0]

		heroes.forEach(hero => {
			body.innerHTML += `
					<tr>
							<td>${hero.id}</td>
							<td>${hero.name}</td>
							<td>${hero.type}</td>
							<td>
									<img src='./images/${hero.image}' alt='${hero.id}-${hero.name}' />				
							</td>
							<td>
									<a 
									id='edit-${hero.id}'
									data-editId='${hero.id}'
									href="edit.html"
									class="edit"
										>edit</a>
							</td>
					</tr>
			`
		});
}

displeyHeroes()
foo()

 function foo() {
	 let a = document.getElementsByTagName("a")
		Array.from(a).forEach(elem => {
			elem.addEventListener('click', (e) => {
				Storages.saveToStorage("editid", elem.dataset.editid)
			})
		})
 }
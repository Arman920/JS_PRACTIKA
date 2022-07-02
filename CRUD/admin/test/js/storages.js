export default class Storages {

	static saveToStorage(key,value) {
		if (typeof value === 'string' || typeof value === 'number') {
			localStorage.setItem(key, value)
		}else{
			localStorage.setItem(key, JSON.stringify(value))
		}
		
	}

	static getToStorage(key) {
		return localStorage.getItem(key)
	}

	static getAllHeroes() {
		return JSON.parse(localStorage.getItem("heroes")) || []
	}

	static saveHero(value) {
		const arr = Storages.getAllHeroes("heroes") || []

		arr.push(value)
		Storages.saveToStorage("heroes", arr)
	}

}
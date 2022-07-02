export default class Storages {

  static type = "heroes"

  static getItemToStorage(key) {
    return localStorage.getItem(key)
  }

  static saveItemToStorage(key, value) {
    console.log("save")
    localStorage.setItem(key, JSON.stringify(value))
  }

  static saveHero(value) {
    const heroes = Storages.getAllHeroes() || []
    let heroExist = Storages.isHeroExist(heroes, value?.name)

    if (!heroExist) {
      heroes.push(value);
      Storages.saveItemToStorage(this.type, heroes)
    }
  }

  static getAllHeroes() {
    return JSON.parse(localStorage.getItem(this.type)) || []
  }

  static isHeroExist(arr, heroname = "") {
    return arr.some(hero => hero.name === heroname)
  }
}
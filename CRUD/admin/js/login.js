import Storages from "./storage.js";

let myForm = document.querySelector('#myForm')

const user = {
  LOGIN: "admin",
  PASSWORD: "admin"
}



function sighIn(e) {
  e.preventDefault()

  console.log("login")
  let login = document.querySelector('#login').value
  let password = document.querySelector('#password').value
  console.log('login', { login, password })
  if (login === user.LOGIN && password === user.PASSWORD) {
    Storages.saveItemToStorage("token", true)
    location.href = 'admin.html'
  } else {
    alert("invalid password")
  }
}

myForm.addEventListener('submit', sighIn)




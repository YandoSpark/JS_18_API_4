var api = "https://randomuser.me/api"


fetch(api)
.then(response => response.json())
.then(data => {
    var picture = document.querySelector(".picture")
    var fullname = document.querySelector(".fullname")
    var email = document.querySelector(".email")
    var street = document.querySelector(".street")
    var city = document.querySelector(".city")
    var state = document.querySelector(".state")
    var country = document.querySelector(".country")
    var postcode = document.querySelector(".postcode")
    var idName = document.querySelector(".idName")
    var idValue = document.querySelector(".idValue")

    picture.src = data.results[0].picture.large
    fullname.innerHTML = data.results[0].name.title + " " + data.results[0].name.first + " " + data.results[0].name.last
    email.innerHTML = data.results[0].email
    street.innerHTML = data.results[0].location.street.number + " " + data.results[0].location.street.name
    city.innerHTML = data.results[0].location.city
    state.innerHTML = data.results[0].location.state
    country.innerHTML = data.results[0].location.country
    postcode.innerHTML = data.results[0].location.postcode
    idName.innerHTML = data.results[0].id.name
    idValue.innerHTML = data.results[0].id.value


})
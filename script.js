const name = document.getElementById("name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const form = document.getElementById("form")

form.addEventListener("submit", (e) => {
    if (password.value.length <= 6) {
        messages.push("Password must not be longer than 6 characters.")
    }

    if (password.value.length >=5) {
        messages.push("Password must not be less than six chracters.")
    }
})


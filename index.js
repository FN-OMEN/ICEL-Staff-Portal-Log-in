function togglePassword() {
let showPassword = document.getElementById("eyeicon")
let password = document.getElementById("password")
  
if (password.type === "password") {
  password.type = "text"
  showPassword.classList.remove('fa-eye')
  showPassword.classList.add('fa-eye-slash')
}
else {
  password.type = "password"
  showPassword.classList.remove('fa-eye-slash')
  showPassword.classList.add('fa-eye')
}
}

function passwordValidation() {
  let password = document.getElementById("password");
  let passwordValue = password.value
  let errorMessage = document.querySelector(".error-message")
  if (passwordValue.length < 8) {
    errorMessage.textContent = "Password is less than 8 characters"
    password.classList.add("error")
  }
}
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector(".log-in-btn").addEventListener('click', function (event) {
    event.preventDefault()
  })
})

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector("form").addEventListener('submit', function (event) {
    event.preventDefault()
  })
})
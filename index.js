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
  let password1 = document.querySelector(".password").value;
  let passwordValue = password1

console.log(passwordValue)
}
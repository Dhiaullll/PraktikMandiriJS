const login = document.querySelector("#login");
login.addEventListener("click", function () {
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  if (username == "Dhia" && password == "09876") {
    alert("Benar");
    document.body.innerHTML = "<h1>ANDA BERHASIL LOGIN</h1>";
  } else {
    alert("Password Salah\nMasukkan\nUsername: Dhia\nPassword: 09876");
  }
});

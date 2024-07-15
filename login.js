const container = document.querySelector(".container");
const btnSignIn = document.getElementById("btn-sign-in");
const btnSignUp = document.getElementById("btn-sign-up");
const formInicio = document.querySelector("#form-inicio");
const formRegistro = document.querySelector("#form-registro");

btnSignIn.addEventListener("click", () => {
  container.classList.remove("toggle");
});
btnSignUp.addEventListener("click", () => {
  container.classList.add("toggle");
});

formInicio.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = event.target.emailInicio.value;
  const password = event.target.passwordInicio.value;

  const url = "http://localhost:8080/users/login";

  const userData = {
    email,
    password,
  };

  await fetch(url, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  })
    .then((res) => res.json())
    .then((res) => console.log("Inicio de sesión exitoso", res))
    .catch((e) => console.log("Credenciales inválidas", e))
    .finally(() => window.location.href = "/24120-Cocina-Cris")
});

formRegistro.addEventListener("submit", async (event) => {
  event.preventDefault();

  const username = event.target.usernameRegistro.value;
  const email = event.target.emailRegistro.value;
  const password = event.target.passwordRegistro.value;

  const url = "http://localhost:8080/users";

  const userData = {
    username,
    email,
    password,
  };

  const response = await fetch(url, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  })

  if (response.ok) {
   console.log("Usuario creado exitosamente!")
   window.location.reload()
  } else {
   console.log("Ha ocurrido un error al tratar de crear el")
  }
});

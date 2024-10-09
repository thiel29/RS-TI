const form = document.getElementById("loginForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const errorMailElement = document.querySelector(".mail-error");
  const errorPasswordElement = document.querySelector(".password-error");

  const errorMailMessage = document.createElement("pre");
  const errorPasswordMessage = document.createElement("pre");
  errorMailElement.innerHTML = "";
  errorPasswordElement.innerHTML = "";

  let valid = true;

  if (!validatedEmail(email)) {
    valid = false;
    errorMailMessage.textContent = "Por favor, insira um e-mail válido!";
    errorMailElement.appendChild(errorMailMessage);
  }

  if (password.length < 6) {
    valid = false;
    errorPasswordMessage.textContent =
      "A senha deve ter pelo menos 6 caracteres.";
    errorPasswordElement.appendChild(errorPasswordMessage);
  }

  /*   const loggedUser = localStorage.getItem("login-form");

  if (loggedUser) {
    alert("Você já está logado!");
  } else {
    localStorage.setItem("login-form", "loggedUser");

    alert("Formulário enviado com sucesso!");
  } */

  if (valid) {
    alert("Formulário enviado com sucesso!");
    localStorage.setItem("login-form", "loggedUser");
  }
});

function validatedEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

/* function tooglePassword() {
  document
    .querySelectorAll(".eye")
    .forEach((eye) => eye.classList.toggle("hide"));

  const customType =
    password.getAttribute("type") == "password" ? "text" : "password";

  password.setAttribute("type", customType);

  console.log(customType);
}
 */

document
  .getElementById("loginForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const username = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    const responseElement = document.getElementById("response");
    responseElement.innerHTML = "";

    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (response.ok) {
        responseElement.innerHTML = `<p>Login bem sucedido! Token &{data.acessToken</p>`;
      } else {
        responseElement.innerHTML = `<p>Erro: &{data.message</p>`;
      }
    } catch (error) {
      responseElement.innerHTML = `<p>Erro na requisição: &{error.message</p>`;
    }
  });

const form = document.getElementById("login-form");

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

  const loggedUser = localStorage.getItem("login-form");

  if (loggedUser) {
    alert("Você já está logado!");
  } else {
    localStorage.setItem("login-form", "loggedUser");

    alert("Formulário enviado com sucesso!");
  }

  if (valid) {
    alert("Formulário enviado com sucesso!");
    localStorage.setItem("login-form", "loggedUser");
  }
});

function validatedEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
/*
function tooglePassword() {
  document
    .querySelectorAll(".eye")
    .forEach((eye) => eye.classList.toggle("hide"));

  const customType =
    password.getAttribute("type") == "password" ? "text" : "password";

  password.setAttribute("type", customType);

  console.log(customType);
}

document
  .getElementById("login-form")
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
*/

function togglePassword() {
  document
    .querySelectorAll(".eye")
    .forEach((eye) => eye.classList.toggle("hide"));

  const password = document.getElementById("password");
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
}

/* const validUserMail = "usuario@mail.com";
const validPassword = "senha123";
*/

// verificar se o UUID está salvo em LocalStorage
/* document.addEventListener("DOMContentLoaded", function () {
  const storedUUID = localStorage.getItem(validUserMail);

  if (storedUUID) {
    window.location.href = "./pages/loggedUser/index.html";
    return;
  }
});
 */

// verificar se existe um token salvo em LocalStorage

document.addEventListener("DOMContentLoaded", function () {
  const storedToken = localStorage.getItem("accessToken");

  console.log(storedToken);
  if (storedToken) {
    window.location.href = "./pages/loggedUser/index.html";
    return;
  }
});

document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const userName = document.getElementById("email").value;
    const userPassword = document.getElementById("password").value;

    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: userName,
        password: userPassword,
        expiresInMins: 30,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.accessToken) {
          console.log("Login bem-sucedido!");

          localStorage.setItem("accessToken", data.accessToken);
          window.location.href = "./pages/loggedUser/index.html";
        } else {
          console.log("Erro no login: ", data.message);
        }
      })
      .catch((error) => {
        console.log("Erro na requisição: ", error);
      });
  });

document.addEventListener("DOMContentLoaded", function () {
  const username = "thiel29";
  const url = `https://api.github.com/users/${username}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Usuário não encontrado");
      }
      return response.json();
    })
    .then((data) => {
      const username = document.getElementById("name");

      username.textContent = data.name;

      const bio = document.getElementsByClassName("bio")[0];
      bio.textContent = data.bio;

      const followers = document.getElementById("followers");
      console.log(followers);
      followers.textContent = data.followers;

      const public_repos = document.getElementById("repos");
      public_repos.textContent = data.public_repos;

      const public_gists = document.getElementById("gists");
      public_gists.textContent = data.public_gists;
    });
});

/* quando precisar de um formulário que solicita os dados:
document
  .getElementById("githubForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const url = `https://api.github.com/users/${username}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Usuário não encontrado");
        }
        const data = response.json();
        return data;
      })
      .then((data) => {
        const resultElement = document.getElementById("result");
        resultElement.innerHTML = `
    <h2> ${data.Login} </h2>
    <p><strong>Nome:</strong>${data.name}</p>
    <img src= "${data.avatar_url}" alt="Avatar width="100" >
    <p><strong>Seguidores:</strong>${data.followers}</p>`;
      });
  }); */

document.querySelector(".inputUsername").addEventListener("keyup", showProfile);

function showProfile(e) {
  let showRepo = true;
  if (e.target.value != "") {
    ui.style.height = "auto";
    let user = e.target.value;
    console.log(user);

    getProfile(
      `https://api.github.com/users/${user}?client_id=${
        githubInfo.clientId
      }&client_secret=${githubInfo.clientSecret}`
    ).then(m => {
      displayUi(m);

      if (m.login) {
        getRepo(
          `https://api.github.com/users/${user}/repos?per_page=${
            githubInfo.repoCount
          }&sort=${githubInfo.repoSort}&client_id=${
            githubInfo.clientId
          }&client_secret=${githubInfo.clientSecret}`
        ).then(m => displayUiRepo(m));
      }
    });
  } else {
    ui.innerHTML = "";
    ui.style.height = "290px";
  }
}

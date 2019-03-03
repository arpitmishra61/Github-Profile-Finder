let ui = document.querySelector(".ui");
function displayUi(profile) {
  if (profile.login) {
    console.log(profile);
    ui.innerHTML = `<div class="mt-4 card p-4 text-center">
        <div class="row">
          <div class="col-lg-4">
            <img src=${
              profile.avatar_url
            } alt="avatar"  style='width:450px;height:200px;'  class='mt-4 img-fluid'>
            <p class="lead">${profile.created_at}</p>
            <div class="text-white">
            <span  class="bg-info p-2 badge ">Followers:${
              profile.followers
            }</span>
            <span  class="bg-warning p-2 badge ">Public Gists:${
              profile.public_gists
            }</span>
            <span  class="bg-secondary p-2 badge ">Public Repos:${
              profile.public_repos
            }</span>
            <span  class="bg-danger p-2 badge mt-1">Following:${
              profile.following
            }</span>
             </div>
          </div>
          <div class="col-lg-8">
            <div />
            <h1 class="display-4 ">${profile.name}</h1>
              <li class="list-group-item mt-2 bg-light">Company: ${
                profile.company
              }</li>
            <li class="list-group-item mt-2 ">${profile.location}</li>
            <li class="list-group-item mt-2 bg-light">${profile.email}</li>
            <li class="list-group-item mt-2">${profile.blog}</li>
          </div>
        </div>
       
      </div>`;
  } else if (profile.message) {
    ui.innerHTML = `<div class="alert alert-danger mt-4">
        <h4>User Not Found!!!</h4>
      </div>`;
    ui.style.height = "290px";
  }
}

function displayUiRepo(repos) {
  console.log(repos);
  if (repos.length) {
    rui = document.createElement("div");
    rui.classList = "container card p-4 mt-4 text-center";
    ui.appendChild(rui);

    rui.innerHTML = "<h1 class='display-4'>Github Repos</h1>";
    repos.forEach(repo => {
      repoText = document.createElement("p");
      repoText.innerHTML = `<li class="list-group-item mt-2 p-3 bg-light"><h5>${
        repo.name
      }</h5><span  class="bg-warning text-white p-2 badge mx-2 ">${
        repo.watchers
      }</li>`;

      rui.appendChild(repoText);
    });
  } else {
    rui = document.createElement("div");
    rui.classList = "container card p-4 mt-4 text-center";
    ui.appendChild(rui);

    rui.innerHTML = "<h1 class='display-4 alert alert-warning'>No repos..</h1>";
  }
}

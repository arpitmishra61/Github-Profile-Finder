githubInfo = {
  clientId: "204e4637ae3e44f38fe5",
  clientSecret: "ac5346391dda84cbb3fbfea4c1d3b80ae3fb2c66",
  repoCount: 5,
  repoSort: "created: asc"
};

async function getProfile(url) {
  const profile = await fetch(url);

  ui.innerHTML = `<div class="text-center display-4 ">Loading...</div>`;

  return profile.json();
}

async function getRepo(url) {
  const profile = await fetch(url);
  return profile.json();
}

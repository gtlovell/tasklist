class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="https://avatars2.githubusercontent.com/u/4740883?v=4">
            <a href="https://github.com/gtlovell" target="_blank" class="btn btn-primary btn-block mt-2 mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-pill badge-success">Public Repos: ${
              user.public_repos
            }</span>
            <span class="badge badge-pill badge-info">Public Gists: ${
              user.public_gists
            }</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Memeber Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  // Show repos
  showRepos(repos) {
    let output = '';

    repos.forEach(function(repo) {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
              <span class="badge badge-pill badge-info">Stars: ${
                repo.stargazer_count
              }</span>
              <span class="badge badge-pill badge-info">Watchers: ${
                repo.watchers_count
              }</span>
              <span class="badge badge-pill badge-info">Forks: ${
                repo.forks_count
              }</span>
            </div>
          </div>
        </div>
      `;
    });

    document.getElementById('repos').innerHTML = output;
  }
}

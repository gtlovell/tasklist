// Init GitHub
const github = new Github();
const ui = new UI();

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', e => {
  // Get input text
  const userText = e.target.value;

  if (userText !== '') {
    github.getUser(userText).then(data => {
      if (data.profile.message === 'Not Found') {
      } else {
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  }
});

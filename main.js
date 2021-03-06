const linksSocialMidia = {
  github: 'hauraStudio',
  youtube: 'channel/UCSLcklOm9xixz6osxD0NNxQ',
  facebook: 'studio.haura',
  instagram: 'studio.haura',
  twitter: 'developerLuiz'
}

function changeSocialMidiaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMidia[social]}`
  }
}

changeSocialMidiaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMidia.github}`
  studio.haura
  fetch(url)
  .then(response => response.json())  
  .then(data => {
    userName.textContent = data.name,
    userBio.textContent = data.bio,
    userLink.href = data.html_url,
    userImage.src = data.avatar_url,
    userLogin.textContent = data.login
  })
}


getGitHubProfileInfos()


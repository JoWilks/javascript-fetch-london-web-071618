const app = "I don't do much.";

  const token = '691df7830d0672964d89344494ca7031fe1c5e1a'
  fetch('https://api.github.com/user/repos', {
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => console.log(json));

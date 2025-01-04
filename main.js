$(document).ready(function () { 
    const username = 'PauloHenriqueBento';
    fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(data => {
            $('#name').text(data.name);
            $('#username').text(`@${data.login}`);
            $('#followers').text(data.followers);
            $('#following').text(data.following);
            $('#repository').text(data.public_repos);
            $('#link').attr('href', data.html_url);
            $('#avatar').attr('src', data.avatar_url);
        })
        .catch(error => {
            console.error('Error fetching the GitHub profile:', error);
        });
})
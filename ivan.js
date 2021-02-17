document.getElementById("gitusers").addEventListener("click", getGitHub)


function getGitHub(){
    let query = document.getElementById('query').value;
    const numOfResults = 20
    fetch(`https://api.github.com/search/users?q=${query}&per_page=${numOfResults}`)

    .then(res => res.json())
    .then(data => console.log(data.items))
    return data.items

}
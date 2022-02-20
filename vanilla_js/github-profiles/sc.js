// Search Data for user
// get and show data

const APIURL = "https://api.github.com/users/";
const main = document.querySelector('main')
const search = document.querySelector('input');
const form = document.querySelector('form')


async function getUserData(username){
    const user = await fetch(APIURL+username);
    const userData = await user.json();

    createUserCard(userData);
    // console.log(userData);

}

async function getReposData(username){
    const user = await fetch(APIURL+username+'/repos');
    const userData = await user.json();

    addReposCard(userData);
    // console.log(userData);
}

function createUserCard(user){
    const card = `<div class="card">
    <div class="img_container">
        <img src="${user.avatar_url}" alt"${user.name}" class="avatar"/>
    </div>

    <div class="text">
        <h2>${user.name ? user.name :`User Name is Not Avaiable`}</h2>
        <h5>${user.location ? user.location:`Location is not available`}</h5>
        <p> ${user.bio ? user.bio : `Bio is not availabe`} </p>

        <ul class="ul">
            <li>${user.following} Following</li>
            <li>${user.followers} Followers</li>
            <li>${user.public_repos} Public Repos </li>
        </ul>

        <h3> Public Repos: </h3>

        <ul class='repos' id='repos'>
            
           
        </ul>    
        </div>
    </div>
          
    `

    const NotFound = `<div class="not-found-card">
        <h2>Not Found, Invaild Search</h2>
    </div>`


    if(user.message==='Not Found'){
        main.innerHTML = NotFound;
    }
    else{
        main.innerHTML = card;
    }
}

function addReposCard(user){
    const reposEl = document.querySelector('.repos');
    
    user
    .sort((a,b)=>
        b.stargazer_count - a.stargazer_count
    )
    .slice(0,7).forEach((repo) =>{
        const repoEl = document.createElement('a');
        repoEl.classList.add('repo')

        repoEl.href = repo.html_url;
        repoEl.target = '_blank'
        repoEl.text = repo.name;

        reposEl.appendChild(repoEl)
        
    })


}

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    const user = search.value;

    if(user){
        getUserData(user);
        getReposData(user);

        search.value  = "";
    }
})


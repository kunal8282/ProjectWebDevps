const moviesContainer = document.querySelector(".movies") 

async function getMovies(params) {
    // const resp = await fetch("https://imdb-api.com/en/API/MostPopularMovies/k_v5b81yh0");    
    const respData = await resp.json();

    respData.items.forEach((respData)=>{
        
        const moviesEl = document.createElement('div')
        moviesEl.classList.add('movies');
        
        moviesEl.innerHTML  = `<img src="${respData.image}" alt="">
        <div class="moviesInfo">
            <h3>${respData.title}</h3>
            <span>${respData.imDbRating}</span>
        </div>`
        
        document.body.appendChild(moviesEl);

    })


    console.log(respData);
}

getMovies()
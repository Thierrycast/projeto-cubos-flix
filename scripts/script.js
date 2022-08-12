const movies = document.querySelector('.movies')

let arrayMovies = []
let arrayMoviesSearch = []

// recebe os dados da api
//https://tmdb-proxy.cubos-academy.workers.dev/3/discover/movie?language=pt-BR&include_adult=false

const getarrayMovies = async()=>{
    const response = await fetch('https://tmdb-proxy.cubos-academy.workers.dev/3/discover/movie?language=pt-BR&include_adult=false')
    const body = await response.json()
    arrayMovies = body.results
    arrayMoviesSearch = arrayMovies 
}

//cria os "cards" por meio da DOM
const makeCardsMovies = (start, end) => {

    const temp = arrayMoviesSearch.slice(start, end)

    movies.innerHTML = null
    temp.forEach((item)=>{

        

        const card = document.createElement('div')
        card.classList.add('movie')
        card.style.backgroundImage = `url(${item.poster_path})`

        const info = document.createElement('div')
        info.classList.add('movie__info')

        const title = document.createElement('span')
        title.classList.add('movie__title')
        title.textContent = item.title

        const star = document.createElement('img')
        star.src = "./assets/estrela.svg"
        star.alt = "Estrela"

        const rating = document.createElement('span')
        rating.classList.add('movie__rating')
        rating.textContent = item.vote_average

        info.append(title,star, rating)
        card.append(info)

        movies.append(card)

        card.addEventListener('click', ()=>{
            makeModal(item)
        });
        
    })
}

let highlightGeneral = null;
let highlightVideo = null;

const getHighlightMovie = async ()=>{
    const responseGeneral = await fetch('https://tmdb-proxy.cubos-academy.workers.dev/3/movie/436969?language=pt-BR')
    const bodyGeneral = await responseGeneral.json()

    const responseVideo = await fetch('https://tmdb-proxy.cubos-academy.workers.dev/3/movie/436969/videos?language=pt-BR')
    const bodyVideo = await responseVideo.json()

    highlightGeneral = bodyGeneral
    highlightVideo = bodyVideo


}

const highLight = document.querySelector('.highlight')

const highLightVideo = document.querySelector('.highlight__video')
const highLightTitle = document.querySelector('.highlight__title')
const highLightRating = document.querySelector('.highlight__rating')
const highLightGenres = document.querySelector('.highlight__genres')
const highLightLaunch = document.querySelector('.highlight__launch')
const highLightDescription = document.querySelector('.highlight__description')
const highLightVideoLink = document.querySelector('.highlight__video-link')

const makeHighlightMovie = ()=>{

    // atribui a imagem de background a div
    highLightVideo.style.backgroundImage = `url(${highlightGeneral.backdrop_path})`

    // titulo do filme em destaque
    highLightTitle.innerHTML = highlightGeneral.title

    //avaliação do filme em destaque
    highLightRating.innerHTML = highlightGeneral.vote_average

    //generos do filme em destaque
    let arrayGenres = []
    highlightGeneral.genres.forEach((item)=>{
        return arrayGenres.push(item.name)
    })

    let genres = arrayGenres.join(", ")
    highLightGenres.innerHTML = genres

    // data de lançamento do filme em destaque
    
    const arrayMonths = ["JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO", "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO" ]

    let day = highlightGeneral.release_date.slice(-2)
    let month =highlightGeneral.release_date.slice(5,7)
    let year = highlightGeneral.release_date.slice(0, 4)

    if (month[0] == 0) {
        month = month[1]
    }

    let releasDate = `${day} DE ${arrayMonths[month]} DE ${year}`
    highLightLaunch.innerHTML = releasDate

    //descrição do filme em destaque
    highLightDescription.textContent = highlightGeneral.overview

    //link para o trailer

    
    const linkTrailer = highlightVideo.results[0].key
    highLightVideoLink.href = `https://www.youtube.com/watch?v=${linkTrailer}`

}

//chama as funções acima 
const init = async ()=>{
    await getarrayMovies()
    makeCardsMovies(0, 5)

    await getHighlightMovie()
    makeHighlightMovie()
}

init()
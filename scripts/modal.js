const modal = document.querySelector('.modal')
const btnModalClose = document.querySelector('.modal__close')

const modalTitle = document.querySelector('.modal__title')
const modalImg = document.querySelector('.modal__img')
const modalDescription = document.querySelector('.modal__description')
const modalAverage = document.querySelector('.modal__average')


const makeModal = async (item)=>{
   

    const response = await fetch(`https://tmdb-proxy.cubos-academy.workers.dev/3/movie/${item.id}?language=pt-BR`)

    const body = await response.json()
     console.log(body);

     const backdropPath = body.backdrop_path

    modalTitle.textContent = body.title
    modalImg.src = backdropPath
    modalDescription.textContent = body.overview
    modalAverage.textContent = body.vote_average

    modal.classList.remove('hidden')
}

const closeModal = ()=>{
    modal.classList.add('hidden')

}

modal.addEventListener('click', closeModal)
btnModalClose.addEventListener('click', closeModal)


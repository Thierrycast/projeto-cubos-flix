const btnPrev = document.querySelector('.btn-prev')
const btnNext = document.querySelector('.btn-next')

let start = 0
let end = 5



const prevPagination = ()=>{
    start -= 5
    end -= 5
    
    if( start < 0){
        start = arrayMoviesSearch.length - 5
        end = arrayMoviesSearch.length
    }

    makeCardsMovies(start, end)
}

const nextPagination = ()=>{
    start += 5
    end += 5

    
    if(end > arrayMoviesSearch.length){
        start = 0
        end = 5
    }
    makeCardsMovies(start, end)
}



btnPrev.addEventListener("click", prevPagination)
btnNext.addEventListener("click", nextPagination)
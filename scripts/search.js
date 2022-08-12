const search = document.querySelector('.input')

search.addEventListener('keyup', ()=>{
    if(search.value !== ""){
        arrayMoviesSearch=[];
        arrayMovies.forEach((item)=>{
            if (item.title.toLowerCase().includes(search.value.toLowerCase())) {
                arrayMoviesSearch.push(item)
            }
        })

        makeCardsMovies(0, 5)
    } else {
        init()
    }
})
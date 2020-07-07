function backToTop(arg){
    const top = document.querySelector('#topAreaDiv')
    top.scrollIntoView({
        behavior: 'smooth'
    })
}

function goToCategory(cName){
    const top = document.querySelector(cName)
    top.scrollIntoView({
        behavior: 'smooth'
    })
}
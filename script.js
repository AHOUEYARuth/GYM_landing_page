
window.addEventListener('scroll', function(){
    if(window.scrollY > 150){
        const header = document.querySelector('#header')
        header.classList.add('scrolled')
    }else{
        header.classList.remove('scrolled')
    }
})

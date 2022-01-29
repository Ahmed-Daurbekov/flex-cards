function slidePlugin(acriveSlide = 1) {
    const slides = document.querySelectorAll('.slide')

    slides[acriveSlide].classList.add('active')

    for(const slide of slides) {
        slide.addEventListener('click', () => {
            removeActiveClass()
            slide.classList.add('active')
        })
    }
    
    function removeActiveClass() {
        slides.forEach(slide => {
            slide.classList.remove('active')
        })
    }
}

slidePlugin(0)

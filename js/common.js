document.querySelectorAll('article').forEach(function(el, i) {
    console.log(el)
    el.style.animationDelay = 0.3 * i + 's'
})

function headerSwipe() {
    setTimeout(function() {
        document.querySelector('header a').classList.add('goLeft')
    }, 2000);
}

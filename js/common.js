$(document).ready(function () {
    headerSwipe();
});

function headerSwipe() {

    setTimeout(function () {
        console.log('ITS TIME!');
        $('header a').addClass('goLeft');
    }, 2000);

}
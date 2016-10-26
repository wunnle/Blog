$(document).ready(function() {
    $("body").addClass("r");
    headerSwipe();

    for (i = 0; i < $("article").length; i++) {
        setDelay(i, 'r', 215);
    }

});

function headerSwipe() {
    setTimeout(function() {
        console.log('ITS TIME!');
        $('header a').addClass('goLeft');
    }, 2000);
}

function setDelay(i, className, interval) {
    setTimeout(function() {
        $("body").find('article').eq(i).addClass(className);
    }, i * interval)
}

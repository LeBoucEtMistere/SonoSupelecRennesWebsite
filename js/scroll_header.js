$(document).ready(function () {
    console.log(document.body.clientHeight)
    $(window).scroll(function () {
        //if you hard code, then use console
        //.log to determine when you want the 
        //nav bar to stick.
        var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        console.log($(window).scrollTop())

        if ($(window).scrollTop() > h) {
            $('#nav_bar').addClass('navbar-fixed');
            $('#content').addClass('content-shifted');
        }
        if ($(window).scrollTop() < h + 1) {
            $('#nav_bar').removeClass('navbar-fixed');
            $('#content').removeClass('content-shifted');
        }
    });
});
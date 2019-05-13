// how many days from lest blog...
function daysPassedOne(dt) {
    var current = new Date(dt.getTime());
    var previous = new Date(dt.getFullYear(), 4, 10);
    return Math.ceil((current - previous + 1) / 86400000);
}

document.querySelector('#time-of-post').innerHTML = "Posted " + daysPassedOne(new Date()) + " days ago";

function daysPassedTwo(dt) {
    var current = new Date(dt.getTime());
    var previous = new Date(dt.getFullYear(), 4, 12);
    return Math.ceil((current - previous + 1) / 86400000);
}

document.querySelector('#time-of-post-page-two').innerHTML = "Posted " + daysPassedTwo(new Date()) + " days ago";


//  jQuery for hiding and showing arrow on scroll
$(window).scroll(function() {
    if ($(window).scrollTop() >= 200) {
        $('.arrow').css('opacity', '0');
    } else {
        $('.arrow').css('opacity', '100');
    }
});
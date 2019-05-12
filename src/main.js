// how many days from lest blog...
function days_passed(dt) {
    var current = new Date(dt.getTime());
    var previous = new Date(dt.getFullYear(), 4, 10);
    return Math.ceil((current - previous + 1) / 86400000);
}

document.querySelector('#time-of-post').innerHTML = "Posted " + days_passed(new Date()) + " days ago";
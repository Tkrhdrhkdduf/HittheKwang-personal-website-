let pos = document.querySelector(element).offsetTop;
if ('scrollBehavior' in document.documentElement.style) { //Checks if browser supports scroll function
    window.scroll({
        top : pos,
        left : 0,
        behavior : 'smooth'
    });
} else {
    smoothScrollTo(0, pos, 500); //polyfill below
}
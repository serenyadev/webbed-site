document.addEventListener('DOMContentLoaded', () => {
    for (let button in document.getElementsByClassName("slideshow_next")) {
        button.onclick = function () {
            let slideshow = document.getElementById(button.getAttribute("target"));
            let active, next = null, nextActive;
            for(let element in slideshow.children) {
                if(element.classList.contains("active") && !nextActive) {
                    active = element;
                    nextActive = true;
                } else if(nextActive) {
                    next = element;
                    break;
                }
            }
            if(next == null) next = slideshow.children[0];
            slideshowNext(slideshow, active, next)
        }
    }
});

function slideshowNext(slideshow, current, next) {
    current.classList.remove("active");
    next.classList.add("active");
}
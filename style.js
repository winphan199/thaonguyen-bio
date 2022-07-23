const scrollContainer = document.querySelector(".contact-list");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    // if (evt.deltaY >= 0) {

    //     scrollContainer.scrollLeft += scrollContainer.offsetWidth;
    // }
    // else {
    //     scrollContainer.scrollLeft -= scrollContainer.offsetWidth;
    // }
    scrollContainer.scrollLeft -= evt.deltaY;

});

function hideIcon(selector) {
    selector.style.visibility = 'hidden';
}

function showIcon(selector) {
    selector.style.visibility = 'visible';
}

// fixbug mouse wheel k lay dc do dai
const observer = new IntersectionObserver(entries => {
    // get left right icon
    const leftIcon = document.querySelector('.left-btn');
    const rightIcon = document.querySelector('.right-btn');
    entries.forEach(entry => {

        if (entry.target == first) {

            if (entry.isIntersecting) {
                hideIcon(leftIcon);
            }
            else {
                showIcon(leftIcon)
            }
        } else if (entry.target == last) {
            if (entry.isIntersecting) {
                hideIcon(rightIcon);
            }
            else {
                showIcon(rightIcon)
            }
        }
    })
}, {
    threshold: 1
})

const first = document.querySelector('.contact-list > .contact-item:first-child');
const last = document.querySelector('.contact-list > .contact-item:last-child');

observer.observe(first);
observer.observe(last);


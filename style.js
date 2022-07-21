const scrollContainer = document.querySelector(".contact-list");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    if (evt.deltaY >= 0) {

        scrollContainer.scrollLeft += scrollContainer.offsetWidth;
    }
    else {
        scrollContainer.scrollLeft -= scrollContainer.offsetWidth;
    }
    console.log(scrollContainer.scrollLeft)
    console.log(scrollContainer.scrollWidth)

    // get left right icon
    const leftIcon = document.querySelector('.left-btn');
    const rightIcon = document.querySelector('.right-btn');
    if (scrollContainer.scrollLeft <= 0) {
        hideIcon(leftIcon);
        showIcon(rightIcon);
    } else if (scrollContainer.scrollLeft > 0 && scrollContainer.scrollLeft < scrollContainer.scrollWidth - scrollContainer.offsetWidth) {
        showIcon(leftIcon);
        showIcon(rightIcon);
    } else if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.offsetWidth) {
        showIcon(leftIcon);
        hideIcon(rightIcon);
    }
});




function hideIcon(selector) {
    selector.style.visibility = 'hidden';
}

function showIcon(selector) {
    selector.style.visibility = 'visible';
}


window.onload = function () {
    const slider = document.querySelector('.boxes');     // container
    const secondImg = slider.children[1];                // box2

    if (secondImg) {
        const centerPosition = secondImg.offsetLeft 
                             - slider.clientWidth / 1.947
                             + secondImg.clientWidth / 2;

        slider.scrollTo({
            left: centerPosition,
            behavior: "smooth"
        });
    }
};


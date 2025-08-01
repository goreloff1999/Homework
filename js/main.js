(function () {
    const burgerIcon = document.querySelector('.burger-icon');
    const navLinks = document.querySelectorAll('.nav__link');

    if (!burgerIcon) return;

    burgerIcon.addEventListener('click', function (e) {
        e.preventDefault();
        document.body.classList.toggle('body--opened-menu');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.body.classList.remove('body--opened-menu');
        });
    });
})();
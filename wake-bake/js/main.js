

document.addEventListener('DOMContentLoaded', () => {

    /* ========== BURGER MENU ========== */
    (function () {
        const burgerIcon = document.querySelector('.burger-icon');
        const navLinks = document.querySelectorAll('.nav__link');

        if (burgerIcon) {
            burgerIcon.addEventListener('click', function (e) {
                e.preventDefault();
                document.body.classList.toggle('body--opened-menu');
            });
        }

        if (navLinks.length) {
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    document.body.classList.remove('body--opened-menu');
                });
            });
        }
    })();


    /* ========== MODAL  ========== */
    (function () {
        const giftBtns = document.querySelectorAll('.about__img-button');
        const modal = document.querySelector('.modal');
        if (!modal || giftBtns.length === 0) return;

        const closeBtn = modal.querySelector('.modal__cancel');

        function openModal() {
            document.body.classList.add('body--opened-modal');
            const input = modal.querySelector('input, textarea, button, [tabindex]');
            if (input) input.focus();
        }

        function closeModal() {
            document.body.classList.remove('body--opened-modal');
        }

        giftBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                openModal();
            });
        });

        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                closeModal();
            });
        }

        // клик вне окна
        modal.addEventListener('click', (e) => {
            if (!e.target.closest('.modal__window')) {
                closeModal();
            }
        });

        // Esc
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && document.body.classList.contains('body--opened-modal')) {
                closeModal();
            }
        });
    })();

});


/* ========== tab  ========== */

const tabControls = document.querySelector('.tab-controls')

tabControls.addEventListener('click', toggleTab)

function toggleTab(e) {

    const tabControl = e.target.closest('.tab-controls__link')

    if (!tabControl) return
    e.preventDefault()
    if (tabControl.classList.contains('tab-controls__link--active')) return

    const tabContentID = tabControl.getAttribute('href')
    const tabContent = document.querySelector(tabContentID)
    const activeControl = document.querySelector('.tab-controls__link--active')
    const activeContent = document.querySelector('.tab-content--show')

    activeControl.classList.remove('tab-controls__link--active')
    activeContent.classList.remove('tab-content--show')

    tabControl.classList.add('tab-controls__link--active')
    tabContent.classList.add('tab-content--show')
}

/* ========== accordeon  ========== */

const accordionLists = document.querySelectorAll('.accordion-list');

accordionLists.forEach(accordionList => {
    accordionList.addEventListener('click', (e) => {
        const accordionControl = e.target.closest('.accordion-list__control');
        if (!accordionControl) return;

        const accordionItem = accordionControl.parentElement;
        const accordionContent = accordionControl.nextElementSibling;

        // Закрываем все открытые аккордеоны в текущем списке
        const openedItems = accordionList.querySelectorAll('.accordion-list__item--opened');
        openedItems.forEach(item => {
            if (item !== accordionItem) {
                item.classList.remove('accordion-list__item--opened');
                item.querySelector('.accordion-list__content').style.maxHeight = null;
            }
        });

        // Переключаем текущий аккордеон
        accordionItem.classList.toggle('accordion-list__item--opened');

        if (accordionItem.classList.contains('accordion-list__item--opened')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = null;
        }
    });


    // Sliders
    new Swiper('.gallery__slider', {

        spaceBetween: 15,
        slidesPerView: 1.5,


        pagination: {
            el: '.gallery__pagination',
            type: 'fraction'
        },

        navigation: {
            nextEl: '.gallery__next',
            prevEl: '.gallery__prev',
        },


        breakpoints: {

            601: {
                spaceBetween: 32,
                slidesPerView: 3,
            },
            801: {
                spaceBetween: 32,
            },
            1101: {
                slidesPerView: 4,
            }
        }
    })


    // Sliders review



    new Swiper('.testimonials__slider', {

        spaceBetween: 0,
        slidesPerView: 1,
        centeredSlides: true,


        navigation: {
            nextEl: '.testimonials__next',
            prevEl: '.testimonials__prev',
        },

        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
                breakpoints: {


            901: {
                slidesPerView: 1.5,
            },
            1201: {
                slidesPerView: 2.1,
            },

        }
    

    })
});








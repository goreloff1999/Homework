(function () {
    'use strict';

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
})();

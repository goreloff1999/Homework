// ===============================================
// WELCOME SLIDER ANIMATION
// ===============================================
function animateSlideChange(slides, dots, from, to) {
    if (from === to) return;
    const fadeOut = slides[from];
    const fadeIn = slides[to];
    dots[from].classList.remove('welcome__dot--active');
    dots[to].classList.add('welcome__dot--active');
    fadeOut.style.transition = 'opacity 0.5s';
    fadeIn.style.transition = 'opacity 0.5s';
    fadeOut.style.opacity = 0;
    fadeOut.style.pointerEvents = 'none';
    setTimeout(() => {
        fadeOut.classList.remove('welcome__slide--active');
        fadeIn.classList.add('welcome__slide--active');
        fadeIn.style.opacity = 1;
        fadeIn.style.pointerEvents = 'auto';
    }, 500);
}

// ===============================================
// MAIN INITIALIZATION
// ===============================================
document.addEventListener('DOMContentLoaded', function () {
    var searchTape = document.querySelector('.search-tape');
    var searchInput = document.getElementById('searchInput');
    if (searchTape && searchInput) {
        searchTape.addEventListener('click', function(e) {
            if (e.target !== searchInput && !e.target.classList.contains('icon')) {
                searchInput.focus();
            }
        });
    }

    const loader = document.getElementById('site-loader');
    const mainContainer = document.querySelector('.container');
    if (loader && mainContainer) {
        setTimeout(function() {
            loader.style.opacity = '0';
            mainContainer.style.opacity = '1';
            if (typeof window.initGSAPScrollEffects === 'function') {
                window.initGSAPScrollEffects();
            }
            setTimeout(function() {
                loader.style.display = 'none';
            }, 1000);
        }, 350);
    }

    document.querySelectorAll('.chip').forEach(function(chip) {
        chip.addEventListener('click', function() {
            var searchInput = document.getElementById('searchInput');
            if (searchInput) {
                searchInput.value = chip.textContent;
                searchInput.focus();
            }
        });
    });

    var searchInput = document.getElementById('searchInput');
    var chips = document.querySelectorAll('.chip');
    if (searchInput && chips.length) {
        searchInput.addEventListener('input', function() {
            var val = searchInput.value.trim().toLowerCase();
            var found = false;
            chips.forEach(function(chip) {
                var chipText = chip.textContent.trim().toLowerCase();
                if (val && chipText.startsWith(val)) {
                    chip.classList.add('chip--active');
                    chip.classList.remove('chip--dim');
                    found = true;
                } else if (val) {
                    chip.classList.remove('chip--active');
                    chip.classList.add('chip--dim');
                } else {
                    chip.classList.remove('chip--active');
                    chip.classList.remove('chip--dim');
                }
            });
        });
    }

    // ===============================================
    // GSAP SCROLL EFFECTS
    // ===============================================
    window.initGSAPScrollEffects = function() {
        if (window.gsap && window.ScrollTrigger) {
            window.gsap.registerPlugin(window.ScrollTrigger);
            
            window.gsap.utils.toArray('.title__text, .card-section__text').forEach(el => {
                window.gsap.from(el, {
                    opacity: 0.2,
                    y: 20,
                    duration: 0.9,
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 80%',
                        toggleActions: 'play none none none'
                    }
                });
            });

            window.gsap.utils.toArray('.cards-section .card img').forEach((img, index) => {
                window.gsap.from(img, {
                    scale: 0.95,
                    opacity: 0.3,
                    y: 25,
                    duration: 0.8,
                    delay: index * 0.08,
                    ease: 'power1.out',
                    scrollTrigger: {
                        trigger: img,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                });
                
                window.gsap.to(img, {
                    y: -15,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: img.closest('.card'),
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1.5
                    }
                });
                
                window.gsap.to(img, {
                    rotation: index % 2 === 0 ? 1 : -1,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: img.closest('.card'),
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 3
                    }
                });
            });

            window.gsap.utils.toArray('.cards-section .card').forEach((card, index) => {
                const isLeft = card.closest('.left-block');
                const direction = isLeft ? -10 : 10;
                
                window.gsap.from(card, {
                    x: direction,
                    opacity: 0.8,
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: 'power1.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                });
                
                card.addEventListener('mouseenter', () => {
                    window.gsap.to(card.querySelector('img'), {
                        scale: 1.02,
                        duration: 0.4,
                        ease: 'power1.out'
                    });
                });
                
                card.addEventListener('mouseleave', () => {
                    window.gsap.to(card.querySelector('img'), {
                        scale: 1,
                        duration: 0.4,
                        ease: 'power1.out'
                    });
                });
            });

            const ideasImg = document.querySelector('.ideas__album-img img');
            if (ideasImg) {
                window.gsap.from(ideasImg, {
                    scale: 0.95,
                    opacity: 0.3,
                    y: 25,
                    duration: 0.8,
                    ease: 'power1.out',
                    scrollTrigger: {
                        trigger: ideasImg,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                });
                
                window.gsap.to(ideasImg, {
                    y: -15,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: '.ideas__album-img',
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1.5
                    }
                });
                
                window.gsap.to(ideasImg, {
                    rotation: 1,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: '.ideas__album-img',
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 3
                    }
                });
                
                ideasImg.addEventListener('mouseenter', () => {
                    window.gsap.to(ideasImg, {
                        scale: 1.02,
                        duration: 0.4,
                        ease: 'power1.out'
                    });
                });
                
                ideasImg.addEventListener('mouseleave', () => {
                    window.gsap.to(ideasImg, {
                        scale: 1,
                        duration: 0.4,
                        ease: 'power1.out'
                    });
                });
            }

            const ideasTextBlock = document.querySelector('.ideas__album-text');
            if (ideasTextBlock) {
                window.gsap.from(ideasTextBlock, {
                    x: 10,
                    opacity: 0.8,
                    duration: 0.8,
                    ease: 'power1.out',
                    scrollTrigger: {
                        trigger: ideasTextBlock,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                });
            }

            window.gsap.utils.toArray('.ideas__album-text li').forEach((li, index) => {
                window.gsap.from(li, {
                    x: -20,
                    opacity: 0.5,
                    duration: 0.6,
                    delay: index * 0.06,
                    ease: 'power1.out',
                    scrollTrigger: {
                        trigger: li,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                });
            });

            const seeAllBtn = document.querySelector('.ideas__seeall');
            if (seeAllBtn) {
                window.gsap.from(seeAllBtn, {
                    scale: 0.95,
                    opacity: 0.3,
                    duration: 0.8,
                    ease: 'power1.out',
                    scrollTrigger: {
                        trigger: seeAllBtn,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                });
                
                seeAllBtn.addEventListener('mouseenter', () => {
                    window.gsap.to(seeAllBtn.querySelector('svg'), {
                        rotation: 15,
                        scale: 1.05,
                        duration: 0.4,
                        ease: 'power1.out'
                    });
                });
                
                seeAllBtn.addEventListener('mouseleave', () => {
                    window.gsap.to(seeAllBtn.querySelector('svg'), {
                        rotation: 0,
                        scale: 1,
                        duration: 0.4,
                        ease: 'power1.out'
                    });
                });
            }

            window.gsap.utils.toArray('.items__type__card, .best__type__card').forEach(card => {
                window.gsap.from(card, {
                    scale: 0.97,
                    opacity: 0.5,
                    duration: 0.7,
                    ease: 'power1.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                });
            });
            
            window.gsap.utils.toArray('img:not(.cards-section img):not(.ideas__album-img img)').forEach(img => {
                window.gsap.from(img, {
                    scale: 0.97,
                    opacity: 0.5,
                    duration: 0.7,
                    ease: 'power1.out',
                    scrollTrigger: {
                        trigger: img,
                        start: 'top 90%',
                        toggleActions: 'play none none none'
                    }
                });
            });
        }
    };

    // ===============================================
    // WELCOME SLIDER CONTROLS
    // ===============================================
    const slides = document.querySelectorAll('.welcome__slide');
    const dots = document.querySelectorAll('.welcome__dot');
    const btnPrev = document.querySelector('.welcome__arrow--left');
    const btnNext = document.querySelector('.welcome__arrow--right');
    let current = 0;

    slides.forEach((slide, i) => {
        slide.style.opacity = i === 0 ? 1 : 0;
        slide.style.pointerEvents = i === 0 ? 'auto' : 'none';
    });

    function goToSlide(idx) {
        if (idx === current) return;
        animateSlideChange(slides, dots, current, idx);
        current = idx;
    }

    btnPrev.addEventListener('click', function () {
        let idx = (current - 1 + slides.length) % slides.length;
        goToSlide(idx);
    });
    btnNext.addEventListener('click', function () {
        let idx = (current + 1) % slides.length;
        goToSlide(idx);
    });
    dots.forEach((dot, i) => {
        dot.addEventListener('click', function () {
            goToSlide(i);
        });
    });

    // ===============================================
    // MOBILE NAVIGATION
    // ===============================================
    const burger = document.querySelector('.header__burger');
    const mobileNav = document.querySelector('.mobile-nav');
    const body = document.body;
    burger.addEventListener('click', function () {
        burger.classList.toggle('header__burger--active');
        mobileNav.classList.toggle('mobile-nav--open');
        body.classList.toggle('no-scroll', mobileNav.classList.contains('mobile-nav--open'));
    });

    document.addEventListener('click', function (e) {
        if (
            mobileNav.classList.contains('mobile-nav--open') &&
            !mobileNav.contains(e.target) &&
            !burger.contains(e.target)
        ) {
            burger.classList.remove('header__burger--active');
            mobileNav.classList.remove('mobile-nav--open');
            body.classList.remove('no-scroll');
        }
    });

    const mobileSolutionsLink = document.getElementById('mobile-solutions-link');
    const mobileSolutionsDropdown = document.getElementById('mobile-solutions-dropdown');
    const mobileSolutionsArrow = mobileSolutionsLink.querySelector('svg');
    let mobileDropdownOpen = false;
    mobileSolutionsLink.addEventListener('click', function (e) {
        e.preventDefault();
        mobileDropdownOpen = !mobileDropdownOpen;
        if (mobileDropdownOpen) {
            mobileSolutionsDropdown.style.display = 'block';
            mobileSolutionsDropdown.style.animation = 'mobileDropdownSlide 0.35s cubic-bezier(0.4,0,0.2,1)';
            mobileSolutionsDropdown.style.opacity = '1';
            mobileSolutionsDropdown.style.transform = 'translateY(0)';
        } else {
            mobileSolutionsDropdown.style.animation = 'mobileDropdownHide 0.35s cubic-bezier(0.4,0,0.2,1)';
            mobileSolutionsDropdown.style.opacity = '0';
            mobileSolutionsDropdown.style.transform = 'translateY(-16px)';
            setTimeout(() => {
                mobileSolutionsDropdown.style.display = 'none';
            }, 350);
        }
        mobileSolutionsArrow.style.transform = mobileDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)';
    });

    // ===============================================
    // SCROLL PROGRESS BAR
    // ===============================================
    const scrollBar = document.createElement('div');
    scrollBar.className = 'scroll-progress-bar';
    document.body.appendChild(scrollBar);
    function updateScrollBar() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        scrollBar.style.width = percent + '%';
    }
    function onScroll() {
        updateScrollBar();
        requestAnimationFrame(onScroll);
    }
    requestAnimationFrame(onScroll);

    // ===============================================
    // FOOTER ACCORDION
    // ===============================================
    function initFooterAccordion() {
        const footerTitles = document.querySelectorAll('.footer__title');
        
        footerTitles.forEach(title => {
            const parentColumn = title.closest('.footer__column:not(.footer__column--brand)');
            if (!parentColumn) return;
            
            const list = parentColumn.querySelector('.footer__list');
            if (!list) return;
            
            title.addEventListener('click', function() {
                const isActive = list.classList.contains('active');
                
                document.querySelectorAll('.footer__list.active').forEach(activeList => {
                    activeList.classList.remove('active');
                });
                document.querySelectorAll('.footer__title.active').forEach(activeTitle => {
                    activeTitle.classList.remove('active');
                });
                
                if (!isActive) {
                    list.classList.add('active');
                    title.classList.add('active');
                }
            });
        });
    }
    
    initFooterAccordion();
});

// ===============================================
// DYNAMIC STYLES
// ===============================================
const animStyle = document.createElement('style');
animStyle.innerHTML = `
.scroll-progress-bar {
    position: fixed;
    top: 5px;
    left: 0;
    height: 4px;
    background: linear-gradient(90deg, #e3e3e3 0%, #f5f5f7 40%, #b2b2b2 100%);
    box-shadow: 0 2px 12px 0 rgba(0,0,0,0.10), 0 1.5px 8px 0 rgba(0,0,0,0.08);
    z-index: 9999;
    width: 0;
    transition: width 0.1s cubic-bezier(.4,0,.2,1);
    border-radius: 4px 16px 16px 4px;
    opacity: 0.95;
    backdrop-filter: blur(2px);
}
.chip--active {
    background: #fff;
    color: #08090D;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,0.10);
    font-weight: 600;
    border: 1.5px solid #08090D;
    transition: all 0.2s;
    z-index: 1;
}
.chip--dim {
    opacity: 0.45;
    filter: grayscale(0.7);
    transition: opacity 0.2s, filter 0.2s;
}
`;
document.head.appendChild(animStyle);


document.addEventListener('DOMContentLoaded', () => {
    const languageSkills = document.querySelectorAll('.language-skill');

    languageSkills.forEach(skill => {
        const level = parseInt(skill.getAttribute('data-level'), 10);
        const progressBar = skill.querySelector('.progress-bar');

        if (level >= 65) {
            progressBar.classList.add('green');
        } else if (level >= 40) {
            progressBar.classList.add('orange');
        } else {
            progressBar.classList.add('red');
        }
    });

    // Votre code existant
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const scrollToTopBtn = document.querySelector('#scroll-to-top');

    if (burger && nav) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            if (window.innerWidth <= 768) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
            }
        });
    });

    const downloadButton = document.querySelector('.cta-button[download]');
    if (downloadButton) {
        downloadButton.addEventListener('click', () => {
            alert('Merci de télécharger mon CV!');
        });
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const scrollElements = document.querySelectorAll('.scroll-animation');

    const elementInView = (el, percentageScroll = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= 
            ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll / 100))
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('scrolled');
    };

    const hideScrollElement = (element) => {
        element.classList.remove('scrolled');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 100)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });

    handleScrollAnimation();
});
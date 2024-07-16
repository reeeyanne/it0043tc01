document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    const footer = document.querySelector('.footer');
    const toggleButton = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    
    toggleButton.addEventListener('click', () => {
        menu.classList.toggle('show');
    });

   
    window.addEventListener('scroll', function () {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });

        if (window.scrollY + window.innerHeight >= document.body.offsetHeight - 100) {
            footer.style.transform = 'translateY(0)';
        } else {
            footer.style.transform = 'translateY(100%)';
        }
    });
});

function showAnswer(id) {
    const inputElement = document.getElementById(id);
    const answerElement = document.getElementById(id + '-answer');

    answerElement.style.display = 'block';
}

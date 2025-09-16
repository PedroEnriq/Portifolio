document.addEventListener('DOMContentLoaded', () => {
    // Navegação suave ao clicar nos links do menu
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Previne o comportamento padrão do link

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth' // Rola suavemente até a seção
            });
        });
    });

    //Animação simples ao rolar
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null, // Observa o viewport
        threshold: 0.2 // Quando 20% da seção estiver visível
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                
                entry.target.classList.add('fade-in');
            } else {
                entry.target.style.opacity = 0;
                entry.target.style.transform = 'translateY(20px)';
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = 0; // Inicia com opacidade 0
        section.style.transform = 'translateY(20px)'; // Pequeno deslocamento
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        sectionObserver.observe(section);
    });

    // Funcionalidade de menu para mobile
    const menuBtn = document.querySelector('.showmenu-btn');
    const navMenu = document.querySelector('.nav-menu');

    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuBtn.classList.toggle('active');
    });

});
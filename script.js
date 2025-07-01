
document.getElementById('menuToggle').onclick = () => {
    document.getElementById('navLinks').classList.toggle('open');
};


const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 0.1,
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));
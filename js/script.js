// Menú móvil
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Formulario de contacto (validación básica, sin backend aún)
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

if (contactForm && formNote) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      formNote.textContent = 'Por favor completa los campos obligatorios.';
      formNote.style.color = '#B8495A';
      return;
    }

    formNote.textContent = '¡Gracias! Tu mensaje fue registrado. Te contactaremos pronto.';
    formNote.style.color = '#2F6F6B';
    contactForm.reset();
  });
}

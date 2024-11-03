document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.categories a');

  navLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      navLinks.forEach(link => link.classList.remove('active'));
      event.target.classList.add('active');
      const sectionId = event.target.getAttribute('href');
      document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    });
  });
});

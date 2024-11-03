document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.categories a');

  navLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      // Видаляємо клас 'active' з усіх посилань
      navLinks.forEach(link => link.classList.remove('active'));

      // Додаємо клас 'active' до натиснутого посилання
      event.target.classList.add('active');

      // Отримуємо ID секції, до якої потрібно перейти
      const sectionId = event.target.getAttribute('href');

      // Переходимо до секції
      document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    });
  });
});

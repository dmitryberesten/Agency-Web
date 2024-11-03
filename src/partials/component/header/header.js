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

document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-link');
  const activeLink = document.querySelector('.nav-link.active');
  let currentActiveLink = activeLink;

  const ball = document.createElement('span');
  ball.classList.add('ball');
  document.querySelector('.categories').appendChild(ball);

  moveBallTo(currentActiveLink);

  navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      moveBallTo(link);
    });

    link.addEventListener('mouseleave', () => {
      moveBallTo(currentActiveLink);
    });

    link.addEventListener('click', () => {
      currentActiveLink = link;
      moveBallTo(currentActiveLink);
    });
  });

  function moveBallTo(targetLink) {
    const targetRect = targetLink.getBoundingClientRect();
    const containerRect = targetLink.parentElement.getBoundingClientRect();
    const topPosition =
      targetRect.top - containerRect.top + targetRect.height / 16;
    const leftPosition = targetRect.left - containerRect.left - 10;
    ball.style.top = `${topPosition}px`;
    ball.style.left = `${leftPosition}px`;
  }
});

const btnBurgerMenu = document.querySelector('.menu__btn');
const backdrop = document.querySelector('.backdrop');
const mobileVersion = document.querySelector('.mobile-version');

function handleResize() {
  const screenWidth = window.innerWidth;

  if (backdrop.getAttribute('class') == 'backdrop active') {
    if (screenWidth > 1024) {
      mobileVersion.setAttribute('class', 'mobile-version');
      backdrop.setAttribute('class', 'backdrop');
      btnBurgerMenu.setAttribute('class', 'menu__btn open');
    } else {
      return;
    }
  } else {
    return;
  }
}

handleResize();

window.addEventListener('resize', handleResize);

document.addEventListener('DOMContentLoaded', () => {
  AOS.init();
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();

      navLinks.forEach(link => link.classList.remove('active'));

      event.target.classList.add('active');

      const sectionId = event.target
        .getAttribute('href')
        .replace(' mobile', '');

      const sectionElement = document.getElementById(sectionId);

      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
        backdrop.setAttribute('class', 'backdrop');
        mobileVersion.setAttribute('class', 'backdrop');
        btnBurgerMenu.setAttribute('class', 'menu__btn open');
      }
    });
  });
});

btnBurgerMenu.addEventListener('click', () => {
  if (btnBurgerMenu.getAttribute('class') == 'menu__btn open') {
    btnBurgerMenu.setAttribute('class', 'menu__btn close');
    backdrop.setAttribute('class', 'backdrop active');
    mobileVersion.setAttribute('class', 'mobile-version open');
  } else if (btnBurgerMenu.getAttribute('class') == 'menu__btn close') {
    btnBurgerMenu.setAttribute('class', 'menu__btn open');
    backdrop.setAttribute('class', 'backdrop');
    mobileVersion.setAttribute('class', 'mobile-version');
  }
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

  window.addEventListener('resize', () => {
    if (currentActiveLink) {
      moveBallTo(currentActiveLink);
    }
  });

  function moveBallTo(targetLink) {
    const targetRect = targetLink.getBoundingClientRect();
    const containerRect = document
      .querySelector('.categories')
      .getBoundingClientRect();
    const topPosition =
      targetRect.top -
      containerRect.top +
      targetRect.height / 2 -
      ball.offsetHeight / 2;
    const leftPosition = targetRect.left - containerRect.left;

    if (
      leftPosition >= 0 &&
      leftPosition + ball.offsetWidth <= containerRect.width
    ) {
      ball.style.top = `${topPosition}px`;
      ball.style.left = `${leftPosition - 10}px`;
    }
  }
});

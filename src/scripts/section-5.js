import { teamMembers } from '../partials/component/section-5/section-5-members.js';

// Вибір контейнера для карток
const container = document.querySelector('#team-members-container');

// Функція для створення однієї картки
function createCard(member) {
  // Створюємо елементи
  const card = document.createElement('div');
  card.classList.add('team-member-card');

  const img = document.createElement('img');
  img.src = member.photo;
  img.alt = `${member.name} photo`;

  const name = document.createElement('h3');
  name.textContent = member.name;

  const role = document.createElement('p');
  role.textContent = member.role;

  const githubLink = document.createElement('a');
  githubLink.href = member.githubProfile;
  githubLink.target = '_blank';
  githubLink.textContent = 'GitHub Profile';

  const skills = document.createElement('ul');

  // Додаємо навички
  Object.keys(member.skillsResponsibilities).forEach(key => {
    const category = member.skillsResponsibilities[key];
    category.tasks.forEach(task => {
      const skillItem = document.createElement('li');
      skillItem.textContent = task;
      skills.appendChild(skillItem);
    });
  });

  // Додаємо все до картки
  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(role);
  card.appendChild(githubLink);
  card.appendChild(skills);

  return card;
}

// Генеруємо всі картки
teamMembers.forEach(member => {
  const card = createCard(member);
  container.appendChild(card);
});

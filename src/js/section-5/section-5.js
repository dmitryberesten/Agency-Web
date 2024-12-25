import { teamMembers } from './section-5-members.js';

const container = document.querySelector('#team-members-container');

function createCard(member) {
  const card = document.createElement('div');
  card.classList.add('team-member-card-active');

  const img = document.createElement('img');
  img.src = member.photo;
  img.alt = `${member.name} photo`;
  img.classList.add('img-card-active');

  // Name
  const name = document.createElement('h1');
  name.textContent = 'Name: ';

  const nameSpan = document.createElement('span');
  nameSpan.textContent = member.name;
  nameSpan.id = 'section-5-name';
  nameSpan.classList.add('name-card-active');

  name.appendChild(nameSpan);

  // Role
  const role = document.createElement('h1');
  role.textContent = 'Role: ';

  const roleSpan = document.createElement('span');
  roleSpan.textContent = member.role;
  roleSpan.id = 'section-5-role';
  roleSpan.classList.add('role-card-active');

  role.appendChild(roleSpan);

  // GitHub
  const github = document.createElement('h1');
  github.textContent = 'GitHub Profile: ';

  const githubUrl = member.githubProfile;
  const username = githubUrl.split('/').pop();

  const usernameSpan = document.createElement('a');
  usernameSpan.textContent = `@${username}`;
  usernameSpan.href = githubUrl;
  usernameSpan.target = '_blank';
  usernameSpan.id = 'section-5-github';
  github.appendChild(usernameSpan);

  const divLine = document.createElement('div');
  divLine.id = 'divLine';

  const skillsResponsibilitiesText = document.createElement('h1');
  skillsResponsibilitiesText.textContent = 'Skills & Responsibilities:';

  const skills = document.createElement('ul');
  skills.id = 'section-5-skills';

  const jobRole = member.jobs.split(',')[0]?.trim();
  if (jobRole && member.skillsResponsibilities.general) {
    const jobTitle = document.createElement('h3');
    jobTitle.id = 'jobTitle';
    jobTitle.textContent = jobRole;
    skills.appendChild(jobTitle);

    const generalTasks = member.skillsResponsibilities.general.tasks;
    if (generalTasks && generalTasks.length > 0) {
      const generalTasksList = document.createElement('ul');
      generalTasksList.id = 'generalTasksList';
      generalTasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.textContent = `● ${task}`;
        taskItem.className = 'taskItem';
        generalTasksList.appendChild(taskItem);
      });
      skills.appendChild(generalTasksList);
    }
  }

  const secondaryRole = member.role.split(',')[1]?.trim() || jobRole;
  if (secondaryRole && member.skillsResponsibilities.frontendDevelopment) {
    const secondaryTitle = document.createElement('h3');
    secondaryTitle.id = 'secondaryTitle';
    secondaryTitle.textContent = secondaryRole;
    skills.appendChild(secondaryTitle);

    const frontendTasks =
      member.skillsResponsibilities.frontendDevelopment.tasks;
    if (frontendTasks && frontendTasks.length > 0) {
      const frontendTasksList = document.createElement('ul');
      frontendTasksList.id = 'frontendTasksList';
      frontendTasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.className = 'taskItem';
        taskItem.textContent = `● ${task}`;
        frontendTasksList.appendChild(taskItem);
      });
      skills.appendChild(frontendTasksList);
    }
  }

  card.appendChild(img);
  card.appendChild(roleSpan);
  card.appendChild(nameSpan);

  card.addEventListener('click', () => {
    if (card.classList.contains('team-member-card')) {
      // No active, apply flip animation on click
      card.classList.remove('team-member-card');
      card.classList.add('team-member-card-active');
      card.classList.add('flip-animation');  // Add animation class

      img.classList.remove('img-card');
      img.classList.add('img-card-active');

      name.classList.remove('name-card');
      name.classList.add('name-card-active');

      role.classList.remove('role-card');
      role.classList.add('role-card-active');

      card.innerHTML = '';
      card.appendChild(img);
      card.appendChild(roleSpan);
      card.appendChild(nameSpan);
    } else {
      // Active, remove animation on reset
      card.classList.remove('team-member-card-active');
      card.classList.add('team-member-card');
      card.classList.remove('flip-animation');  // Remove animation class

      img.classList.remove('img-card-active');
      img.classList.add('img-card');

      name.classList.remove('name-card-active');
      name.classList.add('name-card');

      role.classList.remove('role-card-active');
      role.classList.add('role-card');

      name.appendChild(nameSpan);
      role.appendChild(roleSpan);

      card.innerHTML = '';
      card.appendChild(name);
      card.appendChild(role);
      card.appendChild(github);
      card.appendChild(divLine);
      card.appendChild(skillsResponsibilitiesText);
      card.appendChild(img);
      card.appendChild(skills);
    }
  });


  return card;
}

teamMembers.forEach(member => {
  const card = createCard(member);
  container.appendChild(card);
});

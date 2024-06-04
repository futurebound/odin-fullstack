'use strict';

const portfolio = document.querySelector('.portfolio');

for (let i = 0; i < 6; i++) {
  let card = document.createElement('div');
  card.classList.add('card');

  let screenshot = document.createElement('img');
  screenshot.src = 'https://placehold.co/300x200';
  screenshot.alt = 'project screenshot';

  let cardDescription = document.createElement('div');
  cardDescription.classList.add('card-description');

  let descriptionText = document.createElement('p');
  descriptionText.textContent =
    'Short description of the project. Just a couple sentences will do.';

  let projectName = document.createElement('div');
  projectName.classList.add('project-name');
  projectName.textContent = 'Project name';
  let projectIcons = document.createElement('div');
  projectIcons.classList.add('project-icons');
  let githubIcon = document.createElement('i');
  githubIcon.classList.add('devicon-github-original', 'colored');
  let shareIcon = document.createElement('i');
  shareIcon.classList.add('devicon-github-original', 'colored');
  projectIcons.appendChild(githubIcon);
  projectIcons.appendChild(shareIcon);
  projectName.appendChild(projectIcons);

  cardDescription.appendChild(projectName);
  cardDescription.appendChild(descriptionText);

  card.appendChild(screenshot);
  card.appendChild(cardDescription);

  portfolio.appendChild(card);
}

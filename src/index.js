import './sass/main.scss';
import menuTemplateCards from './templates/menu-cards.hbs';
import menuCards from '../src/menu.json';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  menuRender: document.querySelector('.js-menu'),
  btnChangeTheme: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
};

refs.menuRender.insertAdjacentHTML('afterbegin', makeMenuCards(menuCards));
refs.btnChangeTheme.addEventListener('change', onInputChangeTheme);
refs.body.classList.add(Theme.LIGHT);

function makeMenuCards(cards) {
  return cards.map(menuTemplateCards).join('');
}

if (localStorage.getItem('theme') === Theme.DARK) {
  refs.body.classList.add(Theme.DARK);
  localStorage.setItem('theme', Theme.DARK);
  refs.btnChangeTheme.checked = true;
}
function onInputChangeTheme(event) {
  if (refs.btnChangeTheme.checked) {
    refs.body.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    refs.body.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

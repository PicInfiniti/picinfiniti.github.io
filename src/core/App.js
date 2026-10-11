import { closeNav, openNav, startTime, updateDate } from '@/assets/js/utils.js';

export default class App {
  constructor(env) {
    this.env = env;
  }

  init() {
    startTime();
    updateDate();

    document.querySelectorAll('.closebtn').forEach((button) => {
      button.addEventListener('click', () => closeNav());
    });

    document
      .querySelector('.content .header .logo')
      ?.addEventListener('click', () => openNav('mySidenav'));
  }
}

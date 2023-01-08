import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';
import images from './modules/images';

window.addEventListener('DOMContentLoaded', () => {
  ('use strict');

  // Стейт для калькулятора
  let modalState = {};
  // Калькулятор
  changeModalState(modalState);
  // ==========================

  modals();

  // ==========================

  tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
  tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');

  // Табы в модалке-калькуляторе
  tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');

  // ==========================

  forms(modalState);

  // ==========================

  // Таймер
  let dedline = '2023-07-01';
  timer('.container1', dedline);

  // ==========================

  // Увеличиваем изображение по клику
  images();
});

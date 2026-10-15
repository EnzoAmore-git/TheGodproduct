/**
 * navigation.js — Навигация и мобильное меню (burger).
 *
 * На desktop .nav-links всегда видны (см. header.css).
 * На mobile ссылки скрыты и раскрываются кнопкой .nav-burger
 * (атрибут data-nav-toggle, цель — data-nav-menu).
 */
import { qs, qsa, on } from './utils.js';

/** Совпадает с брейкпоинтом в css/components/header.css (max-width: 700px) */
const MOBILE_BREAKPOINT = 700;

export function initNavigation() {
  const nav = qs('nav');
  const toggle = qs('[data-nav-toggle]');
  const menu = qs('[data-nav-menu]');

  // Если разметка меню отсутствует — тихо выходим, не ломая страницу
  if (!nav || !toggle || !menu) return;

  const isOpen = () => nav.classList.contains('is-open');

  const open = () => {
    nav.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Закрыть меню');
  };

  const close = () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Открыть меню');
  };

  const toggleMenu = () => (isOpen() ? close() : open());

  // Кнопка-бургер
  on(toggle, 'click', (event) => {
    event.stopPropagation();
    toggleMenu();
  });

  // Закрытие после клика по любому пункту меню
  qsa('a', menu).forEach((link) => on(link, 'click', close));

  // Закрытие по Escape (с возвратом фокуса на кнопку)
  on(document, 'keydown', (event) => {
    if (event.key === 'Escape' && isOpen()) {
      close();
      toggle.focus();
    }
  });

  // Закрытие по клику вне навигации
  on(document, 'click', (event) => {
    if (isOpen() && !nav.contains(event.target)) close();
  });

  // Возврат к десктопной ширине — принудительно закрываем
  on(window, 'resize', () => {
    if (window.innerWidth > MOBILE_BREAKPOINT && isOpen()) close();
  });
}

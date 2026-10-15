/**
 * utils.js — Небольшие вспомогательные функции.
 * Используются остальными модулями вместо прямых обращений к DOM.
 */

/** querySelector c поддержкой корня */
export const qs = (selector, root = document) => root.querySelector(selector);

/** querySelectorAll, возвращающий обычный массив (удобно для .forEach) */
export const qsa = (selector, root = document) =>
  Array.from(root.querySelectorAll(selector));

/** Безопасное добавление обработчика события (не падает, если элемент не найден) */
export const on = (target, event, handler) => {
  if (target) target.addEventListener(event, handler);
};

/** Пользователь просил систему «уменьшить движение» */
export const prefersReducedMotion = () =>
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Поддерживает ли браузер IntersectionObserver */
export const supportsIntersectionObserver = () =>
  typeof IntersectionObserver !== 'undefined';

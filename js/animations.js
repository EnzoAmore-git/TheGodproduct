/**
 * animations.js — Scroll-анимации на IntersectionObserver.
 *
 * Логика перенесена из оригинального монолита: карточки «поднимаются»
 * (keyframes fadeUp) при попадании в область видимости, с небольшой
 * задержкой между соседними элементами.
 */
import { qsa, prefersReducedMotion, supportsIntersectionObserver } from './utils.js';

/** Элементы, которые появляются при скролле */
const REVEAL_SELECTOR =
  '.stat-card, .service-card, .case-card, .skill-group, .about-block';

export function initScrollAnimations() {
  // Если анимации не поддерживаются или пользователь просил уменьшить
  // движение — ничего не делаем: контент остаётся видимым (без animation).
  if (!supportsIntersectionObserver() || prefersReducedMotion()) return;

  const cards = qsa(REVEAL_SELECTOR);
  if (!cards.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry, index) => {
      if (!entry.isIntersecting) return;
      // Небольшой каскад: каждый следующий элемент в кадре чуть позже
      entry.target.style.animation = `fadeUp 0.5s ${index * 0.05}s ease both`;
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.1 });

  cards.forEach((card) => observer.observe(card));
}

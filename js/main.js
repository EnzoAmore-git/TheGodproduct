/**
 * main.js — Точка входа.
 * Подключает модули по ответственности и инициализирует их после
 * готовности DOM. Ошибка в одном модуле не должна ломать остальные.
 */
import './analytics.js';            // Яндекс.Метрика (побочный эффект)
import { initNavigation } from './navigation.js';
import { initScrollAnimations } from './animations.js';
import { initForms } from './forms.js';

function init() {
  try {
    initNavigation();
    initScrollAnimations();
    initForms();
  } catch (error) {
    console.error('[thegodproduct] Ошибка инициализации:', error);
  }
}

// Скрипт подключён как module (defer), но подстрахуемся на случай
// синхронной вставки: инициализируемся после готовности DOM.
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

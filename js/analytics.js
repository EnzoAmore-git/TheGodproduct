/**
 * analytics.js — Яндекс.Метрика (счётчик 109188921).
 *
 * Перенесено из инлайн-скрипта оригинального монолита без изменений логики.
 * Подключается первым в main.js (side-effect import).
 */

/* Инициализация очереди счётчика и подгрузка tag.js */
(function (m, e, t, r, i, k, a) {
  m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments); };
  m[i].l = 1 * new Date();
  for (var j = 0; j < document.scripts.length; j++) {
    if (document.scripts[j].src === r) { return; }
  }
  k = e.createElement(t);
  a = e.getElementsByTagName(t)[0];
  k.async = 1;
  k.src = r;
  a.parentNode.insertBefore(k, a);
})(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=109188921', 'ym');

/* Конфигурация счётчика */
if (window.ym) {
  window.ym(109188921, 'init', {
    ssr: true,
    webvisor: true,
    clickmap: true,
    ecommerce: 'dataLayer',
    referrer: document.referrer,
    url: location.href,
    accurateTrackBounce: true,
    trackLinks: true,
  });
}

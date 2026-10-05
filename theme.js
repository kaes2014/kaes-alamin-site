/* Only local display preferences are stored. No tracking or network requests. */
(() => {
  let theme;
  try { theme = localStorage.getItem('kaes-theme'); } catch (_) {}
  if (!['light', 'dark'].includes(theme)) {
    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  document.documentElement.dataset.theme = theme;
})();

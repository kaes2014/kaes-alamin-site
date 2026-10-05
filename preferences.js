/* Apply only the appearance chosen in this browser tab. No cookies or tracking. */
(() => {
  try {
    const theme = sessionStorage.getItem('maison-kaes-theme');
    if (theme === 'dark' || theme === 'light') document.documentElement.dataset.theme = theme;
  } catch (_) { /* The page also works when browser storage is disabled. */ }
})();

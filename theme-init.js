/* Apply the stored preference before the first paint, even without React. */
(() => {
  let theme = "dark";
  try {
    if (localStorage.getItem("arena-theme") === "light") theme = "light";
  } catch {
    // Storage can be unavailable in restricted browser sessions.
  }
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = theme === "light" ? "#fafaf7" : "#101110";
})();

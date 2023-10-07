const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)");

setTheme();

function setTheme() {
  const theme = isSystemDark.matches ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", theme);
}

isSystemDark.addEventListener("change", () => setTheme());

const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)");

function setTheme() {
  document.documentElement.setAttribute(
    "data-theme",
    isSystemDark.matches ? "dark" : "light",
  );
}

setTheme();

isSystemDark.addEventListener("change", () => setTheme());

console.log("JS is connected! 🚀");

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  const isDark = document.body.dataset.theme === "dark";

  if (isDark) {
    delete document.body.dataset.theme;
    themeToggle.textContent = "Dark Mode";
  } else {
    document.body.dataset.theme = "dark";
    themeToggle.textContent = "Light Mode";
  }
});
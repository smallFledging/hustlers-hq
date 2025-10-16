// --- load header for every page

window.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.querySelector(".header__container");
  if (headerContainer) {
    fetch("./header.html").then((response) =>
      response.text().then((data) => (headerContainer.innerHTML = data))
    );
  }
});

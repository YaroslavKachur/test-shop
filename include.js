function loadComponent(id, url) {
    fetch(url)
      .then(response => response.text())
      .then(html => {
        document.getElementById(id).innerHTML = html;
      });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    loadComponent("header", "./components/header.html");
    loadComponent("footer", "/components/footer.html");
  });
  
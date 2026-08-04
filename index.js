

// animacion

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// menu

document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu");
  const icon = document.getElementById("icon");
  const overlay = document.getElementById("overlay");

  function openMenu() {
    menu.classList.add("active");
    overlay.classList.add("active");
    icon.innerHTML = "✖";
  }

  function closeMenu() {
    menu.classList.remove("active");
    overlay.classList.remove("active");
    icon.innerHTML = "☰";
  }

  icon.addEventListener("click", () => {
    if (menu.classList.contains("active")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  overlay.addEventListener("click", closeMenu);
});

// faq
document.addEventListener("DOMContentLoaded", () => {

  const items = document.querySelectorAll(".faq-item");

  items.forEach(item => {
    item.addEventListener("click", () => {

      const isActive = item.classList.contains("active");

      // cerrar todos
      items.forEach(i => {
        i.classList.remove("active");
        i.querySelector(".answer").style.maxHeight = null;
      });

      // abrir el actual si estaba cerrado
      if (!isActive) {
        item.classList.add("active");
        const answer = item.querySelector(".answer");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }

    });
  });

});

// lenguaje boton

const btn = document.getElementById("languageBtn");
const menu = document.getElementById("languageMenu");
const arrow = document.getElementById("arrow");

btn.addEventListener("click", () => {

    menu.classList.toggle("active");

    

});

document.addEventListener("click", (e) => {
    
    if (!document.querySelector(".language-selector").contains(e.target)) {
        
        menu.classList.remove("active");

    }

});
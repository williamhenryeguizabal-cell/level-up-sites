
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


function toggleMenu() {
  const menu = document.getElementById("menu");
  const icon = document.getElementById("icon");
  const overlay = document.getElementById("overlay");

  menu.classList.toggle("active");
  overlay.classList.toggle("active");

  if (menu.classList.contains("active")) {
    icon.innerHTML = "✖";
  } else {
    icon.innerHTML = "☰";
  }
}

function closeMenu() {
  const menu = document.getElementById("menu");
  const icon = document.getElementById("icon");
  const overlay = document.getElementById("overlay");

  menu.classList.remove("active");
  overlay.classList.remove("active");
  icon.innerHTML = "☰";
}

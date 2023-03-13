
const profileImage = document.querySelector('.profile-picture img');

const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');

burgerMenu.addEventListener('click', () => {
  menu.classList.toggle('active');
});


// afficher ou masquer le bouton en fonction de la position de l'utilisateur
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// faire remonter la page en cliquant sur le bouton
document.getElementById("myBtn").addEventListener("click", function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});




profileImage.addEventListener('mouseover', () => {
  profileImage.style.transform = 'scale(1.2)';
});

profileImage.addEventListener('mouseout', () => {
  profileImage.style.transform = 'scale(1)';
});

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const target = event.target.getAttribute('href');
    const section = document.querySelector(target);
    const yOffset = -80;
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
  });
});


// Charger la bibliothèque JavaScript de Font Awesome
window.onload = function() {
  var script = document.createElement("script");
  script.src = "https://kit.fontawesome.com/xxxxxxxxxx.js"; // Remplacez "xxxxxxxxxx" par votre clé API Font Awesome
  script.type = "text/javascript";
  document.head.appendChild(script);
}

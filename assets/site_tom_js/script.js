
const profileImage = document.querySelector('.profile-picture img');


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



// Ajout du script pour gérer le formulaire de contact

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Merci ${name}! Votre message a été envoyé.`);
    } else {
        alert('Veuillez remplir tous les champs.');
    }
});

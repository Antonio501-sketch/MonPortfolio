document.addEventListener('DOMContentLoaded', function() {
    // 1. Mettre à jour l'année dans le pied de page
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }

    // 2. Gestion simple du formulaire de contact (Simulation)
    const form = document.getElementById('contact-form');
    const messageElement = document.getElementById('form-message');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); 
            
            // Ce message est une simulation. En production, vous devriez connecter ce formulaire à un service backend.
            messageElement.textContent = "Message envoyé avec succès ! Je vous répondrai bientôt. (Ceci est une simulation)";
            messageElement.className = "success-message"; // Style à définir en CSS si vous voulez une couleur différente
            messageElement.classList.remove('hidden');

            form.reset(); 
            
            // Masquer le message après 5 secondes
            setTimeout(() => {
                messageElement.classList.add('hidden');
            }, 5000);
        });
    }

    // 3. Effet de navigation fluide (Smooth Scroll)
    // Rend le défilement vers les ancres (#) plus agréable
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});
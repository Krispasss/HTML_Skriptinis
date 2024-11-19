// Surandame mygtuką ir pridėtą funkciją
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Funkcija perjungti temą
themeToggleButton.addEventListener('click', () => {
    // Perjungti 'dark-theme' klasę
    body.classList.toggle('dark-theme');

    // Keisti mygtuko tekstą
    if (body.classList.contains('dark-theme')) {
        themeToggleButton.textContent = 'Šviesus režimas';
    } else {
        themeToggleButton.textContent = 'Tamsus režimas';
    }
});

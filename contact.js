// Gauk temos perjungimo mygtuką
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Patikrink, ar naršyklėje jau yra išsaugota tema
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    updateIcon(savedTheme); // Atnaujinti ikonos išvaizdą pagal temą
} else {
    body.classList.add('light-theme'); // Numatytoji tema
    updateIcon('light-theme');
}

// Įvykis paspaudus mygtuką
themeToggle.addEventListener('click', () => {
    // Perjungti tarp šviesios ir tamsios temos
    if (body.classList.contains('light-theme')) {
        body.classList.replace('light-theme', 'dark-theme');
        localStorage.setItem('theme', 'dark-theme'); // Išsaugoti temą
        updateIcon('dark-theme');
    } else {
        body.classList.replace('dark-theme', 'light-theme');
        localStorage.setItem('theme', 'light-theme'); // Išsaugoti temą
        updateIcon('light-theme');
    }
});

// Funkcija atnaujinti ikonos dizainą
function updateIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark-theme') {
        icon.classList.replace('fa-sun', 'fa-moon'); // Tamsiai temai rodyti mėnulį
    } else {
        icon.classList.replace('fa-moon', 'fa-sun'); // Šviesiai temai rodyti saulę
    }
}

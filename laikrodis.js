function updateClock() {
    const currentTime = new Date(); // Gauti dabartinį laiką
    const hours = currentTime.getHours().toString().padStart(2, '0'); // Valandos
    const minutes = currentTime.getMinutes().toString().padStart(2, '0'); // Minutės
    const seconds = currentTime.getSeconds().toString().padStart(2, '0'); // Sekundės

    const timeString = `${hours}:${minutes}:${seconds}`; // Laiko formatavimas
    document.getElementById('time').textContent = timeString; // Atnaujinti laiką HTML
}

// Kiekvieną sekundę atnaujinti laiką
setInterval(updateClock, 1000);

// Pirmą kartą iškviečiame funkciją, kad laikas pasirodytų iš karto
updateClock();

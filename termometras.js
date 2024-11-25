document.addEventListener("DOMContentLoaded", () => {
    const thermometer = document.querySelector(".thermometer");
    const temperatureDisplay = thermometer.querySelector(".temperature");
    const pressureDisplay = thermometer.querySelector(".pressure");
    const humidityDisplay = thermometer.querySelector(".humidity");
    const closeButton = thermometer.querySelector(".close-button");
    let isDisabled = false; // Stebėsime, ar termometras gali būti rodomas

    // Fiktyvus duomenys (pakeisi, kai turėsi API)
    const mockTemperature = 20;
    const mockPressure = 1015; // Oro slėgis hPa
    const mockHumidity = 60;  // Drėgmė %

    // Atvaizduojame pradinę temperatūrą, slėgį ir drėgmę
    temperatureDisplay.textContent = `${mockTemperature}°C`;
    pressureDisplay.textContent = `Slėgis: ${mockPressure} hPa`;
    humidityDisplay.textContent = `Drėgmė: ${mockHumidity}%`;

    // Funkcija temperatūros, slėgio ir drėgmės atnaujinimui (pakeisti į API užklausą)
    async function updateWeather(lat, lon) {
        try {
            const apiKey = "eae2bd4fef581c1d37a2cec096510a21";
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);
            const data = await response.json();

            const temp = Math.round(data.main.temp);
            const pressure = data.main.pressure;
            const humidity = data.main.humidity;

            temperatureDisplay.textContent = `${temp}°C`;
            pressureDisplay.textContent = `Slėgis: ${pressure} hPa`;
            humidityDisplay.textContent = `Drėgmė: ${humidity}%`;
        } catch (error) {
            console.error("Klaida gaunant oro duomenis:", error);
            temperatureDisplay.textContent = "Klaida";
            pressureDisplay.textContent = "Slėgis: -- hPa";
            humidityDisplay.textContent = "Drėgmė: --%";
        }
    }

    // Rodo termometro langą
    function showThermometer() {
        if (!isDisabled) {
            thermometer.classList.add("show");
            // Vietovės nustatymas (pvz., Vilnius)
            const lat = 54.6872;
            const lon = 25.2797;
            updateWeather(lat, lon);
        }
    }

    // Slepiame termometrą
    function hideThermometer() {
        thermometer.classList.remove("show");
        isDisabled = true; // Termometras tampa neaktyvus
        setTimeout(() => {
            isDisabled = false; // Po 3 sekundžių vėl aktyvuojame
        }, 3000);
    }

    // Atidarome termometrą užvedus pelę ant krašto
    document.addEventListener("mousemove", (event) => {
        if (event.clientX > window.innerWidth - 10) {
            showThermometer();
        }
    });

    // Uždarymo mygtuko veikimas
    closeButton.addEventListener("click", hideThermometer);
});

function submitForm() {
    // Išvalome ankstesnes klaidas
    document.getElementById('errorMessages').innerHTML = '';

    // Surenkame duomenis iš formos
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    // Požymiai
    const attributes = [
        parseInt(document.getElementById('attribute1').value),
        parseInt(document.getElementById('attribute2').value),
        parseInt(document.getElementById('attribute3').value),
        parseInt(document.getElementById('attribute4').value),
        parseInt(document.getElementById('attribute5').value)
    ];

    // Klaidos tikrinimai
    let errorMessages = [];
    if (!validateEmail(email)) errorMessages.push("Neteisingas el. pašto adresas.");
    if (!validatePhone(phone)) errorMessages.push("Neteisingas telefono numeris.");
    if (!validateAddress(address)) errorMessages.push("Adresas turi būti ne trumpesnis kaip 5 simboliai.");

    // Jei yra klaidų, išvedame pranešimus
    if (errorMessages.length > 0) {
        document.getElementById('errorMessages').innerHTML = errorMessages.join('<br>');
        return; // Jei yra klaidų, stabdome formos siuntimą
    }

    // Sukuriame JavaScript objektą su gautais duomenimis
    const userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        address: address,
        attributes: attributes
    };

    // Apskaičiuojame požymių vidurkį
    const average = attributes.reduce((sum, value) => sum + value, 0) / attributes.length;

    // Atvaizduojame duomenis tinklalapyje
    let outputHtml = `<p><strong>Vardas:</strong> ${userData.firstName}</p>
                      <p><strong>Pavardė:</strong> ${userData.lastName}</p>
                      <p><strong>El. pašto adresas:</strong> ${userData.email}</p>
                      <p><strong>Telefono numeris:</strong> ${userData.phone}</p>
                      <p><strong>Adresas:</strong> ${userData.address}</p>
                      <p><strong>Požymiai:</strong> ${userData.attributes.join(', ')}</p>
                      <p><strong>Vidurkis:</strong> <span class="${getAverageColorClass(average)}">${average.toFixed(2)}</span></p>`;

    // Išvedame į HTML
    document.getElementById('output').innerHTML = outputHtml;

    // Apskaičiuojame ir išvedame rezultatą (vidurkį ir vardą su pavarde)
    const resultHtml = `<p>${userData.firstName} ${userData.lastName} (${userData.email}): ${average.toFixed(2)}</p>`;
    document.getElementById('output').innerHTML += resultHtml;
}

// Funkcijos, skirtos laukų patikrams
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

function validatePhone(phone) {
    const phonePattern = /^\+?(\d{1,3})?[-. ]?(\(?\d{1,4}\)?[-. ]?)?(\d{1,4})[-. ]?(\d{1,4})$/;
    return phonePattern.test(phone);
}

function validateAddress(address) {
    return address.length >= 5; // Patikriname, ar adresas ne trumpesnis nei 5 simboliai
}

// Funkcija, kuri nustato, kokia spalva turi būti vidurkiui
function getAverageColorClass(average) {
    if (average < 10) return 'low-average';  // Raudona
    if (average < 50) return 'medium-average'; // Oranžinė
    return 'high-average'; // Žalia
}

// Butonları içerecek konteyneri seçin
const buttonContainer = document.getElementById('button-container');

// Buton sayısı
const buttonCount = 20;

// Her bir butonu oluşturun ve konteynere ekleyin
for (let i = 1; i <= buttonCount; i++) {
    const button = document.createElement('button');
    button.textContent = 'Buton ' + i;

    // Butona tıklanınca ilgili buton numarasını gösteren bir işlevi tetikleyin
    button.addEventListener('click', function() {
        alert('Buton ' + i);
    });

    // Butonu konteynere ekleyin
    buttonContainer.appendChild(button);
}

const loginForm = document.getElementById('loginForm');
const welcomeMessage = document.getElementById('welcomeMessage');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "test" && password === "1234") {
        // 1. Dölj formuläret
        loginForm.style.display = 'none';
        
        // 2. Visa välkomstmeddelandet
        welcomeMessage.style.display = 'block';
    } else {
        alert("Fel uppgifter!");
    }
});

// Logga ut-logik
logoutBtn.addEventListener('click', function() {
    // 1. Visa formuläret igen
    loginForm.style.display = 'block';
    
    // 2. Dölj välkomstmeddelandet
    welcomeMessage.style.display = 'none';
    
    // 3. Töm textfälten (så nästa person inte ser ditt lösenord)
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
});


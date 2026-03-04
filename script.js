const loginForm = document.getElementById('loginForm');
const welcomeMessage = document.getElementById('welcomeMessage');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    //Lägger till användarnamn och lösenord i konsolen
    console.log("Användarnamn:", username);
    console.log("Lösenord:", password);

    if (username === "test" && password === "1234") {
        // Dölj formuläret
        loginForm.style.display = 'none';
        
        // Visa välkomstmeddelandet och fel användarnamn eller lösenord
        welcomeMessage.style.display = 'block';
    } else {
        alert("Fel användarnamn eller lösenord!");
    }
});

// Logga ut-logik
logoutBtn.addEventListener('click', function() {
    // Visa formuläret igen
    loginForm.style.display = 'block';
    
    // Dölj välkomstmeddelandet
    welcomeMessage.style.display = 'none';
    
    // Töm textfälten
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
});
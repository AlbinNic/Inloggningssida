const loginForm = document.getElementById('loginForm');
const welcomeMessage = document.getElementById('welcomeMessage');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "test" && password === "1234") {
        //Döljer formuläret
        loginForm.style.display = 'none';
        
        //Visar välkomstmeddelandet
        welcomeMessage.style.display = 'block';
    } else {
        alert("Fel uppgifter!");
    }
});

//Logga ut-logik
logoutBtn.addEventListener('click', function() {
    //Visar formuläret igen
    loginForm.style.display = 'block';
    
    //Döljer välkomstmeddelandet
    welcomeMessage.style.display = 'none';
    
   
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
});


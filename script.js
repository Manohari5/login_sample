const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if(email === "" || password === ""){
        message.style.color = "red";
        message.innerHTML = "Please fill all fields.";
        return;
    }

    if(password.length < 6){
        message.style.color = "red";
        message.innerHTML = "Password must be at least 6 characters.";
        return;
    }

    message.style.color = "green";
    message.innerHTML = "Login Successful!";
});
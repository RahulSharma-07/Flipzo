// Validation for sign up page
document.getElementById("signupForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("fullName").value.trim();
    let email = document.getElementById("email").value.trim();
    let pass = document.getElementById("password").value.trim();

    if(name === "" || email === "" || pass === ""){
        alert("All fields are required!");
        return;
    }

    if(pass.length < 6){
        alert("Password must be minimum 6 characters");
        return;
    }

    // Save user in localStorage
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPass", pass);
    localStorage.setItem("isLoggedIn", true);

    alert("Signup successful!");
    window.location.href = "home.html"; // your protected page
});

// end of Validation for sign up page

// Validation for Log in page

document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    let email = document.getElementById("loginEmail").value.trim();
    let pass = document.getElementById("loginPassword").value.trim();

    let storedEmail = localStorage.getItem("userEmail");
    let storedPass = localStorage.getItem("userPass");

    if(email === "" || pass === ""){
        alert("All fields are required!");
        return;
    }

    if(email === storedEmail && pass === storedPass){
        localStorage.setItem("isLoggedIn", true);
        alert("Login successful!");
        window.location.href = "home.html"; // protected page
    } else {
        alert("Incorrect email or password!");
    }
});

// end Validation for Log in page
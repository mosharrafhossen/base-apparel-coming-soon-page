
const form = document.getElementById("form");
const email = document.getElementById("email");
const inputGroup = document.querySelector(".input-group");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    if (email.value === "" || !email.value.includes("@")) {
        inputGroup.classList.add("error");
    } else {
        inputGroup.classList.remove("error");
        alert("Thank you!");   
        email.value = "";      
    }
});
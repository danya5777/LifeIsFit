function checkAnswer(correct) {
    const result = document.getElementById("quizResult");
    result.textContent = correct ? "Correct!" : "Wrong answer";
}

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let valid = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";

    if (name === "") {
        document.getElementById("nameError").textContent = "Required";
        valid = false;
    }

    if (email === "" || !email.includes("@") || !email.includes(".")) {
        document.getElementById("emailError").textContent = "Invalid email";
        valid = false;
    }

    if (valid) {
        alert("Submitted");
    }
});

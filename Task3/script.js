function loginUser() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let msg = document.getElementById("message");

    if (user === "" || pass === "") {
        msg.innerText = "Please fill all fields!";
        return false;
    }

    if (pass.length < 6) {
        msg.innerText = "Password must be at least 6 characters!";
        return false;
    }

    // Redirect to Task 2 page
    window.location.href = "../Task2/index.html";
    return false;
}
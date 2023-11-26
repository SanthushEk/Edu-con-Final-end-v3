function sendEmail() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Simulate sending an email (replace this with your actual email sending logic)
    alert(`Message sent successfully!\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`);

    // Reset the form after sending the email
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
}

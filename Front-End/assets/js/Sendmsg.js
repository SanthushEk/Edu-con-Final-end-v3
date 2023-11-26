document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting in the default way

    // You can add code here to gather form data
    // For simplicity, let's assume you have hardcoded data
    const formData = {
        name: "Contact Form",
        email: "edu-con@scrap.net",
        message: "Someone submitted the contact form."
    };

    // Set up SMTP.js configuration
    Email.send({
        Host: 'your-smtp-host.com',
        Username: 'your-smtp-username',
        Password: 'your-smtp-password',
        To: formData.email,
        From: 'your-email@gmail.com',
        Subject: 'Contact Form Submission',
        Body: formData.message,
    }).then(
        message => {
            console.log('Email sent successfully:', message);
            // Optionally, you can redirect or show a thank you message here
        }
    ).catch(
        error => console.error('Error sending email:', error)
    );
});

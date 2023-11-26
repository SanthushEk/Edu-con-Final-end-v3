const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email Address: ${email.value}<br> Subject: ${subject.value}<br> Message: ${mess.value}`;

    
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "curiouschronicles100@gmail.com",
        Password : "A7665105E83DC16C60CC8FC8E676B367E1DE",
        To : 'curiouschronicles100@gmail.com',
        From : "curiouschronicles100@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK") {
            Swal.fire({
                title: "Success",
                text: "Your Message Sent Successfully",
                icon: "success"
              });

        }
      }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();


});


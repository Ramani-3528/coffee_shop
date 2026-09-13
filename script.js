emailjs.init({
    publicKey: "zyiLu_7HAGWwrraWc"
});

const bookingForm = document.getElementById("bookingForm");
const thankYouMessage = document.getElementById("thankYouMessage");

bookingForm.addEventListener("submit", function (event) {

    event.preventDefault();

    emailjs.sendForm(
        "service_5jpzp1g",
        "template_jymbmjw",
        this
    )
    .then(function () {

        thankYouMessage.textContent ="Thank you! Your table booking request has been sent successfully.";
        bookingForm.reset();

    })
    .catch(function (error) {

        console.log("EmailJS Error:", error);

        thankYouMessage.textContent =
            "Sorry, something went wrong. Please try again.";

    });

});
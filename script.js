document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Your message has been sent! We will contact you soon.");
    this.reset();
});

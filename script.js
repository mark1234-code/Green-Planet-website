

let form = document.getElementById("contactForm");


form.addEventListener("submit", function(event) {

  
    event.preventDefault();

   
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

  
    document.getElementById("response").innerHTML =
        "Thank you " + name +
        "! Your message has been received.";

    form.reset();

});

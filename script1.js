function submitForms() {
    var cardholder = document.getElementById("cardholder").value;
    var cardnumber= document.getElementById("cardnumber").value;
    var expirydate= document.getElementById("expirydate").value;
    var cvc=document.getElementById("cvc").value;
    // Validate the login credentials (this is just a placeholder)
    if (cardnumber && cardholder && expirydate && cvc) {
        alert("Payment successful!");
    } else {
        alert("Please enter valid  credentials.");
    }
}
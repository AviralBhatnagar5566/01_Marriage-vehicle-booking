const form =document.getElementById("BookingForm")
form.addEventListener("submit", function (event){
    event.preventDefault();
    console.log("Form submitted");
})

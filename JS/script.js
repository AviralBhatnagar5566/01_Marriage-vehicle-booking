const form =document.getElementById("BookingForm")


form.addEventListener("submit", function (event){
    event.preventDefault();
    const name =document.getElementById("name").value
    const email =document.getElementById("gmail").value
    if(name === ''|| email ===''){
        alert("please fill all required field")
        return;
    }
    
    alert("Booking request submitted successfully!")
    console.log("Form submitted",name,email);
    form.reset()
})

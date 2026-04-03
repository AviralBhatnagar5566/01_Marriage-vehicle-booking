const form =document.getElementById("BookingForm")


form.addEventListener("submit", function (event){
    event.preventDefault();
    const name =document.getElementById("name").value.trim()
    const email =document.getElementById("gmail").value.trim()
    if(name === ''|| email ===''){
        alert("please fill all required field")
        return;
    }
    else if(!email.endsWith('@gmail.com')){
        alert("please enter correct gmail")
        return;
    }
    else if(name ===' '){
         alert("please fill all required field")
        return;
    }
    
    alert("Booking request submitted successfully!")
    console.log("Form submitted",name,email);
    form.reset()
})

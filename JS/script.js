const form =document.getElementById("BookingForm")


form.addEventListener("submit", function (event){
    event.preventDefault();
    const name =document.getElementById("name").value.trim()
    const email =document.getElementById("gmail").value.trim()
    const date = document.getElementById("date").value.trim()
    const selectedDate = new Date(date)
    const today = new Date()
    today.setHours(0,0,0,0)
    let isvalue = true
     // Clear old errors
    document.getElementById("nameError").innerText = "";
    document.getElementById("gmailError").innerText = "";
    document.getElementById("dateError").innerText = "";
    document.getElementById("sucessMsg").innerText = "";

    

    if(name === ''){
        document.getElementById("nameError").innerText = "🚗Write a valid name"
        isvalue = false
    }
    if (!email.endsWith('@gmail.com')){
        document.getElementById("gmailError").innerText = "🚗 Write a valid Email"
        isvalue = false
    }
    if(!date){
        document.getElementById("dateError").innerText = "select Date";
    }

    if (selectedDate < today) {
        document.getElementById("dateError").innerText = "🗓️ Date cannot be in the past";
        isvalue = false
    }
    if(isvalue){
        document.getElementById("sucessMsg").innerText ="✅ Booking submitted successfully!"
       
        form.reset()
        
        
        console.log("Form submitted",name,email);
    
    }
    
})

const form =document.getElementById("BookingForm")


form.addEventListener("submit",async function (event){
    event.preventDefault();
    const name =document.getElementById("name").value.trim()
    const email =document.getElementById("gmail").value.trim()
    const date = document.getElementById("date").value.trim()
    const Vehicle = document.getElementById("Vehicle").value.trim()
    const selectedDate = new Date(date)
    const today = new Date()
    today.setHours(0,0,0,0)
    let isvalue = true
     // Clear old errors
    document.getElementById("nameError").innerText = "";
    document.getElementById("gmailError").innerText = "";
    document.getElementById("dateError").innerText = "";
    document.getElementById("sucessMsg").innerText = "";
    document.getElementById("VehicleError").innerText = "";

    

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
    if(!Vehicle){
        document.getElementById("VehicleError").innerText ="#️⃣ fill the number of Vehicle"
        isvalue = false
    }
    if(Vehicle > 10 || Vehicle < 0){
        document.getElementById("VehicleError").innerText ="⚠️Cannot Book More Than 10 Vehicle / below 0"
        isvalue = false
    }
    if(isvalue){
        const success = await api(name,email)
        if(success){
            document.getElementById("sucessMsg").innerText ="✅ Booking submitted successfully!"
            form.reset()
        }
       else{
            document.getElementById("sucessMsg").innerText ="❌ SomeThing Went Wrong"

       }     
        
        console.log("Form submitted",name,email,date);
    
    }
    

    async function api(name,gmail,date) {
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
               method: "POST",
               headers:{"Content-Type": "application/json"},
                body: JSON.stringify({
                name,
                email,
                date
             })
            })
            const data = await response.json();
            console.log(data);
            
            return true
        }
        catch(error){
            console.log("error",error);
            return false
        }
    } 
})
// get query string from URL
    const params = new URLSearchParams(window.location.search);

// get id value
    const id = params.get("id");
    console.log(id);

const form =document.getElementById("BookingForm")

const response = async function api() {
    try{
        const res = await fetch(`https://zero1-marriage-vehicle-booking.onrender.com/api/v1/users/bookingbyid/${id}`)
        const data = await res.json()
        console.log(data);
        
        document.getElementById("name").value = data.data.name;
        document.getElementById("email").value = data.data.email;
        document.getElementById("date").value =data.data.date.split("T")[0];
        document.getElementById("vehicle").value= data.data.vehicle
        document.getElementById("vehiclenum").value = data.data.vehiclenum;
        
    }
    catch{

    }
}

form.addEventListener("submit",async function response(event) {
    event.preventDefault()
    const name = document.getElementById("name").value
    const date = document.getElementById("date").value
    const vehicle = document.getElementById("vehicle").value
    const vehiclenum = document.getElementById("vehiclenum").value
    console.log(name);
    console.log(date);
    console.log(vehicle);
    console.log(vehiclenum);
    
    console.log("submit clicked");
    const response = await fetch(`https://zero1-marriage-vehicle-booking.onrender.com/api/v1/users/update/${id}`,{
        method:"PATCH",
        headers:{"Content-Type": "application/json"},

         body: JSON.stringify({
            name,
            date,
            vehicle,
            vehiclenum
            })
    })
    const data = await response.json()
    document.getElementById("sucessMsg").innerText =
    "Booking updated successfully!";
    window.location.href = "bookings.html";
    
    
})

response()
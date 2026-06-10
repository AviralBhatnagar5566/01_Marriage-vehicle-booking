

// import  {deleteBooking} from "../JS/delete.script.js"
const bookings = async function bookings() {
    const response = await fetch("https://zero1-marriage-vehicle-booking.onrender.com/api/v1/users/bookings")
    const data= await response.json()
    console.log(data);

    const bookinglist = document.getElementById("bookinglist")
     data.data.forEach((booking) => {
        const div = document.createElement("div");
        div.classList.add("bookinglist")
        div.innerHTML = `
            <h3>Name: ${booking.name}</h3>
            <p>Email: ${booking.email}</p>
            <p>Vehicle: ${booking.vehicle}</p>
            <p>Number: ${booking.vehiclenum}</p>
            <hr>
        `;

       
        const button = document.createElement("button");
        button.classList.add("deletebutton")
        button.innerText = "Delete";

        button.addEventListener("click", async () => {
            await deleteBooking(booking._id);
        });

        const editButton = document.createElement("button")
        editButton.classList.add("editbutton")
        editButton.innerText = "EDIT"

        editButton.addEventListener("click",async () =>{
             window.location.href = `update.html?id=${booking._id}`;
        });
        


        div.appendChild(button);
        div.appendChild(editButton)
        bookinglist.appendChild(div)
    });
}
   
bookings()
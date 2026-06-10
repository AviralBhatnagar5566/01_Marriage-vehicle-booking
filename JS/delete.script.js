

const deleteBooking = async function deleteBooking(id) {
    const response = await fetch(`https://zero1-marriage-vehicle-booking.onrender.com/api/v1/users/booking/${id}`,
        {
        method:"DELETE"
        }
)
    const data = await response.json()
    console.log(data);
    location.reload()

   
   
}

const deleteBooking = async function deleteBooking(id) {
const comformMessage = confirm("Are You Sure You Want to Delete The Appliction")
     if(!comformMessage){return}

    try{
         const response = await fetch(`https://zero1-marriage-vehicle-booking.onrender.com/api/v1/users/booking/${id}`,{
        method:"DELETE"
        })
        const data = await response.json()
        console.log(data);
        location.reload()
    }

    catch (error) {
        console.error("Failed to delete:", error);
        alert("Something went wrong while deleting.");
    }
}

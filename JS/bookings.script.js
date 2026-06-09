const bookings = async function bookings() {
    const response = await fetch("https://zero1-marriage-vehicle-booking.onrender.com/api/v1/users/bookings")
    const data= await response.json()
    console.log(data);
    
}
bookings()
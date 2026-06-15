let images = [
    "images/travel.jpg",
    "images/goa.jpg",
    "images/manali.jpg",
    "images/kerala.jpg",
    "images/Kashmir.jpg"

];

let i = 0;

setInterval(() => {
    i = (i + 1) % images.length;
    document.getElementById("slider").src = images[i];
}, 2000);
function bookNow(){
    alert("Package booked successfully!");
}
function goToBooking(){
    const dest = document.getElementById("heroDestination").value;
    const date = document.getElementById("heroDate").value;
    const travelers = document.getElementById("heroTravelers").value;

    localStorage.setItem("preselect", JSON.stringify({dest, date, travelers}));
    window.location.href = "booking.html";
}


//this it make the bar to disappear

const sidebar = document.getElementById("sidebar");
const closebtn = document.getElementById("closebtn");

closebtn.addEventListener("click",() => {
sidebar.style.display= "none";
});


// used to update time
function updateDateTime() {
    const dateTimeElement = document.getElementById('date-time');
    const now = new Date();
    
    const formattedDateTime = now.toLocaleString('en-US', {
        year: 'numeric',  // Full year (e.g., 2024)
        month: 'long',    // Full month name (e.g., December)
        day: 'numeric',   // Day of the month (e.g., 12)
        hour: '2-digit',  // 2-digit hour (e.g., 10)
        minute: '2-digit',// 2-digit minute (e.g., 30)
        second: '2-digit',// 2-digit second (e.g., 45)
        hour12: true      // Use 12-hour clock
    });
    
    dateTimeElement.textContent = formattedDateTime;
}

setInterval(updateDateTime, 1000);
updateDateTime();


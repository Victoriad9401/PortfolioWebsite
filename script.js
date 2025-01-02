

function hamburg() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.style.transform = 'translateY(0)'; // Bring dropdown into view
}

function cancel() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.style.transform = 'translateY(-500px)'; // Hide dropdown
}

function scrollToContact() {
    document.querySelector('#Contact').scrollIntoView({ 
        behavior: 'smooth' 
    });
}





// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default jump-to behavior

        // Get the target section
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            // Scroll into the section smoothly
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevents the form from submitting
    
    // Example validation: Check if a required input field is empty
    const inputField = document.querySelector('#requiredField'); // Replace with your input field ID
    if (!inputField.value.trim()) {
        alert("Please fill in the required field."); // Optional: Show an alert to the user
        window.location.href = "error.html"; // Redirect to the error page
        return;
    }
    
    // If validation passes, submit the form programmatically or perform desired actions
    console.log("Form submitted successfully!");
    // Example: Submit the form programmatically
    // e.target.submit();
});

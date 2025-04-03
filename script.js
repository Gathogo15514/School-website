// Modal Functionality
const modal = document.getElementById('enrollmentModal');
const applyNowButton = document.getElementById('applyNowButton');
const closeButton = document.getElementsByClassName('close-button')[0];

applyNowButton.onclick = function() {
    modal.style.display = 'block';
};

closeButton.onclick = function() {
    modal.style.display = 'none';
};

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Form Submission (Simulation)
document.getElementById('enrollmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Application Submitted! (This is a simulation. You would need backend code to process this form).");
    modal.style.display = "none";
});
/* script.js */
document.getElementById('enrollmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Application Submitted! (This is a simulation. You would need backend code to process this form).");
});
/* script.js */
document.getElementById('studentLoginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('studentDetails').style.display = 'block';
    document.getElementById('studentLoginForm').style.display = 'none';
});

document.getElementById('logoutButton').addEventListener('click', function() {
    document.getElementById('studentDetails').style.display = 'none';
    document.getElementById('studentLoginForm').style.display = 'block';
});
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nanyuki Elimu Academy - Enrollment Form</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <header>
        <nav class="navbar">
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="index.html#about">About Us</a></li>
                <li><a href="index.html#academics">Academics</a></li>
                <li><a href="index.html#admissions">Admissions</a></li>
                <li><a href="index.html#co-curricular">Co-Curricular</a></li>
                <li><a href="index.html#gallery">Gallery</a></li>
                <li><a href="index.html#news">News & Events</a></li>
                <li><a href="index.html#contact">Contact Us</a></li>
                <li><a href="enrollment.html" class="cta-button">Enroll Now</a></li>
            </ul>
        </nav>
    </header>

    <section id="enrollment-form" class="enrollment-form">
        <div class="container">
            <h2>Enrollment Form</h2>
            <form id="enrollmentForm">
                <button type="submit">Submit Application</button>
            </form>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>&copy; 2023 Nanyuki Elimu Academy. All rights reserved.</p>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
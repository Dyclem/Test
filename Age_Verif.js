function verifyAge(isOver18) {
    var overlay = document.getElementById('ageVerificationOverlay');
    if (isOver18) {
        // If the user is over 18, hide the overlay
        overlay.style.display = 'none';
    } else {
        // If the user is under 18, redirect to google.com
        window.location.href = 'http://www.google.com';
    }
}

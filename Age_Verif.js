window.onload = function() {
    // Code to create and display the age verification popup
    function verifyAge(isOver18) {
        var overlay = document.createElement('div');
        overlay.id = 'ageVerificationOverlay';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        overlay.style.color = 'white';
        overlay.style.textAlign = 'center';
        overlay.style.paddingTop = '20%';
        overlay.style.fontFamily = 'Arial, sans-serif';
        
        overlay.innerHTML = `
            <p>Welcome to Quirky Apple!</p>
            <p>You must be at least 18 years old to enter this site.</p>
            <button style="cursor: pointer; background-color: white; color: black; padding: 10px 20px; margin: 5px; text-transform: uppercase; font-weight: bold; border: none; border-radius: 5px;" onclick="verifyAge(true)">Yes, I am 18 or older</button>
            <button style="cursor: pointer; background-color: white; color: black; padding: 10px 20px; margin: 5px; text-transform: uppercase; font-weight: bold; border: none; border-radius: 5px;" onclick="window.location.href='http://www.google.com'">No, I am under 18</button>
        `;
        
        document.body.appendChild(overlay);
    }
    
    // Call the function to display the age verification popup
    verifyAge();
};

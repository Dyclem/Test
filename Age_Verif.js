window.onload = function() {
    alert("Welcome to Quirky Apple!\nYou must be at least 18 years old to enter this site.\n\nBy proceeding, you certify that you are of legal age and understand the laws regarding age verification in your country.");
    var userConfirmation = confirm("Do you wish to proceed?");
    if (!userConfirmation) {
        window.location.href = 'http://www.google.com';
    }
};

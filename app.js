function updateResume() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contact").value;
    var address = document.getElementById("address").value;
    var education = document.getElementById("education").value;
    var skills = document.getElementById("skills").value;
    document.getElementById("display-name").innerText = name;
    document.getElementById("display-email").innerText = email;
    document.getElementById("display-contact").innerText = contact;
    document.getElementById("display-address").innerText = address;
    document.getElementById("display-education").innerText = education;
    document.getElementById("display-skills").innerText = skills;
}
function loadProfilePic(event) {
    var image = document.getElementById("profile-display");
    image.src = URL.createObjectURL(event.target.files[0]);
    image.style.display = 'block';
}
function toggleResume() {
    var resumeDiv = document.querySelector('.resume');
    if (resumeDiv.style.display === 'none') {
        resumeDiv.style.display = 'block';
    }
    else {
        resumeDiv.style.display = 'none';
    }
}

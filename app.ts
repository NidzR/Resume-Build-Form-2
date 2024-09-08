function updateResume() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const contact = document.getElementById("contact").value;
    const address = document.getElementById("address").value;
    const education = document.getElementById("education").value;
    const skills = document.getElementById("skills").value;

    document.getElementById("display-name").innerText = name;
    document.getElementById("display-email").innerText = email;
    document.getElementById("display-contact").innerText = contact;
    document.getElementById("display-address").innerText = address;
    document.getElementById("display-education").innerText = education;
    document.getElementById("display-skills").innerText = skills;
}

function loadProfilePic(event) {
    const image = document.getElementById("profile-display");
    image.src = URL.createObjectURL(event.target.files[0]);
    image.style.display = 'block';
}

function toggleResume() {
    const resumeDiv = document.querySelector('.resume');
    if (resumeDiv.style.display === 'none') {
        resumeDiv.style.display = 'block';
    } else {
        resumeDiv.style.display = 'none';
    }
}

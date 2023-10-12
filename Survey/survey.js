function submitForm() {
    // Add your form validation logic here
    // You can check if all fields are filled and perform any other necessary validations
    
    // Check if at least one gender radio button is selected
    const genderMale = document.querySelector('input[name="gender"][value="Male"]').checked;
    const genderFemale = document.querySelector('input[name="gender"][value="Female"]').checked;

    if (!genderMale && !genderFemale) {
        alert("Please select a gender.");
        return false; // Prevent form submission
    }

    // Display a popup with the selected values
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const gender = genderMale ? "Male" : "Female";

    const popupContent = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobile}</p>
        <div class="text-center"><button type="button" onclick="closePopup()">Close</button></div>
        
    `;
    
    document.getElementById("popupContent").innerHTML = popupContent;
    document.getElementById("popup").style.display = "flex";
    
    // Reset the form
    document.getElementById("surveyForm").reset();
    
    return false; // Prevent form submission
}

function resetForm() {
    document.getElementById("surveyForm").reset();
}
function closePopup() {
    // Hide the popup
    document.getElementById("popup").style.display = "none";

    // Reset the form
    resetForm();
}

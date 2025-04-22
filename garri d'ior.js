function submitForm() {
    const fname = document.getElementById('fname').value.trim();
    const lname = document.getElementById('lname').value.trim();
    const email = document.getElementById('email').value.trim();
    const fone = document.getElementById('fone').value.trim();
    const os = document.getElementById('os').value;

    // Check if any required field is empty
    if (!fname || !lname || !email || !fone || !os) {
      alert("Please fill out all fields.");
      return; // Stop form submission if fields are empty
    }

    // Optional: Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return; // Stop form submission if email is invalid
    }

    // Hide the form and display the success message
    document.getElementById('myForm').style.display = "none";
  }
function validateForm() {
    let x = document.forms["Contact Form"]["name"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
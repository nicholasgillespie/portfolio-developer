const formChecker = {
  // DOM ELEMENTS
  form: document.getElementById("contact-form"),
  inputs: null,

  // FUNCTIONS
  checkValidInput() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = true;

    // Loop through each input field to validate
    this.inputs.forEach((input) => {
      let errorMsg = document.querySelector(`#${input.id}-error`);
      // Check if input is invalid, create and display error message
      if (
        !input.value ||
        (input.type === "email" && !emailRegex.test(input.value))
      ) {
        // Code block for creating and displaying error message
        if (!errorMsg) {
          errorMsg = document.createElement("p");
          errorMsg.id = `${input.id}-error`;
          input.parentNode.style.position = "relative";
          input.parentNode.appendChild(errorMsg);
        }
        errorMsg.textContent = "Sorry, invalid format";
        errorMsg.classList.add("error-message");
        input.style.borderColor = "#FF6F5B";
        isValid = false;
      } else {
        // If input is valid, remove error message if it exists
        if (errorMsg) {
          errorMsg.remove();
        }
        input.style.borderColor = "#4ddd9d";
      }
    });
    // Return the overall validity of the form
    return isValid;
  },

  // EVENT LISTENERS
  eventListeners() {
    if (!this.form) return;
    this.inputs = Array.from(this.form.querySelectorAll("input, textarea"));

    // Add an event listener for the submit event of the form
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      // If the input fields are not valid, prevent the form from being submitted
      if (!this.checkValidInput()) {
        e.preventDefault();
      } else {
        console.log("Form submitted");
      }
    });
  },

  // ACTIVATE
  activate() {
    this.eventListeners();
  },
};

export default formChecker;

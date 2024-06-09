const formChecker = {
  // DOM ELEMENTS
  form: document.getElementById("contact-form"),
  inputs: null,

  // FUNCTIONS
  checkValidInput() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = true;

    this.inputs.forEach((input) => {
      const errorMsg = document.querySelector(`#${input.id}-error`);
      if (!input.value) {
        errorMsg.textContent = "Oops! This field cannot be empty";
        errorMsg.classList.add("error-message");
        isValid = false;
      } else if (input.type === "email" && !emailRegex.test(input.value)) {
        errorMsg.textContent = "Oops! Please check your email";
        errorMsg.classList.add("error-message");
        isValid = false;
      } else {
        errorMsg.textContent = "";
        errorMsg.classList.remove("error-message");
      }
    });

    return isValid;
  },

  // EVENT LISTENERS
  eventListeners() {
    if (!this.form) return;
    this.inputs = Array.from(this.form.querySelectorAll("input, textarea"));
    console.log(this.inputs);

    // this.inputs.forEach((input) => {
    //   const errorMsg = document.createElement("p");
    //   errorMsg.id = `${input.id}-error`;
    //   input.parentNode.insertBefore(errorMsg, input.nextSibling);
    // });

    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!this.checkValidInput()) {
        e.preventDefault();
      } else {
        e.preventDefault();
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

/*
 * LINK TO BUTTON
 * This code transforms a link into a button for improved accessibility.
 * Info: https://practical-accessibility.today/chapters/buttons-vs-links/
 *
 * STEPS:
 * 1. Using ARIA attributes to expose the link as a button to screen readers.
 * 2. Preventing default link behavior.
 * 3. Triggering an alternative action with JavaScript.
 * 4. Implementing button keyboard behavior (activation with both Enter and Space keys).
 *
 * EVENT LISTENERS:
 * Event listeners are attached for 'click', 'keydown', and 'keyup' events.
 * 'click' and 'keydown' handle the Enter key, while 'keyup' handles the Space key,
 * mimicking native button behavior.
 *
 * NOTE:
 * This enhancement should be part of a thoughtful, progressively-enhanced strategy,
 * and additional styles may be needed for other assistive technologies.
 */

const linkToButton = {
  // DOM ELEMENTS
  btn: document.querySelector('a[role="button"]'),

  // FUNCTIONS
  doSomething(e) {
    e.preventDefault();
    alert("Chirp chirp!");
  },

  // EVENT LISTENERS
  eventListeners() {
    if (!this.btn) return;
    this.btn.addEventListener("click", (e) => {
      this.doSomething(e);
    });

    this.btn.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        this.doSomething(e);
      }
    });

    this.btn.addEventListener("keyup", (e) => {
      if (e.key === " ") {
        this.doSomething(e);
      }
    });
  },

  // PRIMARY
  activate() {
    this.eventListeners();
  },
};

export default linkToButton;

class SignUpPage {
  selectorsList() {
    const selectors = {
      signUpButton: "[href='/signup']",
      firstNameField: "[name='firstName']",
      lastNameField: "[name='lastName']",
      usernameField: "[name='username']",
      registerPasswordField: "[name='password']",
      confirmPasswordField: "[name='confirmPassword']",
      signUpSubmit: "[data-test='signup-submit']",
      helperTextField: ".MuiFormHelperText-root",
    };

    return selectors;
  }
  accessSignUpPage() {
    cy.visit("http://localhost:3000/");
    cy.get(this.selectorsList().signUpButton).click();
  }
  fillPersonalDetails(firstName, lastName, userName, password, confirmPassword) {
    cy.get(this.selectorsList().firstNameField).type(firstName);
    cy.get(this.selectorsList().lastNameField).type(lastName);
    cy.get(this.selectorsList().usernameField).type(userName);
    cy.get(this.selectorsList().registerPasswordField).type(password);
    cy.get(this.selectorsList().confirmPasswordField).type(confirmPassword);
  }
  submitSignUpForm() {
    cy.get(this.selectorsList().signUpSubmit).click();
  }

  validateHelperText() {
    cy.get(this.selectorsList().helperTextField);
  }
}

export default SignUpPage;

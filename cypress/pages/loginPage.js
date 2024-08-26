class LoginPage {
  selectorsList() {
    const selectors = {
      usernameField: "[name='username']",
      passwordField: "[type='password']",
      loginButton: "[type='submit']",
      wrongCredentialsAlert: "[role='alert']",
    };

    return selectors;
  }

  accessLoginPage() {
    cy.visit("http://localhost:3000/");
  }
  loginWithAnyUser(username, password) {
    cy.get(this.selectorsList().usernameField).type(username);
    cy.get(this.selectorsList().passwordField).type(password);
    cy.get(this.selectorsList().loginButton).click();
  }

  checkAccessInvalid() {
    cy.get(this.selectorsList().wrongCredentialsAlert);
  }
}

export default LoginPage;

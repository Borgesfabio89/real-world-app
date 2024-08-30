class SendMoney {
  selectorsList() {
    const selectors = {
      newTransactionButton: "[data-test='nav-top-new-transaction']",
      userListButton: "[data-test='user-list-item-uBmeaz5pX']",
      amountField: "[placeholder='Amount']",
      addNoteField: "[placeholder='Add a note']",
      submitPaymentButton: "[data-test='transaction-create-submit-payment']",
      helperText: ".MuiAlert-message",
      transactionHelperText: "#transaction-create-amount-input-helper-text",
    };

    return selectors;
  }

  accessTransactionPage() {
    cy.get(this.selectorsList().newTransactionButton).click();
  }
  transactionData(amount, note) {
    cy.get(this.selectorsList().amountField).type(amount);
    cy.get(this.selectorsList().addNoteField).type(note);
  }

  userList() {
    cy.get(this.selectorsList().userListButton).click();
  }
  paymentButton() {
    cy.get(this.selectorsList().submitPaymentButton).click();
    cy.get(this.selectorsList().helperText);
  }

  checkInsufficientBalance() {
    cy.get(this.selectorsList().transactionHelperText);
  }
}

export default SendMoney;

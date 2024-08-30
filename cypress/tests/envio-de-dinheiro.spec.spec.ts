import userData from "../fixtures/userData.json";
import LoginPage from "../pages/loginPage.js";
import SendMoney from "../pages/sendMoney.js";

const loginPage = new LoginPage();
const sendMoney = new SendMoney();

describe("Enviar dinheiro com saldo suficiente", () => {
  it("Deve enviar dinheiro com sucesso", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password);
    sendMoney.accessTransactionPage();
    sendMoney.userList();
    sendMoney.transactionData(
      userData.AmountFieldSuccess.amount,
      userData.AddANoteFieldSuccess.note
    );
  });

  describe("Enviar dinheiro com saldo insuficiente", () => {
    it("Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente", () => {
      loginPage.accessLoginPage();
      loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password);
      sendMoney.accessTransactionPage();
      sendMoney.userList();
      sendMoney.transactionData(userData.AmountFieldFail.amount, userData.AddANoteFieldFail.note);
      sendMoney.checkInsufficientBalance();
    });
  });
});

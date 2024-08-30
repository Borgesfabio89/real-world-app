import userData from "../fixtures/userData.json";
import LoginPage from "../pages/loginPage.js";
import TabListPage from "../pages/tabListPage.js";
import SignUpPage from "./../pages/signUpPage";

const loginPage = new LoginPage();
const tabListPage = new TabListPage();
const signUpPage = new SignUpPage();

describe("Login com sucesso", () => {
  it("Deve fazer login com um usuário válido", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password);

    tabListPage.checkTabList();
  });

  describe("Tentar fazer login com credenciais inválidas", () => {
    it("Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas", () => {
      loginPage.accessLoginPage();
      loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password);
      loginPage.checkAccessInvalid();
    });
  });
  describe("Registro de novo usuário com sucesso", () => {
    it("Deve registrar um novo usuário com informações válidas", () => {
      signUpPage.accessSignUpPage();
      signUpPage.fillPersonalDetails(
        userData.signUpSuccess.firstName,
        userData.signUpSuccess.lastName,
        userData.signUpSuccess.username,
        userData.signUpSuccess.password,
        userData.signUpSuccess.confirmPassword
      );
    });
  });
  describe("Tentar registrar um novo usuário com informações incompletas", () => {
    it("Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias", () => {
      signUpPage.accessSignUpPage();
      signUpPage.fillPersonalDetails(
        userData.signUpFail.firstName,
        userData.signUpFail.lastName,
        userData.signUpFail.userName,
        userData.signUpFail.password,
        userData.signUpFail.confirmPassword
      );
      signUpPage.validateHelperText();
    });
  });
});

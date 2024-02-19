import Page from "./page";
import { newPageLoading } from "./utils";

class LoginPage extends Page {
  public get inputUsername() {
    return $('input[placeholder="username"]');
  }

  public get inputPassword() {
    return $('input[placeholder="password"]');
  }

  public get btnSubmit() {
    return $("div.button=Submit");
  }

  public async login(username: string, password: string) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);

    await this.btnSubmit.click();

    await newPageLoading(".post-filter.active");
  }

  public open() {
    return super.open("login");
  }

  public openAsVisitor() {
    return super.open("");
  }

}

export default new LoginPage();
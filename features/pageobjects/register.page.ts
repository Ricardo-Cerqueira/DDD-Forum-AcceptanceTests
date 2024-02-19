import { $ } from "@wdio/globals";
import Page from "./page";
import { newPageLoading } from "./utils";

class RegisterPage extends Page {
  public get inputEmail() {
    return $('input[placeholder="email"]');
  }

  public get inputUsername() {
    return $('input[placeholder="username"]');
  }

  public get inputPassword() {
    return $('input[placeholder="password"]');
  }

  public get btnSubmit() {
    return $(".button");
  }

  public async register(email: string, username: string, password: string) {
    await this.inputEmail.setValue(email);
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);

    await this.btnSubmit.click();

    await newPageLoading(".post-filter.active");
  }

  public open() {
    return super.open("join");
  }
}

export default new RegisterPage();

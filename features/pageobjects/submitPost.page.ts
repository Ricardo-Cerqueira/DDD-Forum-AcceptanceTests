import Page from "./page";
import { newPageLoading } from "./utils";

class SubmitPost extends Page {
  public get toSubmit() {
    return $("#submitLink");
  }
  public get titleBox() {
    return $(`input[placeholder="Enter the title"]`);
  }
  public get bodyBox() {
    return $(`.ql-editor.ql-blank`);
  }

  public get submitButton() {
    return $(".submit-button");
  }

  public async preparePost(title: string, body: string) {
    await this.toSubmit.click();

    await newPageLoading(".submit-button");

    await this.titleBox.setValue(title);
    await this.bodyBox.setValue(body);
    await this.submitButton.click();

    await newPageLoading(".post-filter.active");
  }

  public async createPost(amount: number, title: string, body: string) {
    for (let i = 0; i < amount; i++) {
      await this.preparePost(title, body);
    }
  }
}

export default new SubmitPost();

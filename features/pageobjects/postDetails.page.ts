import { $$ } from "@wdio/globals";
import { newPageLoading } from "./utils";
import Page from "./page";

class PostDetails extends Page {
  get backToAllDiscussionsButton() {
    return $("p=Back to all discussions");
  }

  get commentBox() {
    return $(".ql-editor.ql-blank");
  }

  get submitCommentButton() {
    return $("button.submit-button");
  }

  get logoutButton() {
    return $("div.button > span > u:nth-child(2)");
  }

  public get postRows() {
    return $$(".post-row");
  }

  public get orderPopularLabel() {
    return $("#root > div > div > div.post-filters > div:nth-child(1)");
  }

  public get orderRecentLabel() {
    return $("#root > div > div > div.post-filters > div:nth-child(2)");
  }

  public get orderUnpopularLabel() {
    return $("#root > div > div > div.post-filters > div:nth-child(3)");
  }

  public async orderPopular() {
    await this.orderPopularLabel.click();
    newPageLoading("#root > div > div > div.post-filters > div.post-filter.active");
  }
  
  public async orderRecent() {
    await this.orderRecentLabel.click();
    newPageLoading(
      "#root > div > div > div.post-filters > div.post-filter.active"
    );
  }

  public async orderUnpopular() {
    await this.orderUnpopularLabel.click();
    newPageLoading(
      "#root > div > div > div.post-filters > div.post-filter.active"
    );
  }

  public async clickPost(posID: number) {
    await this.postRows[posID].click();

    //newPageLoading("#post-author-link"); //this seems unnecessary from my testing
  }


  public async clickCommentBox() {
    await this.commentBox.click();
  }

  public async addComment(id: number, comment: string) {
    await this.clickPost(id);
    await this.commentBox.setValue(comment);
    await this.submitCommentButton.waitForClickable({ timeout: 5000 });
    await this.submitCommentButton.click();
  }

  public async clickBackToAllDiscussions() {
    await this.backToAllDiscussionsButton.waitForClickable({ timeout: 5000 });
    await this.backToAllDiscussionsButton.click();
  }

  public async assertTitle(expectedTitle:string) {
    const h1 = await $("h1"); 
    let actualTitle = await h1.getText(); 
    actualTitle = actualTitle.replace(/"/g, ''); 
    expect(actualTitle).toEqual(expectedTitle); 
  }

  public async clickLogout() {
    await this.logoutButton.waitForClickable({ timeout: 5000 });
    await this.logoutButton.click();
  }
}

export default new PostDetails();

import Page from "./page";

class MemberDetails extends Page {
  public get loggedMemberPage() {
    return $(".button u");
  }

  public get memberName() {
    return $("h2[data-username]");
  }

  public get memberEmail() {
    return $("span[data-email]");
  }

  public get numberOfPosts() {
    return $("#user-posts");
  }

  public get numberOfComments() {
    return $("#user-comments");
  }

  public get rankOneUser() {
    return $("#rank-one-user");
  }

  public get userWithMoreComments() {
    return $("#user-more-comments");
  }
  public get userWithMorePosts() {
    return $("#user-more-posts");
  }

  public async loggedMemberProfile() {
    await this.loggedMemberPage.click();
  }

  public get deleteButton() {
    return $(".delete-button");
  }
  
  public async deleteMemberProfile() {
    await this.deleteButton.click();
  }


  public async getToastMessage(): Promise<string> {
    const toastSelector = '.Toastify__toast-body';
    await $(toastSelector).waitForDisplayed({ timeout: 5000 });
    return $(toastSelector).getText();
  }


/*   async getToastContent(): Promise<string> {
    const MessageSelector = ".Toastify__toast.Toastify__toast--success .Toastify__toast-body";
    const MessageElement = await $(MessageSelector);
    return MessageElement.getText();
  }

  async waitForFlashSuccess(): Promise<any> {
    const success: string = "User deleted successfully! 🎉";
    await browser.waitUntil(
      async () => {
        const result = await this.getToastContent();
        return result === success;
      },
      {
        timeout: 5000,
        timeoutMsg: `Error message did not contain "${success}" within 5 seconds`,
      }
    );
  }
  async waitForFlashFailure(): Promise<any> {
    const failure: string = "Oops! Couldn't delete user. 🙁";
    await browser.waitUntil(
      async () => {
        const result = await this.getToastContent();
        return result === failure;
      },
      {
        timeout: 5000,
        timeoutMsg: `Error message did not contain "${failure}" within 5 seconds`,
      }
    );
  }
  */
} 

export default new MemberDetails();

import Page from "./page";

class StatisticsPage extends Page {
  public get loggedMemberStatisticsPage() {
    return $("#statisticsLink");
  }

  getDateBox(boxIndex: number) {
    return $(`#dateInput_${boxIndex}`);
    /* const boxName = `dateBox${boxIndex + 1}`;
    return $(`#${boxName}`); */
  }
  

  getSubmitButton(boxIndex: number) {
    return $(`#submitButton_${boxIndex}`);
  }

  getRefreshButton(boxIndex: number) {
    return $(`#refreshButton_${boxIndex}`);
  }

  getResultText(boxIndex: number) {
    return $(`#result_${boxIndex}`);
  }

  async enterDate(boxIndex: number, date: string) {
    const dateBox = await this.getDateBox(boxIndex);
    await dateBox.setValue(date);
  }  

  async clickSubmit(boxIndex: number) {
    const submitButton = await this.getSubmitButton(boxIndex);
    await submitButton.click();
    //await browser.execute((button) => button.click(), submitButton);
  }
  
  async clickRefresh(boxIndex: number) {
    const refreshButton = await this.getRefreshButton(boxIndex);
    await refreshButton.click();
  }

  async getResultTextContent(boxIndex: number) {
    const resultTextElement = await this.getResultText(boxIndex);
    const resultText = await resultTextElement.getText();
    return resultText;
  }
  async getErrorToastContent(): Promise<string> {
    const errorMessageSelector = ".Toastify__toast.Toastify__toast--error .Toastify__toast-body";
    const errorMessageElement = await $(errorMessageSelector);
    return errorMessageElement.getText();
  }

  async waitForFlash(): Promise<any> {
    const error: string = "Inserted date is not valid, please refresh and try again 😎";
    await browser.waitUntil(
      async () => {
        const result = await this.getErrorToastContent();
        return result === error;
      },
      {
        timeout: 5000,
        timeoutMsg: `Error message did not contain "${error}" within 5 seconds`,
      }
    );
  }

  public async loggedMemberStatistics() {
    await this.loggedMemberStatisticsPage.click();
  }
}

export default new StatisticsPage();

import { Given, When, Then } from "@wdio/cucumber-framework";
//import { expect } from "@wdio/globals";
import loginPage from "../../pageobjects/login.page";
import memberDetails from "../../pageobjects/memberDetails.page";
import submitPost from "../../pageobjects/submitPost.page";
import postDetails from "../../pageobjects/postDetails.page";
import statisticsPage from "../../pageobjects/statistics.page";

const pages: any = {
  login: loginPage,
  memberPage: memberDetails,
  submitPost: submitPost,
  postDetails: postDetails,
  statisticsPage: statisticsPage,
};

const member = {
  username: "NunoPinto",
  password: "'1222639.",
};

const loginMemberOnTheStatisticsPage = async () => {
  await pages.login.open();
  await pages.login.login(member.username, member.password); 
  await browser.pause(5000);
  await pages.statisticsPage.loggedMemberStatistics();
  await browser.pause(5000);
};

// Scenario: Get average of posts for a valid date
Given("I am a logged-in member on the statistics page", loginMemberOnTheStatisticsPage);

When("I enter a valid date in the format {string} and submit the form",
  async (date: string) => {
    await pages.statisticsPage.enterDate(1, date);
    await pages.statisticsPage.clickSubmit(1);
    await browser.pause(5000);
  }
);

Then("the system should calculate average of posts and display {string}",
  async (expectedResult: string) => {
    await browser.waitUntil(
      async () => {
        const resultText = await pages.statisticsPage.getResultTextContent(1);
        return resultText.includes(expectedResult);
      },
      {
        timeout: 5000,
        timeoutMsg: `Result did not contain "${expectedResult}" within 1 seconds`,
      }
    );
    const resultText = await pages.statisticsPage.getResultTextContent(1);
    expect(resultText).toBe(expectedResult);
  }
);

// Get average of posts for a day without posts
Given("I am a logged-in member at the statistics page", loginMemberOnTheStatisticsPage);

When("I enter a valid date {string} and submit",
  async (date: string) => {
    await pages.statisticsPage.enterDate(1, date);
    await pages.statisticsPage.clickSubmit(1);
    await browser.pause(5000);
  }
);

Then("the system should display {string}",
  async (expectedResult: string) => {
    await browser.waitUntil(
      async () => {
        const resultText = await pages.statisticsPage.getResultTextContent(1);
        return resultText.includes(expectedResult);
      },
      {
        timeout: 5000,
        timeoutMsg: `Result did not contain "${expectedResult}" within 1 seconds`,
      }
    );
    const resultText = await pages.statisticsPage.getResultTextContent(1);
    expect(resultText).toBe(expectedResult);
  }
);

// Get average of posts for an invalid date
Given("I am logged in member on the statistics page", loginMemberOnTheStatisticsPage);

When("I enter an invalid date {string} and submit the form",
  async (date: string) => {
    await pages.statisticsPage.enterDate(1, date);
    await pages.statisticsPage.clickSubmit(1);
    await browser.pause(5000);
  }
);

Then("the message {string} should be displayed", async (expectedErrorMessage: string) => {
  await browser.waitUntil(async () => {
      const errorMessage = await pages.statisticsPage.getErrorToastContent();
      return errorMessage.includes(expectedErrorMessage);
  }, {
      timeout: 5000,
      timeoutMsg: `Error message did not contain "${expectedErrorMessage}" within 5 seconds`
  });

  const errorMessage = await pages.statisticsPage.getErrorToastContent();
  await expect(errorMessage).toBe(expectedErrorMessage);
});

// Refresh statistics button
Given("I'm a logged-in member on the statistics page", loginMemberOnTheStatisticsPage);

When("I enter a valid date {string} and click on submit button and refresh button", async (date: string) => {
  await pages.statisticsPage.enterDate(1, date);
  await pages.statisticsPage.clickSubmit(1);
  await browser.pause(5000);
  await pages.statisticsPage.clickRefresh(1);
  await browser.pause(5000);
});

Then("the text date field must be reseted {string} and the result should be {string}", async (expectedDate: string, expectedResult:string) => {
  const dateBoxValue = await pages.statisticsPage.getDateBox(1).getValue();
  await browser.pause(5000);
  const resultText = await pages.statisticsPage.getResultText(1).getText();
  await browser.pause(5000);
  await expect(dateBoxValue).toBe(expectedDate);
  await expect(resultText).toBe(expectedResult);
});



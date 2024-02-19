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

const loginMemberOnTheStatisticsPage = async () => {
  await pages.login.open();
  await pages.login.login(memberTwo.username, memberTwo.password);
  await pages.statisticsPage.loggedMemberStatistics();
};

const memberTwo = {
  username: "PauloTeixeira",
  email: "pauloteixeira@dddforum.com",
  password: "'1222013.",
};

//Scenario: Member submits valid date
Given("the member is on the statistics page", loginMemberOnTheStatisticsPage);

When(
  "the member enters a valid date in the format {string} and clicks on submit",
  async (date: string) => {
    await pages.statisticsPage.enterDate(5, date);
    await browser.pause(3000);
    await pages.statisticsPage.clickSubmit(5);
    await browser.pause(5000);
  }
);

Then(
  "the system should calculate and display the {string}.",
  async (expectedResult: string) => {
    await browser.waitUntil(
      async () => {
        const resultText = await pages.statisticsPage.getResultTextContent(5);
        return resultText.includes(expectedResult);
      },
      {
        timeout: 5000,
        timeoutMsg: `Result did not contain "${expectedResult}" within 1 seconds`,
      }
    );
    const resultText = await pages.statisticsPage.getResultTextContent(5);
    expect(resultText).toBe(expectedResult);
  }
);

//Scenario: Member submits data with no records

Given("the Member is on the statistics Page", loginMemberOnTheStatisticsPage);

When(
  "the member enters a data with no posts {string} and clicks on submit",
  async (date: string) => {
    await pages.statisticsPage.enterDate(5, date);
    await pages.statisticsPage.clickSubmit(5);
  }
);

Then(
  "the system should display a {string} message",
  async (expectedResult: string) => {
    await browser.waitUntil(
      async () => {
        const resultText = await pages.statisticsPage.getResultTextContent(5);
        return resultText.includes(expectedResult);
      },
      {
        timeout: 5000,
        timeoutMsg: `Result did not contain "${expectedResult}" within 1 seconds`,
      }
    );
    const resultText = await pages.statisticsPage.getResultTextContent(5);
    expect(resultText).toBe(expectedResult);
  }
);

//Scenario: Member submits invalid data

Given("The member is on Statistics page", loginMemberOnTheStatisticsPage);

When(
  "the member enters an invalid date {string} and clicks on submit",
  async (date: string) => {
    await pages.statisticsPage.enterDate(5, date);
    await pages.statisticsPage.clickSubmit(5);
  }
);

Then("the system should display a flash message {string}", async (expectedErrorMessage: string) => {
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

//Scenario: Entering a date with valid data and clicking the refresh button

Given("The member is on Statistics page already", loginMemberOnTheStatisticsPage);

When("the member enters the date {string} clicks submit button for box 2 and the refresh button", async (date: string) => {
    await pages.statisticsPage.enterDate(5, date);
    await pages.statisticsPage.clickSubmit(5);
    await pages.statisticsPage.clickRefresh(5);
});

Then("the date field text must be {string} and the result must be {string}", async (expectedDate: string, expectedResult:string) => {
    const dateBoxValue = await pages.statisticsPage.getDateBox(5).getValue();
    const resultText = await pages.statisticsPage.getResultText(5).getText();
    await expect(dateBoxValue).toBe(expectedDate);
    await expect(resultText).toBe(expectedResult);
});
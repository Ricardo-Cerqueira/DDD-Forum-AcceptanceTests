import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "@wdio/globals";
import registerPage from "../../pageobjects/register.page";
import loginPage from "../../pageobjects/login.page";
import memberDetails from "../../pageobjects/memberDetails.page";
import submitPost from "../../pageobjects/submitPost.page";
import postDetails from "../../pageobjects/postDetails.page";
import statisticsPage from "../../pageobjects/statistics.page";

const pages: any = {
    registerPage: registerPage,
    login: loginPage,
    memberPage: memberDetails,
    submitPost: submitPost,
    postDetails: postDetails,
    statisticsPage: statisticsPage,
  };
  const member = { username: "RicardoCerqueir", email: "ricardocerqueira@dddforum.com", password: "'1222642." };
  const memberTwo = { username: "PauloTeixeira", email: "pauloteixeira@dddforum.com", password: "'1222013." };

  const loginAsMember = async () => {
    await pages.login.open();
    await pages.login.login(member.username, member.password);
};
const navigateToStatisticsPage = async () => {
    await pages.statisticsPage.loggedMemberStatistics();
};

  // Scenario: Entering a specific date with no data for box 2

  Given("a logged-in member", loginAsMember);

  When("I click on the statistics page button", navigateToStatisticsPage
);

  When("I enter the date {string} and click submit for box 2", async (date:string) => {
    await pages.statisticsPage.enterDate(2, date);
    await pages.statisticsPage.clickSubmit(2);
});

  Then("the result for box 2 should be {string}", async (expectedResult:string) => {
    await browser.waitUntil(async () => {
        const resultText = await pages.statisticsPage.getResultTextContent(2);
        return resultText.includes(expectedResult);
    }, {
        timeout: 5000, 
        timeoutMsg: `Result did not contain "${expectedResult}" within 1 seconds`
    });
    const resultText = await pages.statisticsPage.getResultTextContent(2);
    expect(resultText).toBe(expectedResult);
});

// Scenario: Entering a specific date with valid data for box 2

Given("a member logged-in", loginAsMember);

When("the member clicks on the statistics page", navigateToStatisticsPage)

When("the member enters the date {string} and clicks submit for box 2", async (date:string) => {
    await pages.statisticsPage.enterDate(2, date);
    await pages.statisticsPage.clickSubmit(2);
});

Then("the result for box 2 must be {string}", async (expectedResult:string) => {
    await browser.waitUntil(async () => {
        const resultText = await pages.statisticsPage.getResultTextContent(2);
        return resultText.includes(expectedResult);
    }, {
        timeout: 5000,
        timeoutMsg: `Result did not contain "${expectedResult}" within 1 seconds`
    });
    const resultText = await pages.statisticsPage.getResultTextContent(2);
    await expect(resultText).toBe(expectedResult);
});

// Scenario: Entering a specific date and clicking the refresh button

Given("a member to login", loginAsMember);

When("the member clicks on the statistics page button", navigateToStatisticsPage)

When("the member enters the date {string} and clicks refresh button for box 2", async (date:string) => {
    await pages.statisticsPage.enterDate(2, date);
    await pages.statisticsPage.clickRefresh(2);
});

Then("the date text field for box 2 must be {string}", async (expectedDate: string) => {
    const dateBoxValue = await pages.statisticsPage.getDateBox(2).getValue();
    await expect(dateBoxValue).toBe(expectedDate);
  
});

// Scenario: Entering an invalid date and clicking the submit button

Given("a member is logged in", loginAsMember);

When("the member navigates to the statistics page", navigateToStatisticsPage)

When('the member enters the date {string} clicks submit button for box 2 and the refresh button', async (date: string) => {
    await pages.statisticsPage.enterDate(2, date);
    await pages.statisticsPage.clickSubmit(2);
    await browser.pause(3000)
    await pages.statisticsPage.clickRefresh(2);
});

Then("the date field text must be {string} and the result must be {string}", async (expectedDate: string, expectedResult:string) => {
    const dateBoxValue = await pages.statisticsPage.getDateBox(2).getValue();
    const resultText = await pages.statisticsPage.getResultText(2).getText();
    await expect(dateBoxValue).toBe(expectedDate);
    await expect(resultText).toBe(expectedResult);
});

// Scenario4

Given("a member is registered", async () => {
    await pages.login.open();
    await pages.login.login(memberTwo.username, memberTwo.password);
  });

When("the member goes statistics page", navigateToStatisticsPage);

When('enters the date {string} in box 2 and clicks the submit button', async (invalidDate:string) => {
    await pages.statisticsPage.enterDate(2, invalidDate);
    await pages.statisticsPage.clickSubmit(2);
});

Then("an error message should be displayed with the text {string}", async (expectedErrorMessage: string) => {
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
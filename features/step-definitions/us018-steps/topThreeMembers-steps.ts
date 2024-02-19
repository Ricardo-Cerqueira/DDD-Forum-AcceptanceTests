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

const member = { username: "NatalyLucas", email: "natalylucas@dddforum.com", password: "'1222649." };

//   Scenario: Get the top three commenting members for a specific day

Given("I'm a logged in member in the statistics page", async () => {
  await pages.login.open();
  await pages.login.login(member.username, member.password);
  await browser.pause(2000); // Pause 
  await pages.statisticsPage.loggedMemberStatistics();
  await browser.pause(2000); // Pause 
});
When("I enter the statistics page, type the date {string} and click submit for box 3", async (date: string) => {
  await pages.statisticsPage.enterDate(3, date);
  await browser.pause(2000); // Pause 
  await pages.statisticsPage.clickSubmit(3);
  await browser.pause(2000); // Pause 
});

Then("The result for box 3 should be {string}", async (expectedResult: string) => {
  await browser.waitUntil(async () => {
    const resultText = await pages.statisticsPage.getResultTextContent(3);
    return resultText.includes(expectedResult);
  }, {
    timeout: 5000,
    timeoutMsg: `Result did not contain "${expectedResult}" within 1 seconds`
  });
  const resultText = await pages.statisticsPage.getResultTextContent(3);
  expect(resultText).toBe(expectedResult);
});

//   Scenario: Get the top three commenting members for a specific day

Given("I'm a logged in member in the statistics page in scenario 2", async () => {
  await pages.login.open();
  await pages.login.login(member.username, member.password);
  await browser.pause(2000); // Pause 
  await pages.statisticsPage.loggedMemberStatistics();
  await browser.pause(2000); // Pause 
});
When("I enter the statistics page, type the date {string} and click submit for box 3 in scenario 2", async (date: string) => {
  await pages.statisticsPage.enterDate(3, date);
  await browser.pause(2000); // Pause 
  await pages.statisticsPage.clickSubmit(3);
  await browser.pause(2000); // Pause 
});

Then("The result for two for box 3 should be {string} in scenario 2", async (expectedResult: string) => {
  await browser.waitUntil(async () => {
    const resultText = await pages.statisticsPage.getResultTextContent(3);
    return resultText.includes(expectedResult);
  }, {
    timeout: 5000,
    timeoutMsg: `Result did not contain "${expectedResult}" within 1 seconds`
  });
  const resultText = await pages.statisticsPage.getResultTextContent(3);
  expect(resultText).toBe(expectedResult);
});

//   Scenario: Get the top three commenting members for an invalid date

Given("I'm a logged in member in the statistics page in scenario 3", async () => {
  await pages.login.open();
  await pages.login.login(member.username, member.password);
  await browser.pause(2000); // Pause 
  await pages.statisticsPage.loggedMemberStatistics();
  await browser.pause(2000); // Pause 
});

When("I enter an invalid date {string} and click submit for box 3 in scenario 3", async (date: string) => {
  await pages.statisticsPage.enterDate(3, date);
  await browser.pause(2000); // Pause 
  await pages.statisticsPage.clickSubmit(3);
  await browser.pause(2000); // Pause 
});

Then("The message {string} should be displayed", async (expectedErrorMessage: string) => {
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
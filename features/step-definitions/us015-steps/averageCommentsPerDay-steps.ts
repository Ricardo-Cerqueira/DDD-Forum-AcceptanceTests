import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "@wdio/globals";

import * as utils from "../../pageobjects/utils";

//Scenario Outline: Member submits valid date
Given("the member is on the statistics page", async () => {
  await utils.pages.login.open();
  await utils.pages.login.login(utils.member.username, utils.member.password);

  utils.newPageLoading(utils.mainPage);
  await utils.pages.statistics.loggedMemberStatistics();
});

When("the member enters a valid date in the format {string}", async (date) => {
  utils.newPageLoading(utils.statisticsPage);

  await utils.pages.statistics.enterDate(utils.dateBox.averageComments, date);
});

When("the member clicks the submit button", async () => {
  await utils.pages.statistics.clickSubmit(utils.dateBox.averageComments);
});

Then("the system should calculate and display the {string} rounded with one decimal", async (rounded) => {
  const result = await utils.pages.statistics.getResultTextContent(utils.dateBox.averageComments);
  expect(result).toBe(rounded);
});

//Scenario Outline: Member submits data with no records
Given("the Member is on the Statistics Page", async () => {
  await utils.pages.login.open();
  await utils.pages.login.login(utils.member.username, utils.member.password);

  utils.newPageLoading(utils.mainPage);

  await utils.pages.statistics.loggedMemberStatistics();
});

When("the member enters a valid date in the format {string} with no existing comments and posts", async (date) => {
  utils.newPageLoading(utils.statisticsPage);

  await utils.pages.statistics.enterDate(utils.dateBox.averageComments, date);
});

When("member clicks the submit button", async () => {
  await utils.pages.statistics.clickSubmit(utils.dateBox.averageComments);
});

Then("the system should display a {string} message", async (errorMessage) => {
  const result = await utils.pages.statistics.getResultTextContent(utils.dateBox.averageComments);
  expect(result).toBe(errorMessage);
});

//Scenario Outline: Member submits invalid data
Given("The member is on statistics page", async () => {
  await utils.pages.login.open();
  await utils.pages.login.login(utils.member.username, utils.member.password);

  utils.newPageLoading(utils.mainPage);

  await utils.pages.statistics.loggedMemberStatistics();
});

When("the member enters an invalid date {string}", async (invalidDate) => {
  utils.newPageLoading(utils.statisticsPage);

  await utils.pages.statistics.enterDate(utils.dateBox.averageComments, invalidDate);
});

When("The member clicks submit", async () => {
  await utils.pages.statistics.clickSubmit(utils.dateBox.averageComments);
});

Then("the system should display a flash message {string}", async (expectedErrorMessage) => {
  await utils.pages.statistics.waitForFlash();

  const actualErrorMessage = await utils.pages.statistics.getErrorToastContent();
  await expect(actualErrorMessage).toBe(expectedErrorMessage);
});

Then("the system should not display any result: {string}", async (noResult) => {
  const result = await utils.pages.statistics.getResultTextContent(utils.dateBox.averageComments);
  expect(result).toBe(noResult);
});

//Scenario Outline: Member submits valid data and refreshes results
Given("The Member is on The Statistics Page", async () => {
  await utils.pages.login.open();
  await utils.pages.login.login(utils.member.username, utils.member.password);

  utils.newPageLoading(utils.mainPage);

  await utils.pages.statistics.loggedMemberStatistics();
});

When("the member enters a valid date in the Format {string}", async (date) => {
  utils.newPageLoading(utils.statisticsPage);

  await utils.pages.statistics.enterDate(utils.dateBox.averageComments, date);
});

When("The Member Clicks the submit button", async () => {
  await utils.pages.statistics.clickSubmit(utils.dateBox.averageComments);
});

When("the member clicks the refresh button", async () => {
  await utils.pages.statistics.clickRefresh(utils.dateBox.averageComments);
});

Then("both date fields and result fields are empty", async () => {
  const dateBox = await utils.pages.statistics.getDateBox(utils.dateBox.averageComments).getValue();
  const resultTextElement = await utils.pages.statistics.getResultText(utils.dateBox.averageComments).getValue();

  expect(dateBox).toBe("");
  expect(resultTextElement).toBe(null);
});

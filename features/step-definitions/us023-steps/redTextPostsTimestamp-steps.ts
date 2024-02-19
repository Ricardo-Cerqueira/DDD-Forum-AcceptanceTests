import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "@wdio/globals";
import loginPage from "../../pageobjects/login.page";
import postDetails from "../../pageobjects/postDetails.page";
import indexPage from "../../pageobjects/indexPage";

const pages: any = {
  login: loginPage,
  postDetails: postDetails,
  indexPage: indexPage,
};

const loginMember = async () => {
  const member = { username: "username", password: "password" };
  await pages.login.open();
  await pages.login.login(member.username, member.password);
};

const getColorValue = async () => {
  const createdAt = await $('.post-row-meta span:first-child');
  const foundColor = await createdAt.getCSSProperty('color');
  const colorValue = foundColor.value;
  return colorValue;
};

const color: string = 'rgba(255,0,0,1)'; //red

//Scenario: Older than five days posts in "Popular" display red timestamps

Given("I'm a logged in member", async () => {
  await loginMember();
  });

When("I go to the main page and choose the Popular filter", async () => {
  await pages.postDetails.orderPopularLabel.click();
  });
  
Then("I should see posts older than five days with the timestamp in red", async () => {
  const timestampColor = await getColorValue();
  expect(timestampColor).toBe(color);
  });
  
//Scenario: Older than five days posts in "New" don't display red timestamps

Given("I'm a logged in member in scenario 2", async () => {
  await loginMember();
  });

When("I go to the main page and choose the New filter", async () => {
  await pages.postDetails.orderRecentLabel.click();
  });
  
Then("I shouldn't see posts older than five days with the timestamp in red", async () => {
  const timestampColor = await getColorValue();
  expect(timestampColor).not.toBe(color);
});

//Scenario: Older than five days posts in "Unpopular" don't display red timestamps

Given("I'm a logged in member in scenario 3", async () => {
  await loginMember();
  });

When("I go to the main page and choose the Unpopular filter", async () => {
  await pages.postDetails.orderUnpopularLabel.click();
  });

Then("I shouldn't see posts older than five days with a red timestamp", async () => {
  const timestampColor = await getColorValue();
  expect(timestampColor).not.toBe(color);
});

//Scenario: If user isn't logged in, timestamps aren't displayed in red.

Given("I'm not logged in", async () => {
  await pages.indexPage.logoutButton.click(); // Ensure user isn't a logged in member.
});

When("I go to the main page and choose the Popular filter in scenario 4", async () => {
  await pages.postDetails.orderPopularLabel.click();
  });

Then("I shouldn't see posts older than five days with the timestamp in red in scenario 4", async () => {
    const timestampColor = await getColorValue();
    expect(timestampColor).not.toBe(color);
  });
  


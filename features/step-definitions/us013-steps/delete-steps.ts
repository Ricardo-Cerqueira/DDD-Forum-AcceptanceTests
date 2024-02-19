import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "@wdio/globals";
import loginPage from "../../pageobjects/login.page";
import memberDetails from "../../pageobjects/memberDetails.page";
import submitPost from "../../pageobjects/submitPost.page";
import postDetails from "../../pageobjects/postDetails.page";
import statisticsPage from "../../pageobjects/statistics.page";

const loginAsMemberWithAPost = async () => {
  await pages.login.open();
  await pages.login.login(memberTwo.username, memberTwo.password);
  await pages.submitPost.preparePost(postTitle, postBody);
};

const loginAsMember = async () => {
  await pages.login.open();
  await pages.login.login(member.username, member.password);
};

const navigateToMemberProfile = async () => {
  try {
    await pages.memberPage.loggedMemberProfile();
    // Optionally, add a check to confirm navigation was successful
    const currentUrl = await browser.getUrl();
    console.log(`Navigated to URL: ${currentUrl}`);
  } catch (error) {
    console.error(`Error navigating to member profile: ${error}`);
    // Handle the error appropriately or rethrow to fail the test
    throw error;
  }
};

// Scenario: Successful account deletion
Given(
  "I am logged in as a member without any posts or comments",
  loginAsMember
);

When(
  "I click on the member page button and am redirected to the member page one",
  navigateToMemberProfile
);

Then("I click on the delete account button to delete member one", async () => {
  await pages.memberPage.deleteMemberProfile();
});

Then(
  "I should see a confirmation message {string}",
  async (expectedSuccessMessage: string) => {
    const actualMessage = await pages.memberPage.getToastMessage();
    await expect(actualMessage).toBe(expectedSuccessMessage);
  }
);

// Scenario: Unsuccessful account deletion

Given("I am logged in as a member which makes a post", loginAsMemberWithAPost);

When("I click on the member page button and am redirected to the member page two", navigateToMemberProfile);

Then("I click on the delete account button to delete member two", async () => {
  await pages.memberPage.deleteMemberProfile();
});

Then(
  "I should see an error message {string}",
  async (expectedSuccessMessage: string) => {
    const actualMessage = await pages.memberPage.getToastMessage();
    await expect(actualMessage).toBe(expectedSuccessMessage);
  }
);

//utils

const pages: any = {
  login: loginPage,
  memberPage: memberDetails,
  submitPost: submitPost,
  postDetails: postDetails,
  statisticsPage: statisticsPage,
};

const member = {
  username: "RicardoCerqueir",
  email: "ricardocerqueira@dddforum.com",
  password: "'1222642.",
};

const memberTwo = {
  username: "PauloTeixeira",
  email: "pauloteixeira@dddforum.com",
  password: "'1222013.",
};

const postTitle = "Test Post";
const postBody =
  "TestBodyWhichIReallyReallyHopeAndWouldVeryMuchAppreciateIfItWorks";

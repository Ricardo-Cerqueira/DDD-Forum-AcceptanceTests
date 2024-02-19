import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "@wdio/globals";

import * as utils from "../../pageobjects/utils";

Given("a logged-in member with one post and one comment", async () => {
  await utils.pages.login.open();
  await utils.pages.login.login(utils.member.username, utils.member.password);
});

When("I click on the member page button", async () => {
  await utils.pages.memberPage.loggedMemberProfile();
});

Then("I should see the member's username and email displayed", async () => {
  const actualUsername = await utils.pages.memberPage.memberName.getText();
  const actualEmail = await utils.pages.memberPage.memberEmail.getText();

  await expect(actualUsername).toBe(utils.member.username);
  await expect(actualEmail).toBe(utils.member.email);
});

Then("the count of posts and comments should be visible", async () => {
  const amountOfPosts = await utils.pages.memberPage.numberOfPosts.getText();
  const amountOfComments = await utils.pages.memberPage.numberOfComments.getText();

  await expect(amountOfPosts).toBe("1");
  await expect(amountOfComments).toBe("2");
});

// Scenario#2
let username: string;
Given("I am logged in as a member", async () => {
  await utils.pages.login.open();
  await utils.pages.login.login(utils.member.username, utils.member.password);
});

When(/^I navigate to the profile page of "(.*)" via a post (.*) link$/, async (user, postId) => {
  username = user;
  await utils.pages.postDetails.clickElementInPost(postId, "#post-author-link");
});

Then(/^I should see the other member's username and (.*) displayed$/, async (email) => {
  const actualUsername = await utils.pages.memberPage.memberName.getText();
  const actualEmail = await utils.pages.memberPage.memberEmail.getText();

  await expect(actualUsername).toBe(username);
  await expect(actualEmail).toBe(email);
});

Then(/^the count of posts: (.*) and comments: (.*) for the other member should be visible$/, async (posts, comments) => {
  const amountOfPosts = await utils.pages.memberPage.numberOfPosts.getText();
  const amountOfComments = await utils.pages.memberPage.numberOfComments.getText();

  await expect(amountOfPosts).toBe(posts);
  await expect(amountOfComments).toBe(comments);
});

// Scenario#3
Given("I am newly registered user in the Forum", async () => {
  await utils.pages.registerPage.open();
  await utils.pages.registerPage.register(utils.member2.email, utils.member2.username, utils.member2.password);
});

When("I navigate to my profile page", async () => {
  await utils.pages.memberPage.loggedMemberProfile();
});

Then("I should see the user's username and email displayed", async () => {
  const actualUsername = await utils.pages.memberPage.memberName.getText();
  const actualEmail = await utils.pages.memberPage.memberEmail.getText();

  await expect(actualUsername).toBe(utils.member2.username);
  await expect(actualEmail).toBe(utils.member2.email);
});

Then("the count of posts and comments empty", async () => {
  const amountOfPostsExist = await utils.pages.memberPage.numberOfPosts.getText();
  const amountOfCommentsExist = await utils.pages.memberPage.numberOfComments.getText();

  await expect(amountOfPostsExist).toBe("");
  await expect(amountOfCommentsExist).toBe("");
});

//Scenario#4 

Given("a registered member logs in", async () => {
  await utils.pages.login.open();
  await utils.pages.login.login(utils.member.username, utils.member.password);
});

When("I brower to my own profile page", async () => {
  await utils.pages.memberPage.loggedMemberProfile();
});

Then("I should see the user's rank one name that should be {string}", async (expectedResultUser:string) => {
  const actualRankOneUser = await utils.pages.memberPage.rankOneUser.getText();
  await expect(actualRankOneUser).toBe(expectedResultUser);
  
});

Then("the count of posts should be {string} and the comments should be {string}", async (expectedResultComments:string, expectedResultPosts:string) => {
  const actualCommentsNumber = await utils.pages.memberPage.userWithMoreComments.getText();
  const actualPostsNumber = await utils.pages.memberPage.userWithMorePosts.getText();

  await expect(actualCommentsNumber).toBe(expectedResultComments);
  await expect(actualPostsNumber).toBe(expectedResultPosts);
});
import { Given, When, Then } from "@wdio/cucumber-framework";
import indexPage from "../../pageobjects/indexPage";
import loginPage from "../../pageobjects/login.page";
import submitPost from "../../pageobjects/submitPost.page";
import postDetails from "../../pageobjects/postDetails.page";

const pages: any = {
  login: loginPage,
  submitPost: submitPost,
  postDetails: postDetails,
  indexPage: indexPage,
};

const member = {
  username: "RecentPosts",
  password: "RecentPosts",
};

const redColor: string = "rgba(255,0,0,1)"; //red
const noColor: string = "rgba(0,0,0,0)"; //red

const loginMember = async () => {
  await pages.login.open();
  await pages.login.login(member.username, member.password);
};

// 1 - Post with highest number of comments
Given("the member logs in on the webppage", async () => {
  await loginMember();
});

When("the option to sort by new is selected", async () => {
  await pages.postDetails.orderRecentLabel.click();
  await browser.pause(2000);
});
When("there is a post title {string}", async (title) => {
  await pages.indexPage.getPostByTitle(title);
});

Then("the post with this title should not have background color", async () => {
  const postContainer = await $("#root > div > div > div:nth-child(6)");
  const computedStyle = await postContainer.getCSSProperty("background-color");
  const backgroundColor = computedStyle.value;
  expect(backgroundColor).toBe(noColor);
});

// 2 - Post with more than 1/3 whitout background color
Given("the member is logged on the webppage", async () => {
  await loginMember();
});

When("he selects the option to sort by new", async () => {
  await pages.postDetails.orderRecentLabel.click();
  await browser.pause(2000);
});
When("there is a post with a title {string}", async (title) => {
  await pages.indexPage.getPostByTitle(title);
});

Then("this one should not have background color", async () => {
  const postContainer = await $("#root > div > div > div:nth-child(7)");
  const computedStyle = await postContainer.getCSSProperty("background-color");
  const backgroundColor = computedStyle.value;
  expect(backgroundColor).toBe(noColor);
});

// 3 - Post with more than 2 comments should not have background color
Given("the member logs in", async () => {
  await loginMember();
});

When("the member selects the sort by new filter", async () => {
  await pages.postDetails.orderRecentLabel.click();
  await browser.pause(2000);
});
When("there is a post with the title {string}", async (title) => {
  await pages.indexPage.getPostByTitle(title);
});

Then("this post should not display background color", async () => {
  const postContainer = await $("#root > div > div > div:nth-child(8)");
  const computedStyle = await postContainer.getCSSProperty("background-color");
  const backgroundColor = computedStyle.value;
  expect(backgroundColor).toBe(noColor);
});

// 4 - Highlight posts with 1 comment with red background
Given("the member is logged in", async () => {
  await loginMember();
});

When("member selects option to sort by new posts", async () => {
  await pages.postDetails.orderRecentLabel.click();
  await browser.pause(2000);
});
When("the member views the post with title {string}", async (title) => {
  await pages.indexPage.getPostByTitle(title);
});

Then("the post should display red-background", async () => {
  const postContainer = await $("#root > div > div > div:nth-child(9)");
  const computedStyle = await postContainer.getCSSProperty("background-color");
  const backgroundColor = computedStyle.value;
  expect(backgroundColor).toBe(redColor);
});

// 5 - Highlight posts with no comment with red background
Given("the member is logged in on the dddforum webpage", async () => {
  await loginMember();
});

When("member selects sort by new posts option", async () => {
  await pages.postDetails.orderRecentLabel.click();
  await browser.pause(2000);
});
When("member views a post with the title {string}", async (title) => {
  await pages.indexPage.getPostByTitle(title);
});

Then("this post should display red-background", async () => {
  const postContainer = await $("#root > div > div > div:nth-child(10)");
  const computedStyle = await postContainer.getCSSProperty("background-color");
  const backgroundColor = computedStyle.value;
  expect(backgroundColor).toBe(redColor);
});

// 6 - Visitor can not see highlighted background posts
Given("the visitor is on the dddforum webpage", async () => {
  // await pages.login.openAsVisitor();
  await pages.indexPage.logoutButton.click()
});

When("visitor selects sort by new posts option", async () => {
  await pages.postDetails.orderRecentLabel.click();
  await browser.pause(2000);
});

Then("this posts should not have highlighted background", async () => {
  const postContainer1 = await $("#root > div > div > div:nth-child(6)");
  const postContainer2 = await $("#root > div > div > div:nth-child(7)");
  const postContainer3 = await $("#root > div > div > div:nth-child(8)");
  const postContainer4 = await $("#root > div > div > div:nth-child(9)");
  const postContainer5 = await $("#root > div > div > div:nth-child(10)");

  const computedStyle1 = await postContainer1.getCSSProperty(
    "background-color"
  );
  const computedStyle2 = await postContainer2.getCSSProperty(
    "background-color"
  );
  const computedStyle3 = await postContainer3.getCSSProperty(
    "background-color"
  );
  const computedStyle4 = await postContainer4.getCSSProperty(
    "background-color"
  );
  const computedStyle5 = await postContainer5.getCSSProperty(
    "background-color"
  );

  const backgroundColor1 = computedStyle1.value;
  const backgroundColor2 = computedStyle2.value;
  const backgroundColor3 = computedStyle3.value;
  const backgroundColor4 = computedStyle4.value;
  const backgroundColor5 = computedStyle5.value;

  expect(backgroundColor1).toBe(noColor);
  expect(backgroundColor2).toBe(noColor);
  expect(backgroundColor3).toBe(noColor);
  expect(backgroundColor4).toBe(noColor);
  expect(backgroundColor5).toBe(noColor);
});

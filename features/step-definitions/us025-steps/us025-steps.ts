import { Given, When, Then, BeforeAll,} from "@wdio/cucumber-framework";
import indexPage from "../../pageobjects/indexPage";
import loginPage from "../../pageobjects/login.page";
import submitPost from "../../pageobjects/submitPost.page";
import postDetails from "../../pageobjects/postDetails.page";
import us025seed from "../../../database/seeds/us025-seed";


BeforeAll(async () => {
    await us025seed();
  });

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

const loginMember = async () => {
  await pages.login.open();
  await pages.login.login(member.username, member.password);
};

// 1 - Post created 3 days ago from current date should have yellow background
Given("the member logs in on the webppage", async () => {
  await loginMember();
});

When("the option to sort by new is selected", async () => {
  await pages.indexPage.clickFilterButton("New");
  await browser.pause(2000);
});
When("there is a post title {string}", async (titleOne:string) => {
  await pages.indexPage.getPostByTitle(titleOne);
});

Then("the date text should be yellow", async () => {
    async (title:string,) => {
        const expectedColor = "#daa520"; // The hex code for golden yellow;
        await pages.indexPage.assertDateMetaColor(
          title,
         expectedColor
        );
        await browser.pause(2000);
      }
});

// Scenario: 2 - Post created 6 days ago from current date should have yellow background
Given("the member logs on the web page", async () => {
  await loginMember();
});

When("select the option to sort by new", async () => {
  await pages.indexPage.clickFilterButton("New");
  await browser.pause(2000);
});
When("there is a post with title {string}", async (titleTwo:string) => {
  await pages.indexPage.getPostByTitle(titleTwo);
});

Then("the date text should appear yellow", async () => {
    async (title:string,) => {
        const expectedColor = "#daa520"; // The hex code for golden yellow;
        await pages.indexPage.assertDateMetaColor(
          title,
         expectedColor
        );
        await browser.pause(2000);
      }
});

  // Scenario: 3 - Post created 4 days ago from current date should have yellow background
Given("the member is logged in on the index", async () => {
    await loginMember();
  });
  When("the member logs out", async () => {
    await browser.pause(2000);
    await pages.indexPage.clickLogout();
    await browser.pause(10000);
  });

When("selects the option to sort posts by new", async () => {
  await pages.indexPage.clickFilterButton("New");
  await browser.pause(2000);
});

Then("a post with title {string} should NOT display yellow", async (title:string) => {
  const expectedColor = "#000000"; // The hex code for black;

  // Ensure that the element is present before asserting its color
  await pages.indexPage.getPostByTitle(title);

  // Assert that the date text should not have the yellow color
  await pages.indexPage.assertDateMetaColor(title, expectedColor);

  // You may also want to add a wait here to ensure the color is updated if needed
  await browser.pause(2000);
});

  
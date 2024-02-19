import { Given, When, Then, BeforeAll, AfterAll } from "@wdio/cucumber-framework";
import indexPage from "../../pageobjects/indexPage";
import loginPage from "../../pageobjects/login.page";
import submitPost from "../../pageobjects/submitPost.page";
import postDetails from "../../pageobjects/postDetails.page";
import { exec } from 'child_process';
import us026seed from "../../../database/seeds/us026-seed";


BeforeAll(async () => {
  await new Promise((resolve, reject) => {
    exec('npm run db:delete:post', (error, stdout) => {
      if (error) {
        console.error(`Error during cleanup: ${error}`);
        reject(error);
      } else {
        console.log('Database cleanup completed');
        resolve(stdout);
      }
    });
  });
});

BeforeAll(async () => {
  await us026seed();
});

BeforeAll(async () => {
  await pages.login.open();
  await pages.login.login(member.username, member.password);
  await pages.submitPost.preparePost(postTitleOne, postBodyOne);
  await pages.submitPost.preparePost(postTitleTwo, postBodyTwo);
  await pages.postDetails.addComment(
    0,
    "Test comment with enough characters, 20 iirc"
  );
  await browser.pause(5000);
  await pages.postDetails.clickBackToAllDiscussions();
  await browser.pause(2000);
});

const loginMemberOnIndexPage = async () => {
  await pages.login.open();
  await pages.login.login(member.username, member.password);
};

// Scenario steps
//Scenario: Verify Highlighting on Post Without Comments on Popular Posts
Given("the member is logged in on the index page", loginMemberOnIndexPage);

When("the member presses the popular filter", async () => {
  await browser.pause(2000);
});
When("the member views the post with title {string}", async (title) => {
  await pages.indexPage.getPostByTitle(title);
});

Then(
  "the post with title {string} should display a purple text stating {string}",
  async (title, expectedText) => {
    const expectedColor = "#800080"; // The hex code for purple;
    await pages.indexPage.assertCommentMeTextAndColor(
      title,
      expectedText,
      expectedColor
    );
    await browser.pause(2000);
  }
);

//Scenario: Verify Highlighting on Post With Comments on Popular Posts
Given("the member logged in on the index page", loginMemberOnIndexPage);
Then(
  "the post with title {string} should NOT display text saying {string}",
  async (title, expectedAbsentText) => {
    await pages.indexPage.assertTextNotPresentInPost(title, expectedAbsentText);
  }
);

//Scenario: Verify no Highlighting on Post With Comments on Recent Filter
Given("the member logged on the index page", loginMemberOnIndexPage);
When("the member presses the recent filter", async () => {
  await pages.indexPage.clickFilterButton("New");
  await browser.pause(2000);
});
When("the member views the post with the title {string}", async (title) => {
  await pages.indexPage.getPostByTitle(title);
});
Then(
  "post with title {string} should NOT display text stating {string}",
  async (title, expectedAbsentText) => {
    await pages.indexPage.assertTextNotPresentInPost(title, expectedAbsentText);
    //await browser.pause(2000);
  }
);

// Scenario: Verify no Highlighting on Post With Comments on Unpopular Filter
Given("the member is logged on the index page", loginMemberOnIndexPage);
When("the member presses the unpopular filter", async () => {
  await pages.indexPage.clickFilterButton("Unpopular");
  await browser.pause(2000);
});

When("the member views the post {string}", async (title) => {
  await pages.indexPage.getPostByTitle(title);
  await browser.pause(2000);
});

Then(
  "post with a title {string} should NOT display text stating {string}",
  async (title, expectedAbsentText) => {
    await pages.indexPage.assertTextNotPresentInPost(title, expectedAbsentText);
    await browser.pause(2000);
  }
);

// Scenario: Verify Link Redirects to Post
Given("the member is logged in on index page", loginMemberOnIndexPage);
When("the member press the popular filter", async () => {
  await pages.indexPage.clickFilterButton("Popular");
  await browser.pause(2000);
});

When(
  "the member clicks on the Please comment me text of a post without comments",
  async () => {
    await pages.indexPage.clickCommentMeButton();
    await browser.pause(2000);
  }
);

Then(
  "the member should be redirected to the post with title {string}",
  async (title) => {
    await pages.postDetails.assertTitle(title);
  }
);

// Scenario: Verify Functionality for Non-Logged-In Users
Given("the member is logged in on the index", loginMemberOnIndexPage);
When("the member logs out", async () => {
  await browser.pause(2000);
  await pages.indexPage.clickLogout();
  await browser.pause(10000);
});

When("presses popular filter", async () => {
  await pages.indexPage.clickFilterButton("Popular");
  await browser.pause(2000);
});

Then(
  "a post with title {string} should NOT display {string} text",
  async (title, expectedAbsentText) => {
    await pages.indexPage.assertTextNotPresentInPost(title, expectedAbsentText);
  }
);

AfterAll(async () => {
  await new Promise((resolve, reject) => {
    exec('npm run db:delete:post', (error, stdout) => {
      if (error) {
        console.error(`Error during cleanup: ${error}`);
        reject(error);
      } else {
        console.log('Database cleanup completed');
        resolve(stdout);
      }
    });
  });
}); 

// Helper functions or objects

const pages: any = {
  login: loginPage,
  submitPost: submitPost,
  postDetails: postDetails,
  indexPage: indexPage,
};

const member = {
  username: "test12",
  password: "password",
};

const postTitleOne = "Show me purple";
const postBodyOne =
  "TestBodyWhichIReallyReallyHopeAndWouldVeryMuchAppreciateIfItWorks";

const postTitleTwo = "Dont show me purple";
const postBodyTwo =
  "TestBodyWhichIReallyReallyHopeAndWouldVeryMuchAppreciateIfItWorks";

import registerPage from "./register.page";
import loginPage from "./login.page";
import memberDetails from "./memberDetails.page";
import submitPost from "./submitPost.page";
import postDetails from "./postDetails.page";
import statistics from "./statistics.page";
import { faker } from "@faker-js/faker";

async function newPageLoading(id: string) {
  const newPageSubmitButton = await $(id);
  await newPageSubmitButton.waitForDisplayed({
    timeout: 6000,
    timeoutMsg: "Expected the submit button to be displayed after the page load",
  });
}

const pages: any = {
  registerPage: registerPage,
  login: loginPage,
  memberPage: memberDetails,
  submitPost: submitPost,
  postDetails: postDetails,
  statistics: statistics,
};

const member = { username: "PauloTeixeira", email: "pauloteixeira@dddforum.com", password: "'1222013." };

const mainPage: string = ".post-filter.active";
const statisticsPage: string = "#dateInput_0";
const statisticsFlash: string = ".Toastify__toast-body";
const statisticsFlashError: string = "Inserted date is not valid, please refresh and try again 😎";

const mDetails = { firstName: "jeanne", lastName: "doe" };
const member2 = { username: faker.internet.userName(), email: faker.internet.email(mDetails), password: faker.internet.password() };

const dateBox = { averageComments: 0, averagePosts: 1, mostCommented: 2, topMembers: 3, inactive: 4, postPercentage: 5 };

export { newPageLoading, pages, member, member2, mainPage, dateBox, statisticsPage, statisticsFlash, statisticsFlashError };

/*export async function performDynamicAction(postRows: any[], posID: number, element: string, action: string): void {
  const post = postRows[posID];

  if (post && post[element]) {
    switch (action) {
      case "click":
        post[element].click();

      case "getValue":
        const value = post[element].getValue();

        break;

      case "setValue":
        post[element].setValue("yourValue");

        break;
    }
  }
}*/

import Page from "./page";

class indexPage extends Page {

    get postRows() {
        return $$(".post-row");
      }
    
    get filterButtons() {
        return $$("div.post-filter");
    }

    get commentMeButton() {
        return $("a.comment-link span.purple-text");
    }

    get logoutButton() {
        return $("div.button > span > u:nth-child(2)");
      }

    public async clickFilterButton(filterName:string) {
        const buttons = await this.filterButtons;
        for (const button of buttons) {
            const text = await button.getText();
            if (text === filterName) {
                await browser.execute("arguments[0].click();", button);
                break;
            }
        }
    }

    public async clickCommentMeButton() {
        await this.commentMeButton.waitForClickable({ timeout: 5000 });
        await this.commentMeButton.click();
    }

    public async getPostByTitle(title: string) {
        const posts = await this.postRows;
        for (const post of posts) {
            const text = await post.getText();
            if (text.includes(title)) {
                return post;
            }
        }
    }

    public async assertCommentMeTextAndColor(title: string, expectedText: string, expectedColor: string) {
        const post = await this.getPostByTitle(title);
        if (!post) {
            throw new Error(`Post with title "${title}" not found`);
        }
    
        const commentMe = await post.$(".purple-text");
        await expect(commentMe).toBeDisplayed();
 
        const actualText = await commentMe.getText();
        expect(actualText).toEqual(expectedText);

        const colorProperty = await commentMe.getCSSProperty('color');
        const actualColor = colorProperty.parsed.hex; // or rgba, depending on what getCSSProperty returns
        expect(actualColor).toEqual(expectedColor); // Replace with your assertion library's syntax
    }
    
    public async assertTextNotPresentInPost(title: string, expectedAbsentText: string) {
        const post = await this.getPostByTitle(title);
        if (!post) {
            throw new Error(`Post with title "${title}" not found`);
        }
    
        const postText = await post.getText();
        const isTextPresent = postText.includes(expectedAbsentText);
        expect(isTextPresent).toBe(false);
    }

    public async assertDateMetaColor(title: string, expectedColor: string) {
        const post = await this.getPostByTitle(title);
        if (!post) {
            throw new Error(`Post with title "${title}" not found`);
        }
    
        const dateSpan = await post.$('.post-row-meta span');
        await expect(dateSpan).toBeDisplayed();
    
        const colorProperty = await dateSpan.getCSSProperty('color');
        const actualColor = colorProperty.parsed.hex; // or rgba, depending on what getCSSProperty returns
        expect(actualColor).toEqual(expectedColor); // Replace with your assertion library's syntax
    }
    

    public async clickLogout() {
        await this.logoutButton.waitForClickable({ timeout: 5000 });
        await this.logoutButton.click();
      }
    
    
}

export default new indexPage();
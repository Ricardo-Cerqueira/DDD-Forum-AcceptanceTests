Feature: US 026 - Highlight Posts Without Comments

    Scenario: Verify Highlighting on Post Without Comments on Popular Posts
        Given the member is logged in on the index page
        When the member presses the popular filter
        And the member views the post with title "Show me purple"
        Then the post with title "Show me purple" should display a purple text stating "Please comment me"

    Scenario: Verify Highlighting on Post With Comments on Popular Posts
        Given the member logged in on the index page
        Then the post with title "Dont show me purple" should NOT display text saying "Please comment me"

    Scenario: Verify no Highlighting on Post With Comments on Recent Filter
        Given the member logged on the index page
        When the member presses the recent filter
        And the member views the post with the title "Show me purple"
        Then post with title "Show me purple" should NOT display text stating "Please comment me"

    Scenario: Verify no Highlighting on Post With Comments on Unpopular Fitler
        Given the member is logged on the index page
        When the member presses the unpopular filter
        And the member views the post "Show me purple"
        Then post with a title "Show me purple" should NOT display text stating "Please comment me"

    Scenario: Verify Link Redirects to Post
        Given the member is logged in on index page
        When the member press the popular filter
        And the member clicks on the Please comment me text of a post without comments
        Then the member should be redirected to the post with title "Show me purple"

    Scenario: Verify Functionality for Non-Logged-In Users
        Given the member is logged in on the index
        When the member logs out
        And presses popular filter
        Then a post with title "Show me purple" should NOT display "Please comment me" text
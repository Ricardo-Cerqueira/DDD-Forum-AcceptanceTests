Feature: View average comments per day

    Scenario: View statistics page
        Given I am a logged-in member
        When I navigate to the statistics page
        Then I should see a label "Average Comments on a Specific Date"
        And I should see a form with a date input and a submit button
        And I should see a refresh button

    Scenario: Calculate average comments for a specific day
        Given I am a logged-in member on the statistics page
        When I enter a valid date in the format "YYYY-MM-DD" and submit the form
        Then I should see the average number of comments per post on that day
        And the result should be calculated according to the formula "total number of comments on that day / number of instances or posts on that day"

    Scenario: Calculate average comments for a different day
        Given I am a logged-in member on the statistics page
        When I enter a different valid date in the format "YYYY-MM-DD" and submit the form
        Then I should see the average number of comments per post on that day
        And the result should be calculated according to the formula "total number of comments on that day / number of instances or posts on that day"

    Scenario: Calculate average comments for an invalid date
        Given I am a logged-in member on the statistics page
        When I enter an invalid date in the format "YYYY-MM-DD" and submit the form
        Then I should see an error message "Invalid date format"

    Scenario: Refresh statistics
        Given I am a logged-in member on the statistics page
        When I click the refresh button
        Then the statistics should be updated

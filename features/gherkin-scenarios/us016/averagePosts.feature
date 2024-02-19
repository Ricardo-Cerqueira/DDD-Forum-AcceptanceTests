Feature: US016 -  View average of posts per day


 Scenario: Get average of posts for a valid date

        Given I am a logged-in member on the statistics page
        When I enter a valid date in the format "2023-11-11" and submit the form
        Then the system should calculate average of posts and display "Result: 3.5"

 Scenario: Get average of posts for a day without posts

        Given I am a logged-in member at the statistics page
        When I enter a valid date "2022-11-11" and submit
        Then the system should display "Result: No data found"

 Scenario: Get average of posts for an invalid date

        Given I am logged in member on the statistics page
        When I enter an invalid date "01-01-2023" and submit the form
        Then the message "Inserted date is not valid, please refresh and try again 😎" should be displayed

 Scenario: Refresh statistics button

        Given I'm a logged-in member on the statistics page
        When I enter a valid date "2023-11-11" and click on submit button and refresh button
        Then the text date field must be reseted "" and the result should be "Result:"
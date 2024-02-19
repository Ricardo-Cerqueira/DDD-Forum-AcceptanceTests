Feature: US 020 - View Percentage of Posts Without Comments

    Scenario: Member submits valid date
        Given the member is on the statistics page
        When the member enters a valid date in the format "2023-11-16" and clicks on submit
        Then the system should calculate and display the "Result: 100".

    Scenario: Member submits data with no records
        Given the Member is on the statistics Page
        When the member enters a data with no posts "1994-11-21" and clicks on submit
        Then the system should display a "Result: No data found" message

    Scenario: Member submits invalid data
        Given The member is on Statistics page
        When the member enters an invalid date "2023-1-" and clicks on submit
        Then the system should display a flash message "Inserted date is not valid, please refresh and try again 😎"

    Scenario: Entering a specific date with valid data and clicking the refresh button
        Given The member is on Statistics page already
        When the member enters the date "2023-06-29" clicks submit button for box 2 and the refresh button
        Then the date field text must be "" and the result must be "Result:"
Feature: View Average Comments Per Day

  Scenario Outline: Member submits valid date
    Given the member is on the statistics page
    When the member enters a valid date in the format "2023-06-26"
    And the member clicks the submit button
    Then the system should calculate and display the "Result: 5.0" rounded with one decimal

  Scenario Outline: Member submits data with no records

    Given the Member is on the Statistics Page
    When the member enters a valid date in the format "1994-11-21" with no existing comments and posts
    And member clicks the submit button
    Then the system should display a "Result: No data found" message

  Scenario Outline: Member submits invalid data

    Given The member is on statistics page
    When the member enters an invalid date "2023-1-"
    And The member clicks submit
    Then the system should display a flash message "Inserted date is not valid, please refresh and try again 😎"
    And the system should not display any result: "Result:"

  Scenario Outline: Member submits valid data and refreshes results

    Given The Member is on The Statistics Page
    When the member enters a valid date in the format "2023-06-26"
    And The Member Clicks the submit button
    And the member clicks the refresh button
    Then both date fields and result fields are empty
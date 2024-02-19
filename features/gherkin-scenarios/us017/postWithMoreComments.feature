Feature: US 017 - View the  title of the post with more comments on a specific date 

 Scenario: Entering a specific date with no data for box 2
 
    Given a logged-in member
    When I click on the statistics page button
    And I enter the date "2023-11-10" and click submit for box 2
    Then the result for box 2 should be "Result: No data found"

 Scenario: Entering a specific date with valid data for box 2
 
    Given a member logged-in
    When the member clicks on the statistics page 
    And the member enters the date "2023-06-26" and clicks submit for box 2
    Then the result for box 2 must be "Result: Dream TeSTer"

 Scenario: Entering a specific date and clicking the refresh button
 
    Given a member to login
    When the member clicks on the statistics page button
    And the member enters the date "2023-07-04" and clicks refresh button for box 2
    Then the date text field for box 2 must be ""

 Scenario: Entering a specific date with valid data and clicking the refresh button
 
    Given a member to login
    When the member clicks on the statistics page button
    And the member enters the date "2023-06-29" clicks submit button for box 2 and the refresh button
    Then the date field text must be "" and the result must be "Result:"

 Scenario Outline: Entering an invalid date and clicking the submit button

    Given a member is registered
    When the member goes statistics page
    And enters the date "12345" in box 2 and clicks the submit button
    Then an error message should be displayed with the text "Inserted date is not valid, please refresh and try again 😎"
  
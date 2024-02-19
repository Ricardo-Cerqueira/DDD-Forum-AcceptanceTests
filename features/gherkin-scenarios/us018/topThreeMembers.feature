Feature: US018 - View top 3 Commenting Members for a Specific Day

 Scenario: Get the top three commenting members for a specific day
       Given I'm a logged in member in the statistics page 
       When I enter the statistics page, type the date "2023-11-13" and click submit for box 3
       Then The result for box 3 should be "Result: RitaCastro, NatalyLucas, PauloTeixeira"

Scenario: Get the top three commenting members for a specific day without a top three
       Given I'm a logged in member in the statistics page in scenario 2
       When I enter the statistics page, type the date "2023-11-10" and click submit for box 3 in scenario 2
       Then The result for two for box 3 should be "Result: There isn't a top three for this date" in scenario 2

Scenario: Get the top three commenting members for an invalid date
       Given I'm a logged in member in the statistics page in scenario 3
       When I enter an invalid date "222" and click submit for box 3 in scenario 3
       Then The message "Inserted date is not valid, please refresh and try again 😎" should be displayed
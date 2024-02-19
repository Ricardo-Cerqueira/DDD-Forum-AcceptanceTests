Feature: US 025 - Display color yellow on Recent Posts Filter

Scenario: 1 - Post created 3 days ago from current date should have yellow text
    Given the member logs in on the webppage
    When the option to sort by new is selected
    And there is a post title "Yellow Post 3 days ago"
    Then the date text should be yellow

Scenario: 2 - Post created 6 days ago from current date should have yellow text
    Given the member logs on the web page
    When select the option to sort by new 
    And there is a post with title "Yellow Post 6 days ago"
    Then the date text should appear yellow

Scenario: 3 - Post created 4 days ago from current date should not have yellow text
    Given the member is logged in on the index
    When the member logs out
    And selects the option to sort posts by new
    Then a post with title "Yellow Post 4 days ago" should NOT display yellow
 
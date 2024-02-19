Feature: US022 - Recent posts highlighted with a red background

Scenario: 1 - Post with highest number of comments
    Given the member logs in on the webppage
    When the option to sort by new is selected
    And there is a post title "Most Commented Post"
    Then the post with this title should not have background color

Scenario: 2 - Post with more than 1/3 whitout background color
    Given the member is logged on the webppage
    When he selects the option to sort by new
    And there is a post with a title "Post with more than 1/3"
    Then this one should not have background color

Scenario: 3 - Post with more than 2 comments should not have background color
    Given the member logs in
    When the member selects the sort by new filter
    And there is a post with the title "Post with 2 comments testing superior limit"
    Then this post should not display background color

Scenario: 4 - Highlight posts with 1 comment with red background
    Given the member is logged in
    When member selects option to sort by new posts
    And the member views the post with title "Post with 1 comment testing inferior limit"
    Then the post should display red-background

Scenario: 5 - Highlight posts with no comment with red background
    Given the member is logged in on the dddforum webpage
    When member selects sort by new posts option
    And member views a post with the title "Post with no comments testing inferior limit"
    Then this post should display red-background

Scenario: 6 - Visitor can not see highlighted background posts
    Given the visitor is on the dddforum webpage
    When visitor selects sort by new posts option
    Then this posts should not have highlighted background

  
  

 




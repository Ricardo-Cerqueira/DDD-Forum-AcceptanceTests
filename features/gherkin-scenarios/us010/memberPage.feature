Feature: View Member Profile

  Scenario Outline: Display Member's Own Profile Information

    Given a logged-in member with one post and one comment
    When I click on the member page button
    Then I should see the member's username and email displayed
    And the count of posts and comments should be visible

  Scenario: View Another Member's Profile Information

    Given I am logged in as a member
    When I navigate to the profile page of "<other_member_username>" via a post <postId> link
    Then I should see the other member's username and <email> displayed
    And the count of posts: <posts> and comments: <comments> for the other member should be visible

      Examples:
      | other_member_username | email                              | posts | comments | postId |
      | LuísAfonso            | luisafonso@dddforum.com            | 1     | 4        | 0      |
      | AmbrosioDoChoco       | ambrosiodoschocolates@dddforum.com | 2     | 6        | 14     |

 
  Scenario: View Profile Information of Newly Registered User

    Given I am newly registered user in the Forum
    When I navigate to my profile page
    Then I should see the user's username and email displayed
    And the count of posts and comments empty

    Scenario: View Profile Information of rank One User

    Given a registered member logs in
    When I brower to my own profile page 
    Then I should see the user's rank one name that should be "AmbrosioDoChoco"
    And the count of posts should be "2" and the comments should be "6"
Feature: US 13 - Delete an account

  Scenario: Successful account deletion
    Given I am logged in as a member without any posts or comments
    When I click on the member page button and am redirected to the member page one
    Then I click on the delete account button to delete member one
    Then I should see a confirmation message "User deleted successfully! 🎉"

  Scenario: Unsuccessful account deletion due to existing posts or comments
    Given I am logged in as a member which makes a post
    When I click on the member page button and am redirected to the member page two
    Then I click on the delete account button to delete member two
    Then I should see an error message "Oops! Couldn't delete user. 🙁"

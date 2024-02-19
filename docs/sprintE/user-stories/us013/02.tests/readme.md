# US 013 - Delete

## 1. Tests

### Test 1: Successfully delete a user account

**Preconditions:**

1. An authenticated user is logged in.
2. The user doesn't have created posts and comments.

**Test Steps:**

1. The authenticated user navigates to the profile page.
2. The user clicks on the "Delete" button.
3. The system processes the deletion request.

**Expected Result:**

- A confirmation message is displayed, indicating that the account has been successfully deleted: "User deleted. 🤠"
- The user is logged out of the system: "Logged out! 🤠".
- Attempts to log in with the deleted account credentials should fail.
- Any personal data associated with the deleted account is permanently removed.

### Test 2: Unsuccessfully delete a user account

**Preconditions:**

1. An authenticated user is logged in.
2. The user has created posts and/or comments.

**Test Steps:**

1. The authenticated user navigates to the profile page.
2. The user clicks on the "Delete" button.
3. The system processes the deletion request.

**Expected Result:**

- A prompt message is displayed, indicating that the account wasn't deleted: "User not deleted. 😬"




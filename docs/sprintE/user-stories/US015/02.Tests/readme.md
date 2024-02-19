**Test 1: Average comments calculation for a specific day with comments**

**Preconditions:**

1. The member is logged in and on the statistics page.

**Test Steps:**

1. The member selects a specific day with comments.
2. The member clicks the submit button to request the average of comments.

**Expected Result:**
The system calculates the average number of comments for the selected day and displays it to the member.

---

**Test 2: Average comments calculation for a specific day without comments**

**Preconditions:**

1. The member is logged in and on the statistics page.

**Test Steps:**

1. The member selects a specific day without comments.
2. The member clicks the submit button to request the average of comments.

**Expected Result:**
The system displays a message indicating that there are no comments for the selected day.

---

**Test 3: Average comments calculation with invalid date format**

**Preconditions:**

1. The member is logged in and on the statistics page.

**Test Steps:**

1. The member enters a date in an invalid format.
2. The member clicks the submit button to request the average of comments.

**Expected Result:**
The system displays an error message indicating that the date format is invalid.

---

**Test 4: Average comments calculation with non-member access**


**Test Steps:**

1. The non-member user attempts to access the statistics page.

**Expected Result:**
The system prevents the non-member user from accessing the statistics page and displays a message indicating that only members can access this page.

---

**Test 5: Average comments calculation with real-time updates**

**Preconditions:**

1. The member is logged in and on the statistics page.
2. The member already commented in the forum in the present day.

**Test Steps:**

1. The member selects the current day and presses submit.
2. The member makes a second comment in the forum.
2. The member clicks the refresh button to update the results.

**Expected Result:**
The system updates the average number of comments for the selected day.
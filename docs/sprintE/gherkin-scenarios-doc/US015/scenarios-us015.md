## `Feature:` View Average Comments Per Day

**_As a member,_**

**_I want to_** I want to know the average of comments for a specific day

**_so that_** I can have an idea of the engagement of the community on that day.

---

### `Background:`

_Given a registered member is logged into the platform_
_Posts and comments exist_

---

<!-- Test ID:  | AC:  -->

#### `Scenario:` Member submits valid date

**Given** the member is on the statistics page

**When** the member enters a valid date in the format "YYYY-MM-DD"

**And** the member clicks the submit button

**Then** the system should calculate and display the average comments for the specified day rounded to one decimal place

<br>

<!-- Test ID:  | AC:  -->

#### `Scenario:` Member submits data with no records

**Given** the member is on the statistics page

**When** the member enters a valid date in the format "YYYY-MM-DD" with no existing posts and comments

**And** the member clicks the submit button

**And** the system should display a "No data found" message

<br>

<!-- Test ID:  | AC:  -->

#### `Scenario:` Member submits invalid data

**Given** the member is on the statistics page

**When** the member enters an invalid date

**And** the member clicks the submit button

**Then** the system should display a flash message "Inserted date is not valid, please refresh and try again 😎"

**And** the system should not display any result

<br>

<!-- Test ID:  | AC:  -->

#### `Scenario:` Member submits valid data and refreshes results

**Given** the member is on the statistics page

**When** the member enters a valid date in the format "YYYY-MM-DD"

**And** the member clicks the submit button

**And** the member clicks the refresh button

**Then** the member clicks the refresh button

<br>

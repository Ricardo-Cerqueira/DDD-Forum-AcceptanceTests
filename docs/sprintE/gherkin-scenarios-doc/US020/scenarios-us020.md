## `Feature:` View Percentage of Posts Without Comments

**_As a member,_**

**_I want to_** know the percentage of posts without any comments for a specific day

**_so that_** I can understand the level of engagement within the community on a given day.

---

### `Background:`

_Given_ a registered member is logged into the platform

---

<!-- Test ID: 2020 | AC: AC1, AC2, AC3, AC4 -->

#### `Scenario:` View Percentage for a Day with Some Uncommented Posts

**Given** I am logged in as a member
**And** there are posts on "2021-06-15" with and without comments

**When** I input "2021-06-15" into the date text field and submit

**Then** I should see "Result: X%" displayed below the text field, where X represents the calculated percentage

<br>

<!-- Test ID: 2021 | AC: AC1, AC2, AC5 -->

#### `Scenario:` Enter Date in Invalid Format

**Given** I am logged in as a member

**When** I enter "15-06-2021" into the date text field and submit

**Then** I should be prompted with "Inserted date is not valid, please refresh and try again 😎"

<br>

<!-- Test ID: 2022 | AC: AC1, AC2, AC3, AC4, AC6 -->

#### `Scenario:` View Percentage for a Day with No Posts

**Given** I am logged in as a member
**And** there are no posts on "2021-06-17"

**When** I input "2021-06-17" into the date text field and submit

**Then** I should see "Result: No data found" displayed below the text field

<br>

<!-- Test ID: 2023 | AC: AC1, AC2, AC3, AC4 -->

#### `Scenario:` View Percentage for a Day where All Posts have Comments

**Given** I am logged in as a member
**And** all posts on "2021-06-16" have comments

**When** I input "2021-06-16" into the date text field and submit

**Then** I should see "Result: 0%" displayed below the text field
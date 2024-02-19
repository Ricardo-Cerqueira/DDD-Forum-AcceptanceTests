## `Feature:` Delete User Account

**_As a member,_**

**_I want to_** be able to delete my account,

**_so that_** I can remove my presence from the platform if I choose to.

---

### `Background:`

_Given a member is logged into their account_

<!-- Test ID: 1312 | AC: AC2 -->

#### `Scenario:` Navigate to Profile Page

**Given** the member is logged into the platform  
**When** they click on the members name
**Then** they are navigated to their profile page.

<!-- Test ID: 1313 | AC: AC3 -->

#### `Scenario:` Access Delete Option

**Given** the member is logged into the platform
**When** they click on the members name  
**Then** the delete button is visible and accessible

<!-- Test ID: 1324 | AC: AC4 -->

#### `Scenario:` Delete Account Without Any Posts or Comments

**Given** the member has not made any posts or comments  
**When** they initiate the delete account process  
**Then** their account is deleted  
**And** they are logged out

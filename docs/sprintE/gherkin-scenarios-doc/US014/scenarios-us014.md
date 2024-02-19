## `Feature:` Sort Posts by Unpopular

**_As a Visitor,_**

**_I want to_** sort posts by unpopular (ascending order),

**_so that_** I can easily find and navigate through posts based on their popularity.

---

### `Background:`

_Given the visitor has access to the DDD Forum_

<!-- Test ID: 1413 | AC: AC3 -->

#### `Scenario:` Sort Posts by Ascending Order of Popularity

**Given** the visitor is on the forum main page  
**When** they select the option to sort posts by unpopular  
**Then** the posts are listed from lowest to highest score

<!-- Test ID: 1423 | AC: AC4 -->

#### `Scenario:` Handle Posts with the Same Score and Timestamp

**Given** multiple posts have the same score and timestamp  
**When** the visitor sorts posts by unpopular  
**Then** the posts are displayed in the order they were received by the system

# US 010 - View member's profiles

## 1. Tests

### Test 1: Visitor views a member's profile from the main page

**Preconditions:**

1. Member profile exists.
2. A post exists.

**Test Steps:**

1. Visitor accesses the main page of DDD Forum.
2. Visitor clicks on the "by member name" link of a post.

**Expected Result:**
The website redirects to member profile page.

---

### Test 2: Visitor views a member's profile from a post page

**Preconditions:**

1. Member profile exists.
2. A post exists.

**Test Steps:**

1. Visitor accesses the main page of DDD Forum.
2. Selects a post.
3. Visitor clicks on the "by member name" link of the post.

**Expected Result:**
The website redirects to member profile page.

---

### Test 3: Member views their own profile from the main page

**Preconditions:**

1. Member profile exists.
2. A post exists.

**Test Steps:**

1. Member accesses the main page of DDD Forum while logged in as "member name."
2. Member clicks on the "by member name" link of a post.

**Expected Result:**
The website redirects to member profile page.

---

### Test 4: Member views their own profile from a post page

**Preconditions:**

1. Member profile exists.
2. A post exists.

**Test Steps:**

1. Member accesses the main page of DDD Forum while logged in as "member name."
2. Selects a post.
3. Member clicks on the "by member name" link of the post.

**Expected Result:**
The website redirects to member profile page.

---

### Test 5: Member views another member's profile from the main page

**Preconditions:**

1. Member profile exists.
2. Another member's profile exists.
3. A post exists.

**Test Steps:**

1. Member accesses the main page of DDD Forum while logged in as "member name."
2. Member clicks on the "by another member's name" link of a post.

**Expected Result:**
The website redirects to another member's profile page.

---

### Test 6: Member views another member's profile from a post page

**Preconditions:**

1. Member profile exists.
2. Another member's profile exists.
3. A post exists.

**Test Steps:**

1. Member accesses the main page of DDD Forum while logged in as "member name."
2. Selects a post authored by another member.
3. Member clicks on the "by another member's name" link of the post.

**Expected Result:**
The website redirects to another member's profile page.

---

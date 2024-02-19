# User Story: As a Member, I want to know the average of comments for a specific day

## 1. Requirements Engineering

### 1.1. User Story Description

- As a member, I want to know the average of comments for a specific day so that I can have an idea of the engagement of the community on that day.

### 1.2. Customer Specifications and Clarifications

- Which specific day should be considered for the average calculation?
- Should the average be calculated for all comments or only for comments on specific posts or topics?
- Should the average be displayed in a specific format or with a specific level of precision?
- Should the average be updated in real-time or can it be calculated periodically?
- Is there any specific date format that inputt date should follow?

### 1.3. Acceptance Criteria

- **AC1:** A new page called statistics must be created to show the statistics info to members only.
- **AC2:** The system should sum up the total number of comments on that day and then divide that sum by the number of instances or posts on that day.
- **AC3:** The imput date should follow the format of "YYYY-MM-DD".
- **AC4:** A label "Average Comments on a Specific Date" should exist.
- **AC5:** If no records available, a "No data found" result should appear.
- **AC6:** A submit button to request the average of comments should exist.
- **AC7:** A refresh button to clean the input text data and respective result.
- **AC8:** The average value should be rounded to have only one decimal place.
- **AC9:** When the entered date in invalid the following flash message appears "Inserted date is not valid, please refresh and try again 😎"

### 1.4. Found out Dependencies

- The system must have access to the comments data, either through an API or a database.
- The system must have a user interface that allows the member to select the day and the posts or topics for the average calculation.
- Statistics page.
- Member authentication validation to ensure that only members have access to the page.

### 1.5 Input and Output Data

**Input Data:**

- Selected data:
  - Specific day for the average calculation;

**Output Data:**

- Average of comments for the selected day and posts or topics (if applicable).

### 1.6. System Sequence Diagram (SSD)

#### Alternative One

### 1.7 Other Relevant Remarks

This page will exist only

### 1.8 Bugs

n/a

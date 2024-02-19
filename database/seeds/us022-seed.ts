import db from '../../database';

const us022seed = async () => {
    const userQuery = `
    INSERT INTO base_user (base_user_id, user_email, username, user_password, created_at, updated_at) VALUES ("43934178-0dbd-49cc-b4de-ae5019d3b25f", "recentPostsHighlighted@dddforum.com", "RecentPosts", "$2a$12$c3kHZLQsMACjvspfCMH4AO.zm0sEx0GLPxd.7Pn6pTToqrzQiyf2a", "2023-12-02 16:00:00", "2023-12-02 16:00:00");
    `;
  
    const memberQuery = `
    INSERT INTO member (member_id, member_base_id, reputation, created_at, updated_at) VALUES ("39f9ecf9-80c4-4afe-8395-e89b04f547ec", "43934178-0dbd-49cc-b4de-ae5019d3b25f", 0, "2023-12-02 16:00:00", "2023-12-02 16:00:00");
    `;

    const postQuery1 = `
    INSERT INTO post (post_id, member_id, type, title, text, slug, points, total_num_comments, created_at, updated_at) VALUES ("61996fbd-8027-4c8b-8ac5-d453856b9fb6", "39f9ecf9-80c4-4afe-8395-e89b04f547ec", "text", "Most Commented Post", "<p>Most commented post to test recent posts highlighted background</p>", "1111112-Most-Commented-Post", "0", "6", "2023-12-02 16:34:00", "2023-12-02 16:34:00");
    `;

    const postQuery2 = `
    INSERT INTO post (post_id, member_id, type, title, text, slug, points, total_num_comments, created_at, updated_at) VALUES ("e65f209c-7952-4a21-9cbb-ccc32c1fb75e", "39f9ecf9-80c4-4afe-8395-e89b04f547ec", "text", "Post with more than 1/3", "<p>Post with more than 1/3 with no background</p>", "1111113-Post-with-more-than-1/3", "0", "3", "2023-12-02 16:33:00", "2023-12-02 16:33:00");
    `;

    const postQuery3 = `
    INSERT INTO post (post_id, member_id, type, title, text, slug, points, total_num_comments, created_at, updated_at) VALUES ("720ca64b-2970-4474-bd7c-129c032c41d5", "39f9ecf9-80c4-4afe-8395-e89b04f547ec", "text", "Post with 2 comments testing superior limit", "<p>Post with 2 comments with no background</p>", "1111114-Post-with-2-comments-testing-superior-limit", "0", "2", "2023-12-02 16:32:00", "2023-12-02 16:32:00");
    `;

    const postQuery4 = `
    INSERT INTO post (post_id, member_id, type, title, text, slug, points, total_num_comments, created_at, updated_at) VALUES ("efed0425-9bbe-4b92-b330-2ff73336403a", "39f9ecf9-80c4-4afe-8395-e89b04f547ec", "text", "Post with 1 comment testing inferior limit", "<p>Post with 1 comment with red background</p>", "1111115-Post with-1-comment-testing-inferior-limit", "0", "1", "2023-12-02 16:31:00", "2023-12-02 16:31:00");
    `;

    const postQuery5 = `
    INSERT INTO post (post_id, member_id, type, title, text, slug, points, total_num_comments, created_at, updated_at) VALUES ("c01ba2bb-3145-4412-a0c9-5b330638b587", "39f9ecf9-80c4-4afe-8395-e89b04f547ec", "text", "Post with no comments testing inferior limit", "<p>Post with 0 comment with red background</p>", "1111116-Post-with-no-comments-testing-inferior-limit", "0", "0", "2023-12-02 16:30:00", "2023-12-02 16:30:00");
    `;

  
    try {
      await db.promise().query(userQuery);
      await db.promise().query(memberQuery);
      await db.promise().query(postQuery1);
      await db.promise().query(postQuery2);
      await db.promise().query(postQuery3);
      await db.promise().query(postQuery4);
      await db.promise().query(postQuery5);
      console.log('us022 test data seeded successfully.');
    } catch (error) {
      console.error('Error seeding us022 test data:', error);
    }
  };
  
  export default us022seed;
import db from '../../database';
import { format } from 'date-fns';

const getDateAgo = (daysAgo:number) => {
    const today = new Date();
    const numDaysAgo = new Date(today);
    numDaysAgo.setDate(today.getDate() - daysAgo);
  
    const formattedDate = format(numDaysAgo, 'yyyy-MM-dd HH:mm:ss');
    return formattedDate;
  };

const us025seed = async () => {
    const userQuery = `
    INSERT INTO base_user (base_user_id, user_email, username, user_password, created_at, updated_at) VALUES ("43934178-0dbd-49cc-b4de-ae5019d3b25f", "recentPostsHighlighted@dddforum.com", "RecentPosts", "$2a$12$c3kHZLQsMACjvspfCMH4AO.zm0sEx0GLPxd.7Pn6pTToqrzQiyf2a", "2023-12-02 16:00:00", "2023-12-02 16:00:00");
    `;
  
    const memberQuery = `
    INSERT INTO member (member_id, member_base_id, reputation, created_at, updated_at) VALUES ("39f9ecf9-80c4-4afe-8395-e89b04f547ec", "43934178-0dbd-49cc-b4de-ae5019d3b25f", 0, "2023-12-02 16:00:00", "2023-12-02 16:00:00");
    `;

    const postQuery1 = `
    INSERT INTO post (post_id, member_id, type, title, text, slug, points, total_num_comments, created_at, updated_at) VALUES ("61996fbd-8027-4c8b-8ac5-d453856b9fb6", "39f9ecf9-80c4-4afe-8395-e89b04f547ec", "text", "Yellow Post 3 days ago", "<p>The yellow post must arise</p>", "1111112-Yellow-Post-3-days-ago", "0", "2", "${getDateAgo(
        3,
      )}", "${getDateAgo(3)}")`;
    
    const postQuery2 = `
    INSERT INTO post (post_id, member_id, type, title, text, slug, points, total_num_comments, created_at, updated_at) VALUES ("e65f209c-7952-4a21-9cbb-ccc32c1fb75e", "39f9ecf9-80c4-4afe-8395-e89b04f547ec", "text", "Yellow Post 6 days ago", "<p>Yellow Post 6 days ago</p>", "1111113-Yellow-Post-6-days-ago", "0", "2", "${getDateAgo(
        6,
      )}", "${getDateAgo(6)}")`;
    
    const postQuery3 = `
    INSERT INTO post (post_id, member_id, type, title, text, slug, points, total_num_comments, created_at, updated_at) VALUES ("720ca64b-2970-4474-bd7c-129c032c41d5", "39f9ecf9-80c4-4afe-8395-e89b04f547ec", "text", "Yellow Post 4 days ago", "<p>Yellow Post 4 days ago</p>", "1111114-Yellow-Post-4-days-ago", "0", "2", "${getDateAgo(
        4,
      )}", "${getDateAgo(4)}")`;
    
    try {
        await db.promise().query(userQuery);
        await db.promise().query(memberQuery);
        await db.promise().query(postQuery1);
        await db.promise().query(postQuery2);
        await db.promise().query(postQuery3);
      console.log('us026 test data seeded successfully.');
    } catch (error) {
      console.error('Error seeding us026 test data:', error);
    }
  };

  export default us025seed;
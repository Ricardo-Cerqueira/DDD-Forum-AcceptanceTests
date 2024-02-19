import db from '../../database';

const us026seed = async () => {
    const userQuery = `
      INSERT INTO base_user 
      (base_user_id, user_email, is_email_verified, username, user_password, is_admin_user, is_deleted, created_at, updated_at) 
      VALUES 
      ('3e5edce5-f9a4-42cd-8094-bcfc70fe03dd', 'test@gmail.com', 0, 'test12', '$2a$10$fTJ4ooQr1dawpEQklkPFse1jARXrvPvuBdd4PxQU79aN1vcZ7h2Du', 0, 0, '2023-11-26 19:54:10', '2023-11-26 19:54:10');
    `;
  
    const memberQuery = `
      INSERT INTO member 
      (member_id, member_base_id, reputation, created_at, updated_at) 
      VALUES 
      ('bdf0561d-5e99-40c6-920e-1f8b87091a11', '3e5edce5-f9a4-42cd-8094-bcfc70fe03dd', 0, '2023-11-26 19:54:10', '2023-11-26 19:54:10');
    `;
  
    try {
      await db.promise().query(userQuery);
      await db.promise().query(memberQuery);
      console.log('us026 test data seeded successfully.');
    } catch (error) {
      console.error('Error seeding us026 test data:', error);
    }
  };
  
  export default us026seed;
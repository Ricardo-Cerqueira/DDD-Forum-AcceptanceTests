// cleanupDatabase.ts
import db from '../database';

const cleanPostsTable = () => {
  db.query('DELETE FROM post', (err:any) => {
    if (err) {
      console.error('Error cleaning posts table:', err);
    } else {
      console.log('Posts table cleaned.');
    }
    process.exit(0);
  });
};

cleanPostsTable();
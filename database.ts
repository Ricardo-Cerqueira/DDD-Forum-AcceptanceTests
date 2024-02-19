import * as mysql from 'mysql2';
import * as dotenv from 'dotenv';

dotenv.config();

const connection = mysql.createConnection({
  host: process.env.DDD_FORUM_DB_HOST,
  user: process.env.DDD_FORUM_DB_USER,
  database: process.env.DDD_FORUM_IS_PRODUCTION === 'true' ? process.env.DDD_FORUM_DB_PROD_DB_NAME : process.env.DDD_FORUM_DB_DEV_DB_NAME,
  password: process.env.DDD_FORUM_DB_PASS,
});

export default connection;

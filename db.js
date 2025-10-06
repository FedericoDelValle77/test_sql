import { createPool } from 'mysql2/promise';

const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'biblioteca'
});
//para que este codigo funcione cambiar biblioteca por clinica
export default pool; 

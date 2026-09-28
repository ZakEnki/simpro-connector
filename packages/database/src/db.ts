import pg from 'pg'; import 'dotenv/config';
export const pool=new pg.Pool({connectionString:process.env.DATABASE_URL});
export async function migrate(){const fs=await import('node:fs/promises'); const sql=await fs.readFile(new URL('./schema.sql',import.meta.url),'utf8'); await pool.query(sql);}
export async function assertConnection(orgId:string,id:string){const r=await pool.query('select * from simpro_connections where id=$1 and organization_id=$2',[id,orgId]); if(!r.rows[0]) throw new Error('Connection not found'); return r.rows[0];}

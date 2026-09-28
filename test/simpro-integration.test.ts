import test from 'node:test'; import assert from 'node:assert/strict'; import { SimproClient } from '../packages/simpro-client/src/client.js';
const required=['SIMPRO_TEST_BASE_URL','SIMPRO_TEST_COMPANY_ID','SIMPRO_TEST_ACCESS_TOKEN'];
const ready=required.every(k=>Boolean(process.env[k]));
test('Simpro Australia live smoke test', {skip:!ready?`Set ${required.join(', ')} to run`:false}, async()=>{const client=new SimproClient({baseUrl:process.env.SIMPRO_TEST_BASE_URL!,companyId:process.env.SIMPRO_TEST_COMPANY_ID!,token:async()=>process.env.SIMPRO_TEST_ACCESS_TOKEN!});const result=await client.list('customers',{page:1,pageSize:1});assert.ok(Array.isArray(result.rows));assert.ok(result.pagination.totalPages>=1);});

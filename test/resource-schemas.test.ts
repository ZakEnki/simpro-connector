import test from 'node:test'; import assert from 'node:assert/strict'; import { customerWrite,jobWrite,validateWrite } from '../packages/domain/src/schemas.js'; import { pathFor } from '../packages/simpro-client/src/resources.js';
test('customer schema requires an identifying name',()=>{assert.throws(()=>customerWrite.parse({Email:'a@b.com'}));assert.equal(customerWrite.parse({CompanyName:'Acme'}).CompanyName,'Acme');});
test('job schema validates supported writes',()=>{assert.equal(jobWrite.parse({Name:'Install',Type:'Service'}).Name,'Install');assert.throws(()=>jobWrite.parse({Type:'Invalid'}));});
test('resource paths are encoded and mapped',()=>{assert.equal(pathFor('jobs','A/B'),'jobs/A%2FB');assert.equal(pathFor('staff'),'employees');});
test('unknown resources pass through only for read-compatible validation',()=>{assert.deepEqual(validateWrite('staff',{Name:'Sam'}),{Name:'Sam'});});

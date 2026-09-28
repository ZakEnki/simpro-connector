import test from 'node:test'; import assert from 'node:assert/strict'; import { normalize } from '../packages/domain/src/normalize.js';
test('normalizes Simpro records with tenant and connection scope',()=>{const n=normalize('org-1','conn-1','jobs',{ID:123,Name:'Install'});assert.deepEqual({organizationId:n.organizationId,connectionId:n.connectionId,resource:n.resource,externalId:n.externalId},{organizationId:'org-1',connectionId:'conn-1',resource:'jobs',externalId:'123'});});
test('rejects records without IDs',()=>{assert.throws(()=>normalize('org','conn','jobs',{Name:'Missing'}));});

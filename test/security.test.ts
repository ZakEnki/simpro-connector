import test from 'node:test'; import assert from 'node:assert/strict'; import { encrypt,decrypt } from '../packages/auth/src/token-vault.js'; import { toCsv } from '../packages/exports/src/exporter.js';
test('token vault round trips',()=>{process.env.TOKEN_ENCRYPTION_KEY='0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef';const c=encrypt('secret');assert.notEqual(c,'secret');assert.equal(decrypt(c),'secret');});
test('csv escapes values',()=>{assert.equal(toCsv([{a:'x,y',b:'"q"'}]),'a,b\n"x,y","""q"""');});

import { randomUUID } from 'node:crypto';
export function requestContext(req:any){const org=String(req.headers['x-organization-id']??''); const actor=String(req.headers['x-actor-id']??'system'); if(!org) throw new Error('x-organization-id is required'); return {organizationId:org,actorId:actor,requestId:String(req.id??randomUUID())};}
export function requireInternalKey(req:any){const expected=process.env.INTERNAL_API_KEY; if(expected && req.headers.authorization!==`Bearer ${expected}`) throw new Error('Unauthorized');}

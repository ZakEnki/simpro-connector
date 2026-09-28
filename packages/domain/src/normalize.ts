export interface NormalizedRecord { organizationId:string; connectionId:string; resource:string; externalId:string; payload:unknown; updatedAt:string; }
export function externalId(row:any){const id=row?.ID??row?.id; if(id===undefined||id===null) throw new Error('Simpro row has no ID'); return String(id);}
export function normalize(organizationId:string,connectionId:string,resource:string,row:unknown):NormalizedRecord{return{organizationId,connectionId,resource,externalId:externalId(row),payload:row,updatedAt:new Date().toISOString()};}

export type ConnectionStatus = 'pending' | 'active' | 'error' | 'revoked';
export interface SimproConnection { id:string; organizationId:string; name:string; baseUrl:string; companyId:string; status:ConnectionStatus; createdAt:string; lastCheckedAt?:string; }
export interface ExportRequest { connectionId:string; resource:string; format:'csv'|'json'|'xlsx'; filters?:Record<string,unknown>; columns?:string[]; }
export interface AuditEvent { organizationId:string; actorId?:string; connectionId?:string; action:string; resource?:string; resourceId?:string; success:boolean; requestId:string; createdAt:string; }
export const SUPPORTED_RESOURCES = ['customers','sites','jobs','quotes','invoices','staff','schedules','notes'] as const;
export type SupportedResource = typeof SUPPORTED_RESOURCES[number];

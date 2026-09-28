export const RESOURCE_PATHS={customers:'customers',sites:'sites',jobs:'jobs',quotes:'quotes',invoices:'invoices',staff:'employees',schedules:'employees',notes:'notes'} as const;
export type ResourceName=keyof typeof RESOURCE_PATHS;
export function pathFor(resource:string,id?:string){const base=RESOURCE_PATHS[resource as ResourceName]??resource;return id?`${base}/${encodeURIComponent(id)}`:base;}

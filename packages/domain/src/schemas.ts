import { z } from 'zod';
export const id=z.union([z.string(),z.number()]);
export const customerWrite=z.object({ID:id.optional(),GivenName:z.string().min(1).optional(),FamilyName:z.string().optional(),CompanyName:z.string().optional(),Email:z.string().email().optional(),Phone:z.string().optional()}).refine(v=>v.GivenName||v.CompanyName,{message:'GivenName or CompanyName is required'});
export const siteWrite=z.object({ID:id.optional(),Name:z.string().min(1),Address:z.record(z.unknown()).optional(),Customer:z.record(z.unknown()).optional()});
export const jobWrite=z.object({ID:id.optional(),Type:z.enum(['Project','Service','Prepaid']).optional(),Name:z.string().min(1).optional(),Description:z.string().optional(),Status:z.record(z.unknown()).optional(),Customer:z.record(z.unknown()).optional(),Site:z.record(z.unknown()).optional()});
export const quoteWrite=jobWrite.extend({DateIssued:z.string().optional(),DueDate:z.string().optional()});
export const invoiceWrite=z.object({ID:id.optional(),Description:z.string().optional(),DateIssued:z.string().optional(),DueDate:z.string().optional(),Status:z.record(z.unknown()).optional()});
export const resourceWriteSchemas={customers:customerWrite,sites:siteWrite,jobs:jobWrite,quotes:quoteWrite,invoices:invoiceWrite} as const;
export function validateWrite(resource:string,payload:unknown){const schema=(resourceWriteSchemas as Record<string,typeof customerWrite>)[resource];return schema?schema.parse(payload):payload;}

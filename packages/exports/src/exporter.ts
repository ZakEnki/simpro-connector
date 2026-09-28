import { mkdir, writeFile } from 'node:fs/promises'; import { randomUUID } from 'node:crypto';
export async function writeJsonExport(rows:unknown[],dir:string){await mkdir(dir,{recursive:true}); const path=`${dir}/${randomUUID()}.json`; await writeFile(path,JSON.stringify(rows,null,2)); return path;}
export function toCsv(rows:Record<string,unknown>[]){if(!rows.length)return ''; const cols=[...new Set(rows.flatMap(r=>Object.keys(r)))]; const esc=(v:unknown)=>`"${String(v??'').replaceAll('"','""')}"`; return [cols.join(','),...rows.map(r=>cols.map(c=>esc(r[c])).join(','))].join('\n');}
export async function writeCsvExport(rows:Record<string,unknown>[],dir:string){await mkdir(dir,{recursive:true}); const path=`${dir}/${randomUUID()}.csv`; await writeFile(path,toCsv(rows)); return path;}

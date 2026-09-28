import { z } from 'zod';
export class SimproError extends Error { constructor(message:string, public status?:number, public body?:unknown){super(message);} }
export interface SimproClientConfig { baseUrl:string; companyId:string; token:()=>Promise<string>; rateMs?:number; }
export class SimproClient {
  private lastRequest=0;
  constructor(private cfg:SimproClientConfig){}
  private async request(method:string,path:string,body?:unknown,query?:Record<string,unknown>):Promise<{body:unknown;headers:Headers}> {
    const wait=Math.max(0,(this.cfg.rateMs??125)-(Date.now()-this.lastRequest)); if(wait) await new Promise(r=>setTimeout(r,wait));
    const url=new URL(`/api/v1.0/companies/${encodeURIComponent(this.cfg.companyId)}/${path.replace(/^\//,'')}`,this.cfg.baseUrl);
    for(const [k,v] of Object.entries(query??{})) if(v!==undefined) url.searchParams.set(k,String(v));
    const res=await fetch(url,{method,headers:{Authorization:`Bearer ${await this.cfg.token()}`,Accept:'application/json','Content-Type':'application/json'},body:body===undefined?undefined:JSON.stringify(body)}); this.lastRequest=Date.now();
    const text=await res.text(); let parsed:unknown; try{parsed=text?JSON.parse(text):undefined}catch{parsed=text;}
    if(res.status===429){await new Promise(r=>setTimeout(r,1000)); return this.request(method,path,body,query);}
    if(!res.ok) throw new SimproError(`Simpro ${method} ${path} failed: ${res.status}`,res.status,parsed);
    return {body:parsed,headers:res.headers};
  }
  async list(resource:string,query:Record<string,unknown>={}){ const page=Number(query.page??1); const pageSize=Number(query.pageSize??50); const r=await this.request('GET',resource,undefined,{...query,page,pageSize}); return {rows:Array.isArray(r.body)?r.body:[],pagination:{page,pageSize,totalPages:Number(r.headers.get('Result-Pages')??1),totalRows:Number(r.headers.get('Result-Total')??0)}}; }
  get(path:string,query?:Record<string,unknown>){return this.request('GET',path,undefined,query).then(x=>x.body)}
  post(path:string,body:unknown){return this.request('POST',path,body).then(x=>x.body)}
  put(path:string,body:unknown){return this.request('PUT',path,body).then(x=>x.body)}
  delete(path:string){return this.request('DELETE',path).then(x=>x.body)}
}
export const ConnectionInput=z.object({baseUrl:z.string().url(),companyId:z.string().min(1)});

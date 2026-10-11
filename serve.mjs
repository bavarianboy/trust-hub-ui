import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root=path.dirname(fileURLToPath(import.meta.url));
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.jpg':'image/jpeg','.png':'image/png','.woff2':'font/woff2'};

http.createServer(async(req,res)=>{
  try{
    const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    const requested=pathname==='/'?'index.html':pathname.slice(1);
    const file=path.resolve(root,requested);
    if(!file.startsWith(root)) throw new Error('Invalid path');
    const body=await fs.readFile(file);
    res.writeHead(200,{'content-type':types[path.extname(file)]||'application/octet-stream'});
    res.end(body);
  }catch{
    res.writeHead(404,{'content-type':'text/plain; charset=utf-8'});
    res.end('Not found');
  }
}).listen(4173,'127.0.0.1',()=>console.log('Trust Hub UI: http://127.0.0.1:4173'));

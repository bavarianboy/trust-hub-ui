import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url));
const services=JSON.parse(await fs.readFile(path.join(root,'data','services.json'),'utf8'));
const pages=JSON.parse(await fs.readFile(path.join(root,'data','pages.json'),'utf8'));
await fs.writeFile(path.join(root,'data.js'),`window.SIMAH_DATA=${JSON.stringify({services,pages})};\n`);
console.log(`Generated UI data: ${pages.length} pages, ${services.length} services.`);

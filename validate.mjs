import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root=path.dirname(fileURLToPath(import.meta.url));
const project=root;
const pages=JSON.parse(await fs.readFile(path.join(project,'data','pages.json'),'utf8'));
const services=JSON.parse(await fs.readFile(path.join(project,'data','services.json'),'utf8'));
const tokens=JSON.parse(await fs.readFile(path.join(root,'brand-tokens.json'),'utf8'));
const app=await fs.readFile(path.join(root,'app.js'),'utf8');
const css=await fs.readFile(path.join(root,'styles.css'),'utf8');
const html=await fs.readFile(path.join(root,'index.html'),'utf8');

const routes=['landing','login','dashboard','readiness','packages','projects','documents','notifications','invoices','quotations','team','support','profile','services','messages'];
const missingRoutes=routes.filter(route=>!app.includes(route));
const requiredFiles=['assets/trust-hub-logo.jpg','assets/brand-color-reference.png','assets/fonts/Norsal-Light.otf','assets/fonts/Norsal-Black.otf','assets/fonts/Norsal-BlackItalic.otf','data.js','index.html','styles.css','app.js'];
const missingFiles=[];
for(const file of requiredFiles){try{await fs.access(path.join(root,file))}catch{missingFiles.push(file)}}

const report={
  valid:pages.length===15&&services.length===60&&!missingRoutes.length&&!missingFiles.length&&html.includes('data.js')&&css.includes('@media(max-width:720px)')&&tokens.directions.includes('rtl')&&tokens.directions.includes('ltr'),
  pageInterfaces:pages.length,
  serviceDialogs:services.length,
  languages:['ar','en'],
  responsiveBreakpoints:tokens.breakpoints,
  missingRoutes,
  missingFiles
};
await fs.writeFile(path.join(root,'validation.json'),JSON.stringify(report,null,2));
console.log(JSON.stringify(report,null,2));
if(!report.valid) process.exitCode=1;

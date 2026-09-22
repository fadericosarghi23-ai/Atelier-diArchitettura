#!/usr/bin/env node
/**
 * slot.mjs — elenca tutti i segnaposto [[DA COMPILARE: ...]] rimasti nel
 * sorgente, raggruppati per file. Uso: `npm run slot`.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const DIRS = ['src', 'public', 'astro.config.mjs'];
const RE = /\[\[DA COMPILARE:[^\]]*\]\]/g;

let total = 0;
const perFile = [];

function walk(p) {
  let st;
  try { st = statSync(p); } catch { return; }
  if (st.isDirectory()) {
    for (const e of readdirSync(p)) {
      if (e === 'node_modules' || e === 'dist' || e === '.astro') continue;
      walk(join(p, e));
    }
  } else if (/\.(astro|ts|tsx|js|mjs|md|mdx|css|json|txt|svg|html)$/.test(p)) {
    const txt = readFileSync(p, 'utf8');
    const m = txt.match(RE);
    if (m) { total += m.length; perFile.push([p.replace(ROOT, ''), m.length]); }
  }
}

for (const d of DIRS) walk(join(ROOT, d));
perFile.sort((a, b) => b[1] - a[1]);

console.log(`\nSegnaposto [[DA COMPILARE]] ancora da riempire: ${total}\n`);
for (const [f, n] of perFile) console.log(`  ${String(n).padStart(4)}  ${f}`);
console.log('');

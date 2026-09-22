// Estrae il logo (linea nera su bianco) in PNG trasparente: il bianco diventa
// alpha 0, il nero resta opaco. Genera versione nera e versione bianca.
import sharp from 'sharp';

const SRC = 'public/images/logo/atelier-logo.jpg';
const { data, info } = await sharp(SRC).greyscale().raw().toBuffer({ resolveWithObject: true });
const { width, height } = info;

function make(r, g, b) {
  const out = Buffer.alloc(width * height * 4);
  for (let i = 0; i < width * height; i++) {
    const lum = data[i];               // 0 = nero, 255 = bianco
    let a = 255 - lum;                  // nero -> opaco, bianco -> trasparente
    a = Math.round((a - 35) * 1.9);     // pulizia bordi/antialias
    a = Math.max(0, Math.min(255, a));
    out[i * 4] = r; out[i * 4 + 1] = g; out[i * 4 + 2] = b; out[i * 4 + 3] = a;
  }
  return out;
}

async function save(rgb, file) {
  const img = sharp(make(...rgb), { raw: { width, height, channels: 4 } })
    .trim({ threshold: 10 }); // toglie il margine trasparente
  const meta = await img.png().toBuffer({ resolveWithObject: true });
  await sharp(meta.data).png().toFile(file);
  console.log(file, meta.info.width + 'x' + meta.info.height);
}

await save([26, 27, 25], 'public/images/logo/atelier-logo.png');       // #1a1b19 quasi-nero
await save([255, 255, 255], 'public/images/logo/atelier-logo-white.png');

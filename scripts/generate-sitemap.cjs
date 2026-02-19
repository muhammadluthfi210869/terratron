const fs = require('fs');
const path = require('path');

// Simulation of the data since we can't easily import ESM into this CJS script without complications
// In a real project, we'd use a shared JSON or a more robust build tool.
const articles = [
  { slug: 'sewa-excavator-mini-pc75-proyek-perumahan' },
  { slug: 'analisa-hidden-cost-sewa-alat-berat-tua-vs-muda' },
  { slug: 'strategi-alat-berat-tanah-lunak-swamp-rawa' },
  { slug: 'cara-menghitung-biaya-cut-fill-lahan-meter-kubik' },
  { slug: 'sewa-harian-jam-jaman-vs-borongan-volume' },
  { slug: 'standar-konsumsi-bbm-solar-excavator-pc200-dozer' },
  { slug: 'pematangan-lahan-kawasan-industri-cikarang-karawang' },
  { slug: 'tantangan-mobilisasi-cut-fill-pegunungan-puncak-bogor' },
  { slug: 'regulasi-galian-basement-area-padat-penduduk' },
  { slug: 'komatsu-pc200-vs-kobelco-sk200-perbandingan-irit-solar' }
];

const locations = [
  { slug: 'bekasi' },
  { slug: 'cikarang' },
  { slug: 'karawang' },
  { slug: 'cibitung' },
  { slug: 'bogor' },
  { slug: 'depok' },
  { slug: 'cikarang-pusat' }
];

const products = [
  { slug: 'sewa-excavator-komatsu-pc200-8-bekasi' },
  { slug: 'rental-excavator-kobelco-sk200-10-cikarang' },
  { slug: 'sewa-excavator-cat-320d-heavy-duty' },
  { slug: 'sewa-excavator-mini-pc75-masuk-gang-bekasi' }
];

const BASE_URL = 'https://terratron.id';

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Main Pages -->
  <url><loc>${BASE_URL}/</loc><priority>1.0</priority></url>
  <url><loc>${BASE_URL}/sewa-alat-berat</loc><priority>0.9</priority></url>
  <url><loc>${BASE_URL}/profil-perusahaan</loc><priority>0.8</priority></url>
  <url><loc>${BASE_URL}/pustaka-konstruksi</loc><priority>0.8</priority></url>

  <!-- Location Landing Pages -->
  ${locations.map(loc => `
  <url>
    <loc>${BASE_URL}/sewa-alat-berat/lokasi/${loc.slug}</loc>
    <priority>0.8</priority>
  </url>`).join('')}

  <!-- Unit Product Pages -->
  ${products.map(prod => `
  <url>
    <loc>${BASE_URL}/sewa-alat-berat/${prod.slug}</loc>
    <priority>0.8</priority>
  </url>`).join('')}

  <!-- Dynamic Articles -->
  ${articles.map(art => `
  <url>
    <loc>${BASE_URL}/pustaka-konstruksi/${art.slug}</loc>
    <priority>0.7</priority>
  </url>`).join('')}
</urlset>
`.trim();

const outputPath = path.join(__dirname, '../public/sitemap.xml');

try {
  fs.writeFileSync(outputPath, sitemap);
  console.log(`✅ Sitemap successfully generated at: ${outputPath}`);
} catch (err) {
  console.error(`❌ Error generating sitemap: ${err.message}`);
}

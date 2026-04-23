// ============================================================
//  TERRATRON — FLEET DATA (v3.0 — REAL UNITS, REAL ASSETS)
//  PT Terratron Indonesia Heavy Equipment
//  Rebuilt: Februari 2026
//  Units: SANY SY75 | CAT 305.5E2 | Komatsu PC75 | Sumitomo SH75
// ============================================================

export const fleetData = [

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // UNIT 1: SANY SY75 — "The Efficiency King"
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        id: 'sany-sy75',
        slug: 'sewa-excavator-sany-sy75-7-ton-hemat-bbm-ciamis',
        category: 'mini',
        model: 'SANY SY75',
        type: 'Midi Excavator',
        tagline: 'Menekan biaya solar proyek tanpa kompromi tenaga gali.',
        nickName: 'The Efficiency King',

        // ── VISUAL ASSETS ─────────────────────────────────────
        image: '/asset/units/COVER_SANY_SY75 (1).webp',
        seoAlt: 'Sewa Excavator SANY SY75 7 Ton hemat BBM untuk proyek galian saluran dan pematangan lahan di Ciamis Tasikmalaya',
        gallery: [
            {
                src: '/asset/units/SANY_SY75_1 (1).webp',
                caption: 'SANY SY75 — Kondisi Unit Aktual',
                type: 'unit'
            },
            {
                src: '/asset/units/SANY_SY75_2 (1).webp',
                caption: 'SANY SY75 — Tampak Operasional',
                type: 'operasional'
            }
        ],
        galleryLabel: 'Dokumentasi Lapangan — 2025',

        // ── SEO META ──────────────────────────────────────────
        pageMeta: {
            title: 'Sewa Excavator SANY SY75 (7 Ton) Ciamis & Tasikmalaya — Hemat BBM 20%, Siap Kerja',
            description: 'Rental Excavator SANY SY75 di Ciamis, Tasikmalaya & Banjar. 7 Ton paling irit solar di kelasnya. Mesin Isuzu bandel, operator SIO aktif, SPK resmi. Cek harga sekarang.'
        },

        // ── BADGES (Displayed on Card) ────────────────────────
        badges: [
            { label: 'UNIT 2022 UP', icon: 'power' },
            { label: 'HEMAT SOLAR 20%', icon: 'fuel' },
            { label: 'CITY FRIENDLY', icon: 'city' }
        ],

        // ── STATUS & PRICING ──────────────────────────────────
        status: 'available',
        rentedCity: null,
        location: 'POOL PRIANGAN TIMUR',
        priceIndicative: 'Mulai Rp 2.800.000 / shift (8 jam)',
        priceNote: 'Belum termasuk solar. Harga area Ciamis, Tasikmalaya, Banjar, Pangandaran.',
        minimumRent: 'Min. 1 shift (8 jam) | Kontrak bulanan min. 150 jam',

        // ── SPECS (8 Field Standar Wajib Seragam) ────────────
        specs: {
            year: '2022 Up',
            weight: '7.280 kg',
            bucket: '0.30 m³',
            maxDigDepth: '4.10 m',
            engine: 'Isuzu (58 HP)',
            fuelConsumption: '±6–8 Liter/Jam',
            transportDimension: '6.1m × 2.2m × 2.6m',
            trackType: 'Steel Track (Rubber Pad by Request)'
        },

        // ── BEST FOR (Card Summary) ───────────────────────────
        bestFor: 'Unit paling irit solar di kelas 7 Ton. Ideal untuk Galian U-Ditch, pematangan lahan perumahan, dan loading truk engkel. Lebar 2.2m cukup aman untuk jalan desa dan perumahan cluster.',

        // ── LONG DESCRIPTION (Detail Page — HTML) ────────────
        longDescription: `
            <p><strong>SANY SY75</strong> adalah jawaban bagi kontraktor yang ingin margin proyek tetap tebal tanpa mengorbankan kapasitas kerja. Mesin Isuzu-nya yang bandel mampu menekan konsumsi solar hingga <strong>20% lebih irit</strong> dibanding unit kelas sama dari generasi sebelumnya.</p>
            <p>Dengan lebar transportasi hanya 2.2 meter, unit ini aman ditowing menggunakan truk CDD biasa tanpa butuh Lowbed — memangkas biaya mobilisasi secara signifikan sejak awal proyek.</p>
            <h4>Skenario Proyek Optimal:</h4>
            <ul>
                <li><strong>Galian Saluran U-Ditch</strong> — Presisi dan cepat di area perumahan</li>
                <li><strong>Pematangan Lahan Perumahan</strong> — Efisiensi solar terjaga seharian</li>
                <li><strong>Galian Pondasi Bangunan</strong> — Aman di area semi-padat & pinggir jalan raya</li>
            </ul>
            <p>Beroperasi aktif untuk wilayah <strong>Ciamis, Tasikmalaya, Banjar, Pangandaran</strong>, dan sekitar Priangan Timur.</p>
        `,

        // ── LOAD CHART (Rendered as Table in UI) ──────────────
        loadChartTitle: 'Kemampuan Angkat Aman (Safe Working Load)',
        loadChartNote: 'Data estimasi untuk bucket standar 0.3m³. Faktor keamanan 75% tipping load. Permukaan datar.',
        loadChart: [
            { radius: '3.0 Meter', front: '± 2.850 kg', side: '± 1.950 kg' },
            { radius: '4.5 Meter', front: '± 1.950 kg', side: '± 1.250 kg' },
            { radius: 'Max Reach (6.0m)', front: '± 1.100 kg', side: '± 850 kg' }
        ],

        // ── LOGISTICS ─────────────────────────────────────────
        logistics: {
            truckType: 'Self-Loader CDD Long / Fuso — TIDAK perlu Lowbed',
            minRoadWidth: '2.8 Meter (aman untuk jalan desa & aspal perumahan)',
            minGateHeight: 'Min. 3.0 Meter (waspadai kabel listrik rendah)',
            groundPressure: '33 kPa (aman untuk tanah lunak, shoe 450mm)',
            mobilizationNote: 'Biaya towing dihitung terpisah, transparan di awal.'
        },

        // ── ATTACHMENTS ───────────────────────────────────────
        attachments: [
            { name: 'Bucket GP 0.30 m³', status: 'Standard (Sudah Termasuk)', desc: 'Galian umum, tanah, material gembur' },
            { name: 'Bucket Ditch Cleaning 0.50 m³', status: 'By Request', desc: 'Galian saluran U-Ditch lebar' },
            { name: 'Bucket Ripper', status: 'By Request', desc: 'Tanah keras / cadas ringan' }
        ],

        // ── COMPARISON ───────────────────────────────────────
        comparison: {
            choose_this_if: [
                'Prioritas utama adalah penghematan solar (BBM besar di RAB)',
                'Proyek di area semi-padat: perumahan, pinggir jalan raya',
                'Pekerjaan: Galian U-Ditch, loading truk engkel',
                'Budget mobilisasi terbatas (tidak perlu Lowbed)'
            ],
            choose_other_if: [
                'Medan sangat berat: berbatu keras, akar besar, lumpur dalam → Pilih Komatsu PC75',
                'Lokasi terpencil dimana sparepart lebih penting → Pilih Komatsu PC75'
            ],
            compare_label: 'vs Komatsu PC75'
        },

        // ── FAQ per UNIT ──────────────────────────────────────
        faqUnit: [
            {
                q: 'Apakah SANY SY75 kuat untuk tanah cadas?',
                a: 'Sangat kuat. Digging Force-nya setara PC75. Untuk batu boulder besar, kami sarankan upgrade ke PC200 atau gunakan attachment ripper.'
            },
            {
                q: 'Berapa konsumsi solar per jam di kerja berat?',
                a: 'Rata-rata lapangan 6–8 Liter/Jam. Sangat efisien untuk kontraktor yang anggaran solarnya ketat dalam RAB.'
            },
            {
                q: 'Apakah operator dilengkapi SIO?',
                a: 'Ya. Seluruh operator Terratron Indonesia memiliki SIO (Surat Izin Operator) Kelas 2 aktif yang diterbitkan Kemnaker RI.'
            },
            {
                q: 'Sistem pembayaran seperti apa?',
                a: 'DP 30% sebelum mobilisasi, sisanya per termin sesuai progres. Kontrak bulanan tersedia dengan skema yang lebih fleksibel. SPK bermaterai wajib dibuat.'
            },
            {
                q: 'Jika unit rusak di lapangan, siapa yang tanggung jawab?',
                a: 'Terratron Indonesia. Mekanik standby on-call 24 jam. Downtime >8 jam karena faktor mekanikal dari pihak kami tidak ditagihkan. Detail di SPK.'
            },
            {
                q: 'Apakah ada biaya tersembunyi?',
                a: 'Tidak. Biaya mobilisasi, solar, dan uang makan operator diinformasikan transparan sebelum Anda konfirmasi booking.'
            }
        ],

        // ── DOCUMENTS ─────────────────────────────────────────
        documents: ['SILO', 'SIO Operator', 'SPK Resmi', 'NIB'],
        hourMeter: 'Tersedia saat request',

        // ── SERVICE AREA ──────────────────────────────────────
        serviceArea: ['Ciamis', 'Tasikmalaya', 'Banjar', 'Pangandaran', 'Singaparna', 'Rajapolah'],
        serviceAreaNote: 'Area luar Priangan Timur bisa dikonfirmasi, menyesuaikan biaya mobilisasi.'
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // UNIT 2: CATERPILLAR 305.5E2 — "The Compact Precision"
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        id: 'cat-305',
        slug: 'sewa-mini-excavator-cat-305-5e2-spesialis-ruang-sempit-tasikmalaya',
        category: 'mini',
        model: 'CAT 305.5E2',
        type: 'Mini Excavator',
        tagline: 'Lebar 1.98m. Masuk gang. Zero tail swing. Tidak merusak utilitas eksisting.',
        nickName: 'The Compact Precision',

        // ── VISUAL ASSETS ─────────────────────────────────────
        image: '/asset/units/COVER_CAT 305.5E2 (1).webp',
        seoAlt: 'Sewa Mini Excavator CAT 305.5E2 lebar 1.98 meter zero tail swing untuk galian kabel pipa ruang sempit Ciamis Tasikmalaya',
        gallery: [
            {
                src: '/asset/units/CAT_305.5E2_1 (1).webp',
                caption: 'CAT 305.5E2 — Kondisi Unit Aktual',
                type: 'unit'
            },
            {
                src: '/asset/units/CAT_305.5E2_2 (1).webp',
                caption: 'CAT 305.5E2 — Detail Kabin & Attachment',
                type: 'detail'
            },
            {
                src: '/asset/units/CAT_305.5E2_3 (1).webp',
                caption: 'CAT 305.5E2 — Posisi Operasional',
                type: 'operasional'
            }
        ],
        galleryLabel: 'Dokumentasi Lapangan — 2024–2025',

        // ── SEO META ──────────────────────────────────────────
        pageMeta: {
            title: 'Sewa Mini Excavator CAT 305.5E2 Tasikmalaya & Ciamis — Spesialis Ruang Sempit, Galian Kabel & Breaker',
            description: 'Rental Mini Excavator CAT 305.5E2 di Tasikmalaya, Ciamis & Banjar. Lebar 1.98m, zero tail swing, tersedia attachment Hydraulic Breaker. Operator SIO aktif, SPK resmi.'
        },

        // ── BADGES ────────────────────────────────────────────
        badges: [
            { label: 'LEBAR 1.98M', icon: 'ruler' },
            { label: 'ZERO TAIL SWING', icon: 'target' },
            { label: 'TERSEDIA BREAKER', icon: 'hammer' }
        ],

        // ── STATUS & PRICING ──────────────────────────────────
        status: 'available',
        rentedCity: null,
        location: 'POOL PRIANGAN TIMUR',
        priceIndicative: 'Mulai Rp 2.200.000 / shift (8 jam)',
        priceNote: 'Belum termasuk solar. Rubber track: additional charge. Mode Breaker: rate menyesuaikan.',
        minimumRent: 'Min. 1 shift (8 jam) | Paket harian & mingguan tersedia',

        // ── SPECS ─────────────────────────────────────────────
        specs: {
            year: '2020 Up',
            weight: '5.400 kg',
            bucket: '0.22 m³',
            maxDigDepth: '3.89 m',
            engine: 'CAT C1.1 (36 HP)',
            fuelConsumption: '±4–5 Liter/Jam',
            transportDimension: '5.3m × 1.98m × 2.55m',
            trackType: 'Steel Track (Rubber Track by Request)'
        },

        // ── BEST FOR ──────────────────────────────────────────
        bestFor: 'Satu-satunya mini excavator yang bisa masuk gang <2 meter dengan zero tail swing. Spesialis galian kabel optik, pipa PDAM, dan proyek dalam kota. Tersedia attachment Hydraulic Breaker untuk bobok beton & demolisi.',

        // ── LONG DESCRIPTION ──────────────────────────────────
        longDescription: `
            <p>Akses jalan sempit bukan lagi halangan. <strong>CAT 305.5E2</strong> hadir dengan lebar kurang dari 2 meter — memungkinkan masuk gang perumahan, trotoar kota, dan halaman dalam properti tanpa merusak pagar atau dinding tetangga.</p>
            <p>Teknologi <strong>Zero Tail Swing</strong> memastikan badan belakang unit tidak menonjol keluar track saat berputar — kritis untuk pekerjaan di lingkungan terpadat sekalipun. Sistem hidrolik Caterpillar yang halus menjamin presisi tanpa merusak infrastruktur eksisting.</p>
            <h4>2 Mode Operasi dalam 1 Unit:</h4>
            <ul>
                <li><strong>Mode Bucket (Standard)</strong> — Galian Kabel Optik, Pipa PDAM, Landscaping, Galian Kolam Renang</li>
                <li><strong>Mode Breaker</strong> — Bobok beton, kupas aspal, demolisi ruko/rumah. Pergantian ±30–45 menit di lokasi.</li>
            </ul>
            <p>Tersedia untuk proyek di <strong>Tasikmalaya, Ciamis, Banjar, Pangandaran, Garut</strong>, dan seluruh wilayah Priangan Timur.</p>
        `,

        // ── LOAD CHART ────────────────────────────────────────
        loadChartTitle: 'Kemampuan Angkat Utilitas (Safe Working Load)',
        loadChartNote: 'Ideal untuk mengangkat Pipa HDPE, rol kabel optik, dan U-Ditch 40×40.',
        loadChart: [
            { radius: '2.0 Meter', front: '± 2.300 kg', side: '± 1.400 kg' },
            { radius: '3.5 Meter', front: '± 1.250 kg', side: '± 780 kg' },
            { radius: 'Max Reach (5.6m)', front: '± 650 kg', side: '± 450 kg' }
        ],

        // ── PRODUCTIVITY (Breaker Mode) ───────────────────────
        breakerProductivity: [
            { material: 'Beton Lantai (K-250)', thickness: '10–15 cm', output: '±15–20 m² / Jam' },
            { material: 'Dinding Bata / Batako', thickness: 'Standar', output: '±25–30 m² / Jam' },
            { material: 'Aspal Jalan (Hotmix)', thickness: '5–10 cm', output: '±30–40 m² / Jam' }
        ],
        breakerProductivityNote: 'Kecepatan tergantung kekerasan beton dan skill operator.',

        // ── LOGISTICS ─────────────────────────────────────────
        logistics: {
            truckType: 'Truk Towing / CDD Bak Terbuka',
            minRoadWidth: '2.0 Meter (masuk gang senggol & trotoar kota)',
            minGateHeight: 'Min. 2.6 Meter',
            groundPressure: 'Rendah — aman untuk aspal & keramik (mode rubber track)',
            mobilizationNote: 'Mode Breaker: jam operasi wajib 08.00–17.00 WIB di area pemukiman (kebisingan 98–102 dB).',
            specialFeature: 'Zero Tail Swing — aman 360° di ruang paling terbatas'
        },

        // ── ATTACHMENTS ───────────────────────────────────────
        attachments: [
            { name: 'Bucket GP 0.22 m³', status: 'Standard (Sudah Termasuk)', desc: 'Galian umum, kabel, pipa, landscaping' },
            { name: 'Hydraulic Breaker (Chisel ∅68mm)', status: 'Tersedia — Konfirmasi Saat Booking', desc: 'Bobok beton K-250 s/d K-400, aspal, dinding batu. 400–800 BPM.' },
            { name: 'Rubber Track (Karet)', status: 'By Request — Additional Charge', desc: 'Proteksi lantai keramik & aspal hotmix' }
        ],

        // ── COMPARISON ────────────────────────────────────────
        comparison: {
            choose_this_if: [
                'Akses jalan <2 meter (gang, trotoar, dalam gedung)',
                'Perlu galian presisi tanpa merusak utilitas eksisting',
                'Butuh bobok beton atau demolisi (gunakan mode Breaker)',
                'Deadline ketat — setara kecepatan 15–20 orang kuli gali'
            ],
            choose_other_if: [
                'Volume galian besar & medan berat → Pilih Komatsu PC75',
                'Perlu kecepatan loading dump truck tinggi → Pilih Sumitomo SH75'
            ],
            compare_label: 'vs Komatsu PC75'
        },

        // ── FAQ ───────────────────────────────────────────────
        faqUnit: [
            {
                q: 'Apakah track besi merusak keramik atau aspal?',
                a: 'Tidak jika menggunakan Rubber Track (karet). Standar kami steel track, tapi opsi rubber tersedia. Informasikan saat booking agar kami persiapkan.'
            },
            {
                q: 'Berapa lama pergantian dari bucket ke breaker?',
                a: '±30–45 menit di lokasi oleh operator + mekanik kami. Konfirmasi attachment saat booking agar sudah siap dari depot.'
            },
            {
                q: 'Apakah unit ini berisik? Aman untuk kerja dekat RS atau Sekolah?',
                a: 'Mode bucket: sangat senyap, aman di area sensitif. Mode breaker: 98–102 dB, dibatasi jam 08.00–17.00 WIB di area pemukiman.'
            },
            {
                q: 'Bisa sewa harian tanpa komitmen jangka panjang?',
                a: 'Bisa. Minimum 1 shift (8 jam). Paket harian fleksibel tersedia, khususnya area Tasikmalaya & Ciamis. Hubungi admin.'
            },
            {
                q: 'Apakah buut kompresor tambahan untuk breaker?',
                a: 'Tidak. Breaker digerakkan oleh sistem hidrolik unit excavator. Lebih ringkas dan tidak butuh alat tambahan.'
            },
            {
                q: 'Apakah ada kontrak resmi?',
                a: 'Ya. SPK bermaterai disiapkan untuk setiap perjanjian sewa. Melindungi hak dan kewajiban kedua pihak secara hukum.'
            }
        ],

        // ── DOCUMENTS ─────────────────────────────────────────
        documents: ['SILO', 'SIO Operator', 'SPK Resmi'],
        hourMeter: 'Tersedia saat request',

        // ── SERVICE AREA ──────────────────────────────────────
        serviceArea: ['Tasikmalaya', 'Ciamis', 'Banjar', 'Garut', 'Pangandaran', 'Kawali', 'Cisaga'],
        serviceAreaNote: 'Seluruh Priangan Timur bisa dijangkau. Konfirmasi biaya mobilisasi via admin.'
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // UNIT 3: KOMATSU PC75 — "The Legend"
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        id: 'komatsu-pc75',
        slug: 'sewa-excavator-komatsu-pc75-land-clearing-tasikmalaya-ciamis',
        category: 'mini',
        model: 'KOMATSU PC75',
        type: 'Midi Excavator',
        tagline: 'Tanah keras, akar besar, lumpur dalam. Unit ini tidak mengenal menyerah.',
        nickName: 'The Legend',

        // ── VISUAL ASSETS ─────────────────────────────────────
        image: '/asset/units/COVER_KOMATSU PC75 (1).webp',
        seoAlt: 'Sewa Excavator Komatsu PC75 untuk land clearing lahan sawit dan galian medan berat berbatu di Tasikmalaya Ciamis',
        gallery: [
            {
                src: '/asset/units/KOMATSU_PC75_1 (1).webp',
                caption: 'Komatsu PC75 — Kondisi Unit Aktual',
                type: 'unit'
            },
            {
                src: '/asset/units/KOMATSUPC75_2 (1).webp',
                caption: 'Komatsu PC75 — Tampak Operasional',
                type: 'operasional'
            }
        ],
        galleryLabel: 'Dokumentasi Lapangan — 2024',

        // ── SEO META ──────────────────────────────────────────
        pageMeta: {
            title: 'Sewa Komatsu PC75 (Midi Excavator) Tasikmalaya & Ciamis — Spesialis Land Clearing & Medan Berat',
            description: 'Rental Excavator Komatsu PC75 di Tasikmalaya, Ciamis & Banjar. Spesialis land clearing, galian batu, off-road ekstrem. Unit 2018+, operator SIO, SPK resmi.'
        },

        // ── BADGES ────────────────────────────────────────────
        badges: [
            { label: 'HEAVY DUTY', icon: 'shield' },
            { label: 'LAND CLEARING', icon: 'tractor' },
            { label: 'OFF-ROAD READY', icon: 'muscle' }
        ],

        // ── STATUS & PRICING ──────────────────────────────────
        status: 'available',
        rentedCity: null,
        location: 'POOL PRIANGAN TIMUR',
        priceIndicative: 'Mulai Rp 2.900.000 / shift (8 jam)',
        priceNote: 'Belum termasuk solar. Medan berat & jarak jauh menyesuaikan. Kontrak proyek lebih hemat.',
        minimumRent: 'Min. 1 shift (8 jam) | Kontrak proyek jangka panjang lebih kompetitif',

        // ── SPECS ─────────────────────────────────────────────
        specs: {
            year: '2018 Up (PC75UU-5 / PC78US-6)',
            weight: '7.550 kg',
            bucket: '0.34 m³',
            maxDigDepth: '4.52 m',
            engine: 'Komatsu S4D92E (57 HP)',
            fuelConsumption: '±7–9 Liter/Jam (kerja berat)',
            transportDimension: '6.3m × 2.3m × 2.7m',
            trackType: 'Steel Track Triple Grouser (Rubber Pad by Request)'
        },

        // ── BEST FOR ──────────────────────────────────────────
        bestFor: 'Breakout force terkuat di kelas Midi. Pilihan utama untuk land clearing lahan sawit, galian pondasi gudang, dan medan berbatu/berlumpur yang tidak bisa dilalui unit lain. Sparepart paling mudah didapat di seluruh Indonesia.',

        // ── LONG DESCRIPTION ──────────────────────────────────
        longDescription: `
            <p>Tidak semua unit excavator diciptakan sama. <strong>Komatsu PC75</strong> adalah kategori berbeda — dirancang untuk medan yang akan membuat excavator biasa menyerah di jam pertama.</p>
            <p><em>Breakout force</em> superior dikombinasikan dengan steel track tipe <strong>Triple Grouser</strong> memberikan cengkeraman dan daya gali yang tidak tertandingi di kelas Midi Excavator.</p>
            <h4>Skenario Proyek Optimal:</h4>
            <ul>
                <li><strong>Land Clearing</strong> — Lahan perkebunan, pembukaan akses jalan desa berbatu</li>
                <li><strong>Galian Pondasi Berat</strong> — Gudang, pabrik, proyek infrastruktur volume besar (>1.000 m³)</li>
                <li><strong>Off-Road Extremes</strong> — Tanah berlumpur, berbatu, lahan yang belum pernah dibuka</li>
                <li><strong>Recovery</strong> — Menarik dump truck atau alat berat lain yang terperangkap lumpur</li>
            </ul>
            <p>Armada PC75 Terratron Indonesia rata-rata 2018 ke atas dengan rekam jejak perawatan terdokumentasi. Beroperasi aktif di <strong>Tasikmalaya, Ciamis, Banjar, Pangandaran</strong>, dan seluruh Priangan Timur.</p>
        `,

        // ── LOAD CHART ────────────────────────────────────────
        loadChartTitle: 'Kemampuan Angkat Heavy Lifting (Kelas Midi)',
        loadChartNote: 'Mampu mengangkat Box Culvert sedang & Pipa Beton RCP diameter 80cm.',
        loadChart: [
            { radius: '3.0 Meter', front: '± 3.100 kg', side: '± 2.100 kg' },
            { radius: '4.5 Meter', front: '± 2.050 kg', side: '± 1.350 kg' },
            { radius: 'Max Reach (6.3m)', front: '± 1.150 kg', side: '± 900 kg' }
        ],

        // ── LOGISTICS ─────────────────────────────────────────
        logistics: {
            truckType: 'Self-Loader Fuso / Tronton',
            minRoadWidth: '3.0 Meter',
            minGateHeight: 'Min. 3.0 Meter',
            groundPressure: 'Toleran tinggi — berlumpur, berbatu, tidak rata',
            mobilizationNote: 'Off-road capability tinggi. Sparepart Komatsu paling mudah didapat di pelosok Indonesia.',
            specialFeature: 'Steel Triple Grouser Track — cengkeraman maksimal di medan ekstrem'
        },

        // ── ATTACHMENTS ───────────────────────────────────────
        attachments: [
            { name: 'Bucket Heavy Duty 0.34 m³', status: 'Standard (Sudah Termasuk)', desc: 'Tanah keras, berbatu, material berat' },
            { name: 'Bucket Ditch Cleaning 0.50 m³', status: 'By Request', desc: 'Galian saluran & parit lebar' },
            { name: 'Ripper Tip', status: 'By Request', desc: 'Tanah cadas dan penetrasi akar pohon besar' }
        ],

        // ── COMPARISON ────────────────────────────────────────
        comparison: {
            choose_this_if: [
                'Medan ekstrem: berbatu, berlumpur, akar pohon, lahan belum dibuka',
                'Volume galian besar (>1.000 m³) atau proyek land clearing',
                'Loading ke Dump Truck besar (Tronton — butuh boom tinggi)',
                'Sparepart availability kritis di lokasi terpencil'
            ],
            choose_other_if: [
                'Medan normal & efisiensi solar prioritas utama → Pilih SANY SY75',
                'Proyek dalam kota / ruang sempit → Pilih CAT 305.5E2',
                'Target ritase loading tinggi di tanah gembur → Pilih Sumitomo SH75'
            ],
            compare_label: 'vs SANY SY75'
        },

        // ── FAQ ───────────────────────────────────────────────
        faqUnit: [
            {
                q: 'Unit tahun berapa? Apakah ada rekam jejak perawatan?',
                a: 'Armada kami rata-rata 2018 ke atas (PC75UU-5 / PC78US-6). Setiap unit memiliki buku servis dan history perawatan berkala yang bisa ditunjukkan saat request.'
            },
            {
                q: 'Berapa lama bisa land clearing per hektar?',
                a: 'Sangat tergantung kondisi vegetasi. Estimasi umum untuk semak & pohon diameter <20cm: ±0.5–1 Ha/hari per unit (8 jam kerja). Konsultasikan dengan tim teknis kami untuk estimasi spesifik lokasi Anda.'
            },
            {
                q: 'Apakah bisa kerja di kemiringan atau tebing?',
                a: 'Bisa. PC75 sangat stabil (Low Center of Gravity). Operator kami terlatih khusus untuk Slope Finishing dan pekerjaan di medan miring.'
            },
            {
                q: 'Jika unit rusak di lapangan yang jauh dari kota?',
                a: 'Mekanik Terratron Indonesia standby on-call 24 jam. Sparepart Komatsu adalah yang paling mudah didapat di seluruh Indonesia — ini sengaja kami pertimbangkan dalam memilih armada. Downtime >8 jam karena faktor mekanikal tidak ditagihkan.'
            },
            {
                q: 'Untuk kontrak proyek >1 bulan, apakah ada harga khusus?',
                a: 'Ya. Kontrak jangka panjang mendapatkan tarif yang jauh lebih kompetitif. Hubungi tim komersial kami untuk diskusi proyek Anda.'
            },
            {
                q: 'Apakah ada jaminan unit tidak ditarik di tengah kontrak?',
                a: 'Ada. Setiap kontrak dilindungi SPK. Unit yang sudah terikat kontrak tidak akan kami realokasikan tanpa persetujuan penyewa.'
            }
        ],

        // ── DOCUMENTS ─────────────────────────────────────────
        documents: ['SILO', 'SIO Operator', 'SPK Resmi', 'Buku Servis'],
        hourMeter: 'Tersedia saat request',

        // ── SERVICE AREA ──────────────────────────────────────
        serviceArea: ['Tasikmalaya', 'Ciamis', 'Banjar', 'Pangandaran', 'Garut', 'Banjarsari', 'Cisaga'],
        serviceAreaNote: 'Area Kalimantan & Sumatera: konfirmasi terlebih dahulu (biaya ferry + logistik).'
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // UNIT 4: SUMITOMO SH75 — "The Speedster"
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        id: 'sumitomo-sh75',
        slug: 'sewa-excavator-sumitomo-sh75-loading-cepat-tasik-ciamis',
        category: 'mini',
        model: 'SUMITOMO SH75',
        type: 'Midi Excavator',
        tagline: 'Swing lebih cepat. Ritase lebih banyak. Proyek selesai lebih awal.',
        nickName: 'The Speedster',

        // ── VISUAL ASSETS ─────────────────────────────────────
        image: '/asset/units/COVER_SUMITOMO SH75 (1).webp',
        seoAlt: 'Sewa Excavator Sumitomo SH75 untuk loading cepat cut and fill perumahan dan proyek ritase tinggi di Tasikmalaya Ciamis Banjar',
        gallery: [
            {
                src: '/asset/units/SUMITOMO_SH75_1 (1).webp',
                caption: 'Sumitomo SH75 — Kondisi Unit Aktual',
                type: 'unit'
            },
            {
                src: '/asset/units/SUMITOMOSH75_2 (1).webp',
                caption: 'Sumitomo SH75 — Tampak Operasional',
                type: 'operasional'
            }
        ],
        galleryLabel: 'Dokumentasi Lapangan — 2025',

        // ── SEO META ──────────────────────────────────────────
        pageMeta: {
            title: 'Sewa Sumitomo SH75 (Midi Excavator) Tasikmalaya & Ciamis — Spesialis Loading Cepat & Cut Fill',
            description: 'Rental Excavator Sumitomo SH75 di Tasikmalaya, Ciamis & Banjar. Cycle time tercepat di kelasnya, full AC cabin. Spesialis Cut & Fill perumahan & proyek ritase tinggi.'
        },

        // ── BADGES ────────────────────────────────────────────
        badges: [
            { label: 'CYCLE TIME TERCEPAT', icon: 'rocket' },
            { label: 'FULL AC CABIN', icon: 'snow' },
            { label: 'KEJAR TARGET RITASE', icon: 'timer' }
        ],

        // ── STATUS & PRICING ──────────────────────────────────
        status: 'available',
        rentedCity: null,
        location: 'POOL PRIANGAN TIMUR',
        priceIndicative: 'Mulai Rp 2.900.000 / shift (8 jam)',
        priceNote: 'Belum termasuk solar. Kontrak bulanan min. 150 jam dengan tarif lebih hemat.',
        minimumRent: 'Min. 1 shift (8 jam) | Kontrak bulanan min. 150 jam/bulan',

        // ── SPECS ─────────────────────────────────────────────
        specs: {
            year: '2019 Up',
            weight: '7.400 kg',
            bucket: '0.32 m³',
            maxDigDepth: '4.38 m',
            engine: 'Isuzu 4LE2 Turbocharged (55 HP)',
            fuelConsumption: '±6–8 Liter/Jam',
            transportDimension: '6.2m × 2.3m × 2.65m',
            trackType: 'Steel Track (Rubber Pad by Request)'
        },

        // ── BEST FOR ──────────────────────────────────────────
        bestFor: 'Cycle time tercepat di kelas Midi berkat Sumitomo Intelligent Hydraulic System (SIHS). Kabin AC tertutup untuk produktivitas operator full-shift. Pilihan utama proyek Cut & Fill perumahan dan target ritase dump truck harian.',

        // ── LONG DESCRIPTION ──────────────────────────────────
        longDescription: `
            <p>Di proyek Cut & Fill yang mengejar volume harian, setiap detik cycle time adalah uang. <strong>Sumitomo SH75</strong> dirancang tepat untuk konteks ini.</p>
            <p>Sistem <strong>Sumitomo Intelligent Hydraulic System (SIHS)</strong> memprioritaskan kecepatan <em>boom-up</em> dan <em>arm-in</em> — hasilnya, swing cycle lebih cepat <strong>15% dibanding kompetitor</strong> di kelas yang sama. Artinya: lebih banyak dump truck yang terisi, lebih banyak ritase per shift, target volume harian tercapai lebih awal.</p>
            <h4>Skenario Proyek Optimal:</h4>
            <ul>
                <li><strong>Cut & Fill Perumahan</strong> — Target ritase harian di tanah gembur & tanah merah</li>
                <li><strong>Pematangan Lahan Industri</strong> — Volume besar dengan jadwal ketat</li>
                <li><strong>Loading Dump Truck</strong> — Memaksimalkan jumlah truk yang terisi per shift</li>
            </ul>
            <p>Kabin tertutup ber-AC memastikan operator tetap produktif hingga akhir shift tanpa fatik berlebih. Beroperasi aktif di <strong>Tasikmalaya, Ciamis, Banjar, Pangandaran</strong>, dan seluruh Priangan Timur.</p>
        `,

        // ── LOAD CHART ────────────────────────────────────────
        loadChartTitle: 'Kapasitas Angkat & Cycle Time',
        loadChartNote: 'Asumsi operator skill medium-high & kondisi tanah gembur / tanah merah biasa.',
        loadChart: [
            { radius: '3.0 Meter', front: '± 2.950 kg', side: '± 2.000 kg' },
            { radius: '4.5 Meter', front: '± 1.900 kg', side: '± 1.200 kg' },
            { radius: 'Max Reach (6.1m)', front: '± 1.050 kg', side: '± 820 kg' }
        ],

        // ── PRODUCTIVITY TABLE (Unique to SH75) ──────────────
        productivityTable: [
            { activity: 'Gali – Buang (90° Swing)', cycleTime: '10–12 Detik', outputPerHour: '±120–140 m³' },
            { activity: 'Loading Dump Truck (6m³)', cycleTime: '2–3 Menit / Truk', outputPerHour: '±20–25 Truk' }
        ],
        productivityNote: 'Asumsi operator skill medium-high & kondisi tanah gembur.',

        // ── LOGISTICS ─────────────────────────────────────────
        logistics: {
            truckType: 'Self-Loader Fuso / Tronton',
            minRoadWidth: '3.0 Meter',
            minGateHeight: 'Min. 3.0 Meter',
            groundPressure: 'Standar — cocok untuk tanah gembur dan tanah merah',
            mobilizationNote: 'Mesin Isuzu Turbo: suara halus dan responsif.',
            specialFeature: 'SIHS (Sumitomo Intelligent Hydraulic System) — prioritas kecepatan boom & arm'
        },

        // ── ATTACHMENTS ───────────────────────────────────────
        attachments: [
            { name: 'Bucket GP 0.32 m³', status: 'Standard (Sudah Termasuk)', desc: 'Loading tanah, cut & fill, material gembur' },
            { name: 'Bucket Ditch Cleaning 0.50 m³', status: 'By Request', desc: 'Galian saluran lebar' }
        ],

        // ── COMPARISON ────────────────────────────────────────
        comparison: {
            choose_this_if: [
                'Target utama adalah ritase harian (jumlah truk yang terisi)',
                'Material: tanah gembur, pasir, tanah merah — proyek Cut & Fill perumahan',
                'Kabin AC diutamakan untuk produktivitas operator full-shift',
                'Efisiensi solar tetap penting meski unit cepat'
            ],
            choose_other_if: [
                'Tanah sangat keras, berbatu, atau perlu Digging Power ekstra → Pilih Komatsu PC75',
                'Ruang sangat sempit & perlu masuk gang → Pilih CAT 305.5E2'
            ],
            compare_label: 'vs Komatsu PC75'
        },

        // ── FAQ ───────────────────────────────────────────────
        faqUnit: [
            {
                q: 'Apakah boros solar karena sistemnya cepat?',
                a: 'Justru sebaliknya. SIHS mengatur aliran oli hidrolik sesuai beban aktual. Untuk loading tanah lunak, konsumsi solar sangat efisien dibanding sistem hidrolik konvensional.'
            },
            {
                q: 'Kabin ada AC? Kondisi interior seperti apa?',
                a: 'Unit SH75 kami full cabin tertutup dengan AC dingin. Kondisi interior dijaga bersih dan layak. Operator bekerja nyaman dari pagi hingga sore.'
            },
            {
                q: 'Apakah cocok untuk material keras atau tanah cadas?',
                a: 'SH75 tetap mampu, tapi bukan keunggulan utamanya. Untuk tanah keras atau medan berat, Komatsu PC75 adalah pilihan yang lebih tepat.'
            },
            {
                q: 'Sistem pembayaran untuk proyek bulanan?',
                a: 'DP 30% sebelum mobilisasi, sisanya per termin 2 minggu atau sesuai kesepakatan. SPK wajib dibuat untuk setiap kontrak.'
            },
            {
                q: 'Apakah ada garansi target ritase tercapai?',
                a: 'Kami dapat memberikan data cycle time aktual dari proyek referensi sebagai acuan estimasi. Variabel di lapangan (antrean truk, kondisi akses, cuaca) di luar kendali unit.'
            },
            {
                q: 'Area layanan mana saja?',
                a: 'Tasikmalaya, Ciamis, Banjar, Pangandaran, Garut, Singaparna. Luar Priangan Timur konfirmasi ketersediaan dan biaya mobilisasi.'
            }
        ],

        // ── DOCUMENTS ─────────────────────────────────────────
        documents: ['SILO', 'SIO Operator', 'SPK Resmi'],
        hourMeter: 'Tersedia saat request',

        // ── SERVICE AREA ──────────────────────────────────────
        serviceArea: ['Tasikmalaya', 'Ciamis', 'Banjar', 'Pangandaran', 'Garut', 'Singaparna'],
        serviceAreaNote: 'Luar Priangan Timur: konfirmasi ketersediaan dan biaya mobilisasi terlebih dahulu.'
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // UNIT 5: KOBELCO SK50P — "The Urban Ninja"
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        id: 'kobelco-sk50p',
        slug: 'sewa-excavator-kobelco-sk50p-mini-lincah-tasikmalaya',
        category: 'mini',
        model: 'KOBELCO SK50P',
        type: 'Mini Excavator',
        tagline: 'Kompak, tangguh, dan lincah bermanuver di area pemukiman padat.',
        nickName: 'The Urban Ninja',

        image: '/asset/units/cover_kobelcoSK50p (1).webp',
        seoAlt: 'Sewa Excavator Mini Kobelco SK50P untuk galian perumahan dan saluran sempit di Tasikmalaya Ciamis',
        gallery: [
            {
                src: '/asset/units/Kobelco SK50P (1).webp',
                caption: 'Kobelco SK50P — Kondisi Aktual',
                type: 'unit'
            }
        ],
        galleryLabel: 'Dokumentasi Lapangan',
        pageMeta: {
            title: 'Sewa Excavator Kobelco SK50P — Lincah untuk Proyek Perumahan & Saluran',
            description: 'Rental Excavator Kobelco SK50P class 5 Ton. Sangat lincah di lahan sempit, cocok untuk galian utilitas dan landscaping.'
        },
        badges: [
            { label: 'SUPER LINCAH', icon: 'power' },
            { label: 'BBM EKONOMIS', icon: 'fuel' },
            { label: 'AMAN DI GANG PADAT', icon: 'city' }
        ],
        status: 'available',
        rentedCity: null,
        location: 'POOL PRIANGAN TIMUR',
        priceIndicative: 'Mulai Rp 2.400.000 / shift (8 jam)',
        priceNote: 'Belum termasuk solar. Harga area Priangan Timur',
        minimumRent: 'Min. 1 shift (8 jam)',
        specs: {
            year: 'Standard',
            weight: '5.100 kg',
            bucket: '0.16 m³',
            maxDigDepth: '3.8 m',
            engine: 'Yanmar 4TNV88 (39 HP)',
            fuelConsumption: '±4–6 Liter/Jam',
            transportDimension: '5.2m × 1.96m × 2.6m',
            trackType: 'Steel Track (Rubber Pad by Request)'
        },
        bestFor: 'Proyek perumahan, galian utilitas sempit, pembuatan parit kecil, dan landscaping dengan manuver luar biasa di ruang terbatas.',
        longDescription: `
            <p><strong>Kobelco SK50P</strong> adalah alat yang dirancang untuk mengatasi tantangan proyek di area yang benar-benar padat dan sulit diakses. Bobotnya yang ringan dan ukurannya yang kompak memastikan Anda bisa masuk ke pemukiman dan bekerja dengan produktivitas tinggi tanpa merusak fasilitas eksisting.</p>
            <p>Responsivitas hidroliknya menjadikan alat ini sangat presisi. Sangat meminimalisir kesalahan dan kerusakan utilitas eksisting yang biasa terjadi pada galian di area sipil maupun perumahan elit.</p>
        `,
        loadChartTitle: 'Kemampuan Angkat Utilitas Ringan',
        loadChartNote: 'Aman untuk ngangkat Pipa HDPE dan material parit.',
        loadChart: [
            { radius: '2.5 Meter', front: '± 2.000 kg', side: '± 1.200 kg' },
            { radius: '4.0 Meter', front: '± 1.000 kg', side: '± 650 kg' }
        ],
        logistics: {
            truckType: 'Towing / CDD Bak',
            minRoadWidth: '2.0 Meter',
            minGateHeight: '2.8 Meter',
            groundPressure: 'Rendah',
            mobilizationNote: 'Aman ditowing truk standar, biaya murah.'
        },
        attachments: [
            { name: 'Bucket GP 0.16 m³', status: 'Standard', desc: 'Galian konvensional dan parit' }
        ],
        comparison: {
            choose_this_if: ['Ruang terbatas', 'Galian utilitas kecil', 'Biaya angkut rendah'],
            choose_other_if: ['Volume galian lebih besar → Pilih SANY SY75'],
            compare_label: 'vs SANY SY75'
        },
        faqUnit: [
            { q: 'Masuk gang perumahan?', a: 'Sangat bisa. Lebarnya di bawah 2 meter.' }
        ],

        documents: ['SILO', 'SIO Operator', 'SPK Resmi'],
        hourMeter: 'Tersedia',
        serviceArea: ['Tasikmalaya', 'Ciamis', 'Banjar']
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // UNIT 6: SUMITOMO SH80 — "The Compact Powerhouse"
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        id: 'sumitomo-sh80',
        slug: 'sewa-excavator-sumitomo-sh80-8-ton-galian-pondasi-ciamis',
        category: 'mini',
        model: 'SUMITOMO SH80 (Setara PC80)',
        type: 'Midi Excavator',
        tagline: 'Tenaga ekstra di kelas Midi untuk galian pondasi tangguh dan ritase stabil.',
        nickName: 'The Compact Powerhouse',

        image: '/asset/units/cover_sumitomopc80 (1).webp',
        seoAlt: 'Sewa Excavator Sumitomo SH80 Setara PC80 untuk pematangan lahan dan galian pondasi',
        gallery: [
            {
                src: '/asset/units/cover_sumitomopc80 (1).webp',
                caption: 'Sumitomo SH80 Setara PC80',
                type: 'unit'
            }
        ],
        galleryLabel: 'Dokumentasi Lapangan',
        pageMeta: {
            title: 'Sewa Excavator Sumitomo SH80 (Kelas 8 Ton) — Tenaga Ekstra Galian Pondasi',
            description: 'Rental Excavator Sumitomo SH80 (Setara PC80). Tenaga gali luar biasa tangguh untuk pematangan lahan dan parit menengah.'
        },
        badges: [
            { label: 'EXTRA DIG POWER', icon: 'muscle' },
            { label: 'SANGAT STABIL', icon: 'shield' },
            { label: 'MID-SCALE PROJECT', icon: 'tractor' }
        ],
        status: 'available',
        rentedCity: null,
        location: 'POOL PRIANGAN TIMUR',
        priceIndicative: 'Mulai Rp 2.900.000 / shift (8 jam)',
        priceNote: 'Belum termasuk solar.',
        minimumRent: 'Min. 1 shift (8 jam)',
        specs: {
            year: 'Standard',
            weight: '8.000 kg',
            bucket: '0.38 m³',
            maxDigDepth: '4.6 m',
            engine: 'Isuzu 4LE2 (54 HP)',
            fuelConsumption: '±7–9 Liter/Jam',
            transportDimension: '6.4m × 2.3m × 2.7m',
            trackType: 'Steel Track'
        },
        bestFor: 'Proyek galian pondasi ukuran menengah ke atas, pengerjaan basement ringan, dan pematangan lahan skala tanggung.',
        longDescription: `
            <p><strong>Sumitomo SH80</strong> atau secara operasional sering dirujuk setara PC80, adalah unit andalan untuk menjembatani proyek yang terlalu besar bagi mini excavator, namun terlalu kecil diakses oleh Standard Excavator 20 Ton.</p>
            <p>Dengan bobot 8 ton, stabilitas kerjanya sangat luar biasa. Kemampuan mengeruk tanah padat atau lahan belukar sangat bisa diandalkan, sekaligus tetap menjaga keunggulan biaya sewa yang tidak membengkak layaknya menyewa alat besar.</p>
        `,
        loadChartTitle: 'Safe Working Load',
        loadChartNote: 'Stabil untuk mengangkat gorong-gorong dan material berat skala menengah.',
        loadChart: [
            { radius: '3.0 Meter', front: '± 3.200 kg', side: '± 2.200 kg' }
        ],
        logistics: {
            truckType: 'Tronton / Fuso',
            minRoadWidth: '3.0 Meter',
            minGateHeight: '3.0 Meter',
            groundPressure: 'Menengah',
            mobilizationNote: 'Tersedia sewa long term antar kota.'
        },
        attachments: [
            { name: 'Bucket GP 0.38 m³', status: 'Standard', desc: 'Bucket besar mempercepat time cycle' }
        ],
        comparison: {
            choose_this_if: ['Perlu tenaga lebih di kelas Midi', 'Loading truck skala sedang secara cepat'],
            choose_other_if: ['Butuh excavator kelas besar 20 Ton → Pilih SH200'],
            compare_label: 'vs SH200'
        },
        faqUnit: [
            { q: 'Penyewa biasa menyebutnya PC80?', a: 'Iya! PC sebenarnya penamaan dari merk Komatsu, namun klien lapangan sering secara general menyebut semua kelas 8 Ton sebagai PC80. Unit ini adalah Sumitomo SH80 yang setara spesifikasinya secara performa dengan lini PC.' }
        ],
        documents: ['SILO', 'SIO Operator', 'SPK Resmi'],
        hourMeter: 'Tersedia',
        serviceArea: ['Ciamis', 'Tasikmalaya', 'Banjar']
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // UNIT 7: SUMITOMO SH200 — "The Volume Conqueror"
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        id: 'sumitomo-sh200',
        slug: 'sewa-excavator-20-ton-sumitomo-sh200-cut-fill-tasikmalaya',
        category: 'medium',
        model: 'SUMITOMO SH200 (Setara PC200)',
        type: 'Medium Excavator',
        tagline: 'Raja ritase untuk manuver pengerukan volume massal dalam waktu singkat.',
        nickName: 'The Volume Conqueror',

        image: '/asset/units/cover_sumitomopc200 (1).webp',
        seoAlt: 'Sewa Excavator Sumitomo SH200 (20 Ton) untuk pengerukan massal dan infrastruktur di Priangan Timur',
        gallery: [
            {
                src: '/asset/units/cover_sumitomopc200 (1).webp',
                caption: 'Sumitomo SH200 (Setara PC200)',
                type: 'unit'
            },
            {
                src: '/asset/units/excavator-pc200 (1).webp',
                caption: 'Ilustrasi Model SH200/PC200 Class',
                type: 'operasional'
            }
        ],
        galleryLabel: 'Dokumentasi Lapangan',
        pageMeta: {
            title: 'Sewa Excavator 20 Ton Sumitomo SH200 — Ahli Cut & Fill Massal',
            description: 'Rental Excavator Kelas 20 Ton (Sumitomo SH200 / Setara PC200). Solusi proyek infrastruktur, pertambangan, dan pengerukan volume besar.'
        },
        badges: [
            { label: 'INFRASTRUCTURE', icon: 'power' },
            { label: 'VOLUME MASSAL', icon: 'rocket' },
            { label: 'HEAVY SCALE', icon: 'muscle' }
        ],
        status: 'available',
        rentedCity: null,
        location: 'POOL PRIANGAN TIMUR',
        priceIndicative: 'Mulai Rp 180.000 / Jam',
        priceNote: 'Minimal sewa 100 jam. Harga belum termasuk solar & mobilisasi lowbed.',
        minimumRent: 'Min. 100 Jam',
        specs: {
            year: 'Standard',
            weight: '20.000 kg',
            bucket: '0.90 m³',
            maxDigDepth: '6.6 m',
            engine: 'Isuzu (157 HP)',
            fuelConsumption: '±14–18 Liter/Jam',
            transportDimension: '9.4m × 2.8m × 3.0m',
            trackType: 'Steel Track'
        },
        bestFor: 'Proyek infrastruktur berskala besar, quarry, cut and fill bukit, bendungan, dan sektor dengan kebutuhan pergerakan volume masif.',
        longDescription: `
            <p>Bila proyek dihadapkan pada target jutaan kubik tanah atau batuan, Anda tidak bisa menggunakan alat kecil. <strong>Sumitomo SH200</strong> (setara kelas PC200 untuk ukuran 20 Ton) adalah monster yang dipanggil untuk mendominasi lapangan dan menghemat ratusan jam kerja.</p>
            <p>Didesain untuk berkolaborasi secara intens dengan formasi puluhan Dump Truck Tronton, excavator kelas berat ini sanggup memindahkan hampir 1 kubik material dalam satu kali ayunan <em>boom</em>. Respons hidrolik stabil dari Sumitomo menjaga efisiensi siklus loading secara taktis dan tak tertandingi bahkan di bawah beban penuh di medan terik lahan perbukitan.</p>
        `,
        loadChartTitle: 'Standard Working Load 20 Ton',
        loadChartNote: 'Data untuk boom standar, tanah padat.',
        loadChart: [
            { radius: '5.0 Meter', front: '± 7.500 kg', side: '± 5.500 kg' }
        ],
        logistics: {
            truckType: 'Truk Lowbed / Dolly',
            minRoadWidth: '4.0 Meter',
            minGateHeight: '3.5 Meter',
            groundPressure: 'Medium-High',
            mobilizationNote: 'Butuh regulasi trayek alat berat (voorijder malam hari).'
        },
        attachments: [
            { name: 'Standard Bucket 0.90 m³', status: 'Standard', desc: 'Kapasitas ekstrem penyayat tebing' }
        ],
        comparison: {
            choose_this_if: ['Cut & Fill bukit', 'Pembangunan infrastruktur jalan', 'Quarry / tambang skala menengah'],
            choose_other_if: ['Proyek perumahan yang jalannya sempit → Pilih Kelas Midi / SH75'],
            compare_label: 'vs SH75'
        },
        faqUnit: [
            { q: 'Apakah unit mobilisasinya susah?', a: 'Mobilisasi dilakukan menggunakan truk Lowbed khusus, kami yang mengatur jadwal pengiriman biasanya berjalan pada jalur trayek malam untuk menghindari jam sibuk sipil.' }
        ],
        documents: ['SILO', 'SIO Operator', 'SPK Resmi'],
        hourMeter: 'Tersedia',
        serviceArea: ['Ciamis', 'Tasikmalaya', 'Banjar', 'Pangandaran', 'Garut', 'Priangan Timur']
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // UNIT 8: DOZER KOMATSU D31P — "The Swamp Master"
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        id: 'komatsu-d31p',
        slug: 'sewa-dozer-komatsu-d31p-swamp-dozer-ciamis-tasikmalaya',
        category: 'dozer',
        model: 'KOMATSU D31P',
        type: 'Swamp Dozer',
        tagline: 'Raja lahan basah. Pemadatan dan perataan tanah lunak tanpa kendala amblas.',
        nickName: 'The Swamp Master',

        image: '/asset/units/cover_komatsuD31p (1).webp',
        seoAlt: 'Sewa Swamp Dozer Komatsu D31P untuk perataan tanah rawa dan leveling permukaan tanah di Tasikmalaya dan Ciamis',
        gallery: [
            {
                src: '/asset/units/cover_komatsuD31p (1).webp',
                caption: 'Komatsu D31P - Cover',
                type: 'unit'
            },
            {
                src: '/asset/units/dozer Komatsu D31P (1).webp',
                caption: 'Komatsu D31P - Lapangan Operasional',
                type: 'operasional'
            }
        ],
        galleryLabel: 'Dokumentasi Lapangan',
        pageMeta: {
            title: 'Sewa Komatsu D31P Swamp Dozer — Ahli Perataan Tanah Lunak & Rawa',
            description: 'Rental Dozer Komatsu D31P. Ground clearance rendah dan piringan sepatu LGP yang menghindari unit tenggelam terperangkap di lahan basah/rawa.'
        },
        badges: [
            { label: 'SWAMP DOZER', icon: 'shield' },
            { label: 'ANTI AMBLAS', icon: 'power' },
            { label: 'PRESISI LEVELING', icon: 'target' }
        ],
        status: 'available',
        rentedCity: null,
        location: 'POOL PRIANGAN TIMUR',
        priceIndicative: 'Mulai Rp 170.000 / Jam',
        priceNote: 'Minimal sewa 50 jam. Harga di luar solar BBM & mobilisasi.',
        minimumRent: 'Min. 50 Jam',
        specs: {
            year: 'Standard',
            weight: '7.000 kg',
            bucket: 'Blade 1.15 m³ (PAT)',
            maxDigDepth: '-',
            engine: 'Komatsu S4D102E (70 HP)',
            fuelConsumption: '±6–9 Liter/Jam',
            transportDimension: '3.9m × 2.8m × 2.7m',
            trackType: 'Swamp Shoe (LGP - Low Ground Pressure)'
        },
        bestFor: 'Site preparation di kondisi tanah perumahan basah, lahan sawah alih fungsi primer, dan perataan (leveling) setelah pembuangan cut and fill oleh eskavator.',
        longDescription: `
            <p>Ketika Anda memasuki kawasan yang dominan tanah lunak atau struktur rawanya masih belum stabil, menggunakan buldoser tipe biasa sangat berisiko amblas (bogged down). Solusi mutlak untuk masalah site plan Anda adalah armada *Swamp* (P-type) kami, <strong>Komatsu D31P</strong>.</p>
            <p>Desain *Low Ground Pressure (LGP)* pada track lebarnya secara pintar mendistribusikan bobot 7 ton-nya. Opsi blade spesialis PAT (Power Angle Tilt) memungkinkan pisau buldosernya memuat presisi kontur sesuai blueprint arsitektur tanah, mendorong timbunan dengan luwes menghasilkan tapak padat tanpa jejak amblas.</p>
        `,
        loadChartTitle: 'Blade Capacity',
        loadChartNote: 'Kapasitas material di depan PAT Blade',
        loadChart: [
            { radius: 'Kapasitas Standard', front: '± 1.15 M.Kubik / Dorong', side: '-' }
        ],
        logistics: {
            truckType: 'Self Loader Fuso / Tronton',
            minRoadWidth: '3.5 Meter (Posisi Serong)',
            minGateHeight: '3.0 Meter',
            groundPressure: 'Sangat Rendah (Anti Amblas di Lahan Rawa Sipil)',
            mobilizationNote: 'Lebar track mengharuskan Fuso minimal.'
        },
        attachments: [
            { name: 'PAT Blade (Power Angle Tilt)', status: 'Standard', desc: 'Bisa diputar sudut memotong jalan/lereng dengan akurasi 100%' }
        ],
        comparison: {
            choose_this_if: ['Tanah rawa lunak / bekas sawah', 'Menyiapkan pad perumahan / leveling ruko'],
            choose_other_if: ['Area luas padat dan butuh dorongan batu raksasa → Pilih D51P Kelas Tembus'],
            compare_label: 'vs Dozer D51'
        },
        faqUnit: [
            { q: 'P pada "D31P" untuk apa?', a: 'Kode "P" atau "PX" pada unit Komatsu menandakan tipe Swamp atau Swamp Dozer. Desain sepatu track (shoe)-nya jauh lebih lebar berupa segitiga penahan yang menjaga unit selalu terapung secara teknikal di atas lumpur tebal.' }
        ],
        documents: ['SILO', 'SIO Operator', 'SPK Resmi'],
        hourMeter: 'Tersedia',
        serviceArea: ['Ciamis', 'Tasikmalaya', 'Banjar', 'Pangandaran', 'Garut', 'Priangan Timur']
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // UNIT 9: DOZER KOMATSU D51P — "The Earth Mover"
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        id: 'komatsu-d51p',
        slug: 'sewa-dozer-komatsu-d51p-medium-swamp-dozer-tasikmalaya',
        category: 'dozer',
        model: 'KOMATSU D51P',
        type: 'Medium Swamp Dozer',
        tagline: 'Keseimbangan daya dorong ekstrem dengan kelincahan Swamp Track.',
        nickName: 'The Earth Mover',

        image: '/asset/units/cover_komatsuD51 (1).webp',
        seoAlt: 'Sewa Medium Dozer Komatsu D51P pendorong tanah dan perataan kawasan industri di Priangan Timur Ciamis Tasik',
        gallery: [
            {
                src: '/asset/units/cover_komatsuD51 (1).webp',
                caption: 'Komatsu D51P - Tampilan Fisik',
                type: 'unit'
            },
            {
                src: '/asset/units/dozer Komatsu D51 (1).webp',
                caption: 'Komatsu D51P - Menyiapkan Land Clearing',
                type: 'operasional'
            }
        ],
        galleryLabel: 'Dokumentasi Lapangan',
        pageMeta: {
            title: 'Sewa Dozer Komatsu D51P (Medium Swamp) — Master Eksekusi Lahan Industri Skala Besar',
            description: 'Rental Swamp Dozer Komatsu D51P kelas 13 Ton. Tenaga besar untuk mengamankan leveling di lahan industri dan perkebunan.'
        },
        badges: [
            { label: 'SUPER VISIBILITY', icon: 'target' },
            { label: 'MEDIUM SCALE', icon: 'power' },
            { label: 'HIGH PUSH POWER', icon: 'muscle' }
        ],
        status: 'available',
        rentedCity: null,
        location: 'POOL PRIANGAN TIMUR',
        priceIndicative: 'Mulai Rp 250.000 / Jam',
        priceNote: 'Minimal sewa 50 jam. BBM Solar diluar kewajiban. Mobilisasi Tronton.',
        minimumRent: 'Min. 50-100 Jam',
        specs: {
            year: 'Standard',
            weight: '13.000 kg',
            bucket: 'Blade 2.90 m³ (PAT)',
            maxDigDepth: '-',
            engine: 'Komatsu (130 HP)',
            fuelConsumption: '±12–15 Liter/Jam',
            transportDimension: '4.8m × 3.0m × 2.9m',
            trackType: 'Swamp Shoe LGP'
        },
        bestFor: 'Proyek pematangan lahan kawasan industri besar (>10 hektar), pembukaan perkebunan mentah, dan distribusi volume massal yang butuh power signifikan melebihi kelas D31.',
        longDescription: `
            <p>Untuk site prep kawasan pabrik, konstruksi area bandara, dan perkebunan sawit yang luas, kecepatan perataan adalah kunci margin deviasi Anda. <strong>Komatsu D51P</strong> masuk pada jajaran dozer kelas medium (13 ton) yang menawarkan dorongan super kuat tanpa kompromi meski berpijak di area basah berlumpur.</p>
            <p>Desain kap mesin inovatif *Super Slant Nose* menjadikan pandangan visual operator dari dalam kabin menguasai arena operasi seutuhnya. Operator mampu memantau ujung *blade* saat meratakan tanggul tanpa diganggu moncong mesin secara frontal (blind spot free)—menjamin akurasi manuver pada tebing rawa dan mereduksi pengerjaan ulang yang amat menyita anggaran operasional proyek.</p>
        `,
        loadChartTitle: 'Blade Capacity / Kubikasi Dorong',
        loadChartNote: 'Kapasitas material dorongan penuh',
        loadChart: [
            { radius: 'Kapasitas Standard', front: '± 2.90 M.Kubik / Dorong', side: '-' }
        ],
        logistics: {
            truckType: 'Tronton / Lowbed',
            minRoadWidth: '4.0 Meter',
            minGateHeight: '3.5 Meter',
            groundPressure: 'Rendah-Sedang',
            mobilizationNote: 'Blade sangat lebar melarang mobilisasi area perumahan sempit tanpa pengawalan.'
        },
        attachments: [
            { name: 'Standard Blade Ekstra Lebar', status: 'Standard', desc: 'Membabat jalan perhutani dalam hitungan menit.' }
        ],
        comparison: {
            choose_this_if: ['Proyek reklamasi / perataan kawasan industri luas', 'Bukit dan lahan tak rata banyak batuan'],
            choose_other_if: ['Hanya untuk meratakan tanah cluster perumahan desa → Pilih D31P'],
            compare_label: 'vs Dozer D31'
        },
        faqUnit: [
            { q: 'Apakah alat ini kuat menumbangkan semak belukar berat tebal?', a: 'Daya tempurnya 130 tenaga kuda, menumbangkan ilalang kasar dan perdu belukar pada pembukaan lahan mentah adalah santapannya.' }
        ],
        documents: ['SILO', 'SIO Operator', 'SPK Resmi'],
        hourMeter: 'Tersedia',
        serviceArea: ['Ciamis', 'Tasikmalaya', 'Banjar', 'Pangandaran', 'Garut', 'Priangan Timur']
    }
]

// ============================================================
//  ATTACHMENT DATA (Global — untuk ditampilkan di halaman Armada)
// ============================================================
export const attachmentData = [
    {
        id: 'breaker',
        name: 'Hydraulic Breaker',
        image: '/asset/units/CAT_305.5E2_2 (1).webp',
        spec: 'Chisel ∅68mm | 400–800 BPM',
        desc: 'Untuk bobok beton K-250/K-400, kupas aspal, demolisi. Tersedia untuk CAT 305.5E2.',
        compatibleWith: ['cat-305']
    },
    {
        id: 'bucket-ditch',
        name: 'Bucket Ditch Cleaning',
        image: '/asset/units/KOMATSU_PC75_1 (1).webp',
        spec: 'Kapasitas 0.50 m³',
        desc: 'Untuk galian saluran U-Ditch lebar dan normalisasi drainase.',
        compatibleWith: ['sany-sy75', 'komatsu-pc75', 'sumitomo-sh75']
    },
    {
        id: 'ripper',
        name: 'Bucket Ripper / Tip',
        image: '/asset/units/KOMATSUPC75_2 (1).webp',
        spec: 'Heavy Duty Steel',
        desc: 'Untuk penetrasi tanah cadas, batu keras ringan, dan akar pohon besar.',
        compatibleWith: ['sany-sy75', 'komatsu-pc75']
    }
]

// ============================================================
//  DEPLOYMENT HISTORY (Project References)
// ============================================================
export const deploymentHistory = [
    {
        id: 'proj-1',
        category: 'PERSIAPAN LAHAN MEDIS',
        title: 'Grading & Stripping RS Mitra Idaman Banjar',
        image: '/asset/projects/rs_mitra_grading_v3_1771639871654 (1).webp',
        imageAlt: 'Jasa Grading Tanah Banjar, Sewa Mini Excavator Banjar, Stripping Lahan Proyek',
        units: '1x Mini Excavator CAT 305',
        challenge: 'Stripping dan grading dengan presisi tinggi pada lahan RS Mitra Idaman sebelum pondasi dicor.',
        solution: 'CAT 305 mengeksekusi pengupasan tanah atas secara rapi sesuai elevasi konsultan perencana.',
        location: 'RS Mitra Idaman, Banjar',
        duration: '14 Hari (Target Presisi)'
    },
    {
        id: 'proj-2',
        category: 'DEMOLISI STRUKTUR LAMA',
        title: 'Demolisi Bangunan RS Mitra Idaman Banjar',
        image: '/asset/projects/rs_mitra_demo_v3_1771639888009 (1).webp',
        imageAlt: 'Jasa Bongkar Gedung Banjar, Demolisi Bangunan Banjar, Sewa Excavator Sumitomo SH78',
        units: '1x Excavator Sumitomo SH78',
        challenge: 'Demolisi struktur lama dan site clearance cepat di area RS tanpa mengganggu lingkungan sekitar.',
        solution: 'Sumitomo SH78 membongkar puing beton secara agresif dan memuatnya ke truk dengan ritase tinggi.',
        location: 'RS Mitra Idaman, Banjar',
        duration: '7 Hari (Site Clearance)'
    },
    {
        id: 'proj-3',
        category: 'LEVELING INFRASTRUKTUR',
        title: 'Grading & Leveling Lahan Binangun, Banjar',
        image: '/asset/projects/binangun_leveling_v3_1771639913360 (1).webp',
        imageAlt: 'Jasa Leveling Tanah Binangun, Cut and Fill Banjar, Sewa Dozer Komatsu D31P',
        units: 'Komatsu PC75 & Dozer Komatsu D31P',
        challenge: 'Meratakan kontur tanah bergelombang yang menuntut pemindahan volume tanah masif sekaligus pemadatan.',
        solution: 'Sinergi PC75 dan Dozer D31P menghasilkan leveling sub-grade yang padat tanpa risiko unit amblas.',
        location: 'Binangun, Kota Banjar',
        duration: '21 Hari (Pemadatan Awal)'
    },
    {
        id: 'proj-4',
        category: 'DEMOLISI RITEL KOMERSIAL',
        title: 'Pembongkaran Ritel Erablue Priangan Timur',
        image: '/asset/projects/erablue_demo_v3_1771639932998 (1).webp',
        imageAlt: 'Jasa Pembongkaran Ruko Ciamis, Bongkar Bangunan Rajapolah, Sewa Alat Berat Tasikmalaya',
        units: 'Armada Excavator Multi-Unit',
        challenge: 'Pembongkaran paralel ruko tua di tiga pusat komersial padat lalu lintas untuk ekspansi Erablue.',
        solution: 'Tim taktis Terratron membersihkan lahan secara serentak tanpa merusak struktur properti yang berhimpitan.',
        location: 'Ciamis, Banjar, Rajapolah (Tasikmalaya)',
        duration: '10 Hari per Titik'
    }
]

// ============================================================
//  FAQ DATA GLOBAL (Halaman Armada — Pertanyaan Umum)
// ============================================================
export const faqData = [
    {
        question: 'Apakah harga sewa sudah termasuk BBM & Operator?',
        answer: 'Harga sewa mencakup unit dan upah operator standar (8 jam kerja). Solar (HSD) dan uang makan operator menjadi tanggung jawab penyewa. Hubungi kami untuk simulasi biaya All-In termasuk solar.'
    },
    {
        question: 'Berapa biaya mobilisasi ke area Pangandaran / Garut / luar Tasikmalaya?',
        answer: 'Biaya mobilisasi dihitung berdasarkan jarak dari Pool kami ke lokasi proyek (pulang-pergi). Kami menggunakan Self-Loader sendiri sehingga biaya lebih kompetitif. Estimasi diberikan transparan sebelum Anda konfirmasi.'
    },
    {
        question: 'Apakah unit memiliki SILO dan operator memiliki SIO aktif?',
        answer: 'Ya. 100% unit Terratron Indonesia Heavy Equipment dilengkapi SILO Disnaker dan operator memiliki SIO (Surat Izin Operator) yang masih berlaku. Dokumen siap dilampirkan untuk persyaratan tender BUMN maupun swasta.'
    },
    {
        question: 'Apakah ada kontrak resmi untuk setiap sewa?',
        answer: 'Ya. Setiap perjanjian sewa dilengkapi SPK (Surat Perjanjian Kerja) bermaterai yang melindungi hak dan kewajiban kedua belah pihak secara hukum. Tidak ada transaksi tanpa dokumen resmi.'
    },
    {
        question: 'Bagaimana jika unit mengalami kerusakan di lapangan?',
        answer: 'Mekanik kami standby on-call 24 jam. Jika downtime melebihi 8 jam akibat kerusakan dari faktor mekanikal unit kami, jam tersebut tidak ditagihkan. Detail tanggung jawab tertera dalam SPK.'
    },
    {
        question: 'Bisakah sewa unit tanpa operator (bare unit)?',
        answer: 'Bisa, dengan syarat operator pihak penyewa wajib menunjukkan SIO aktif yang valid saat mobilisasi. Hubungi admin untuk detail ketentuan dan rate bare unit.'
    }
]

// ============================================================
//  CLIENT LOGOS (Brand Partners)
// ============================================================
export const clientLogos = [
    { id: 'pp', name: 'PT PP (Persero)', image: '/asset/logo/logo_PT_PP.svg (1).webp' },
    { id: 'pupr', name: 'Kementerian PUPR', image: '/asset/logo/logo_pupr (1).webp' },
    { id: 'waskita', name: 'Waskita Karya', image: '/asset/logo/logo_waskita (1).webp' },
    { id: 'freeport', name: 'PT Freeport Indonesia', image: '/asset/logo/logo_pt_freeport (1).webp' },
    { id: 'sinarmas', name: 'Sinarmas Land', image: '/asset/logo/logo_sinarmas_land_logo (1).webp' },
    { id: 'adaro', name: 'PT Adaro Energy', image: '/asset/logo/logo_AdroJK (1).webp' }
]

// ============================================================
//  COMPANY STATS
// ============================================================
export const companyStats = {
    projects: '50',
    units: '11',
    clients: '45',
    experience: '8'
}

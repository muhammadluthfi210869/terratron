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
        slug: 'sewa-excavator-sany-sy75-7-ton-hemat-bbm-karawang',
        category: 'mini',
        model: 'SANY SY75',
        type: 'Midi Excavator',
        tagline: 'Menekan biaya solar proyek tanpa kompromi tenaga gali.',
        nickName: 'The Efficiency King',

        // ── VISUAL ASSETS ─────────────────────────────────────
        image: '/asset/units/COVER_SANY_SY75.jpeg',
        seoAlt: 'Sewa Excavator SANY SY75 7 Ton hemat BBM untuk proyek galian saluran dan pematangan lahan di Karawang Bekasi Jawa Barat',
        gallery: [
            {
                src: '/asset/units/SANY_SY75_1.jpeg',
                caption: 'SANY SY75 — Kondisi Unit Aktual',
                type: 'unit'
            },
            {
                src: '/asset/units/SANY_SY75_2.jpeg',
                caption: 'SANY SY75 — Tampak Operasional',
                type: 'operasional'
            }
        ],
        galleryLabel: 'Dokumentasi Lapangan — 2025',

        // ── SEO META ──────────────────────────────────────────
        pageMeta: {
            title: 'Sewa Excavator SANY SY75 (7 Ton) Karawang & Bekasi — Hemat BBM 20%, Siap Kerja',
            description: 'Rental Excavator SANY SY75 di Karawang, Cikarang & Bekasi. 7 Ton paling irit solar di kelasnya. Mesin Isuzu bandel, operator SIO aktif, SPK resmi. Cek harga sekarang.'
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
        location: 'POOL KARAWANG',
        priceIndicative: 'Mulai Rp 2.800.000 / shift (8 jam)',
        priceNote: 'Belum termasuk solar. Harga area Jabodetabek + Jawa Barat.',
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
            <p>Beroperasi aktif untuk wilayah <strong>Cikarang, Karawang, Bekasi, Purwakarta</strong>, dan sekitar Jawa Barat.</p>
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
        serviceArea: ['Cikarang', 'Karawang', 'Bekasi', 'Purwakarta', 'Subang', 'Bandung Timur'],
        serviceAreaNote: 'Area luar Jawa Barat bisa dikonfirmasi, menyesuaikan biaya mobilisasi.'
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // UNIT 2: CATERPILLAR 305.5E2 — "The Compact Precision"
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        id: 'cat-305',
        slug: 'sewa-mini-excavator-cat-305-5e2-spesialis-ruang-sempit-bekasi',
        category: 'mini',
        model: 'CAT 305.5E2',
        type: 'Mini Excavator',
        tagline: 'Lebar 1.98m. Masuk gang. Zero tail swing. Tidak merusak utilitas eksisting.',
        nickName: 'The Compact Precision',

        // ── VISUAL ASSETS ─────────────────────────────────────
        image: '/asset/units/COVER_CAT 305.5E2.jpeg',
        seoAlt: 'Sewa Mini Excavator CAT 305.5E2 lebar 1.98 meter zero tail swing untuk galian kabel pipa ruang sempit Bekasi Jakarta Jawa Barat',
        gallery: [
            {
                src: '/asset/units/CAT_305.5E2_1.jpeg',
                caption: 'CAT 305.5E2 — Kondisi Unit Aktual',
                type: 'unit'
            },
            {
                src: '/asset/units/CAT_305.5E2_2.jpeg',
                caption: 'CAT 305.5E2 — Detail Kabin & Attachment',
                type: 'detail'
            },
            {
                src: '/asset/units/CAT_305.5E2_3.jpeg',
                caption: 'CAT 305.5E2 — Posisi Operasional',
                type: 'operasional'
            }
        ],
        galleryLabel: 'Dokumentasi Lapangan — 2024–2025',

        // ── SEO META ──────────────────────────────────────────
        pageMeta: {
            title: 'Sewa Mini Excavator CAT 305.5E2 Bekasi & Jakarta — Spesialis Ruang Sempit, Galian Kabel & Breaker',
            description: 'Rental Mini Excavator CAT 305.5E2 di Bekasi, Jakarta & Jawa Barat. Lebar 1.98m, zero tail swing, tersedia attachment Hydraulic Breaker. Operator SIO aktif, SPK resmi.'
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
        location: 'POOL BEKASI',
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
            <p>Tersedia untuk proyek di <strong>Bekasi, Jakarta, Tangerang, Depok, Bogor, Bandung</strong>, dan seluruh wilayah Jawa Barat.</p>
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
                a: 'Bisa. Minimum 1 shift (8 jam). Paket harian fleksibel tersedia, khususnya area Bekasi & Jakarta. Hubungi admin.'
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
        serviceArea: ['Bekasi', 'Jakarta', 'Tangerang', 'Depok', 'Bogor', 'Bandung', 'Cikarang'],
        serviceAreaNote: 'Seluruh Jawa Barat bisa dijangkau. Konfirmasi biaya mobilisasi via admin.'
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // UNIT 3: KOMATSU PC75 — "The Legend"
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        id: 'komatsu-pc75',
        slug: 'sewa-excavator-komatsu-pc75-land-clearing-medan-berat-bogor',
        category: 'mini',
        model: 'KOMATSU PC75',
        type: 'Midi Excavator',
        tagline: 'Tanah keras, akar besar, lumpur dalam. Unit ini tidak mengenal menyerah.',
        nickName: 'The Legend',

        // ── VISUAL ASSETS ─────────────────────────────────────
        image: '/asset/units/COVER_KOMATSU PC75.jpeg',
        seoAlt: 'Sewa Excavator Komatsu PC75 untuk land clearing lahan sawit dan galian medan berat berbatu di Bogor Karawang Jawa Barat',
        gallery: [
            {
                src: '/asset/units/KOMATSU_PC75_1.jpeg',
                caption: 'Komatsu PC75 — Kondisi Unit Aktual',
                type: 'unit'
            },
            {
                src: '/asset/units/KOMATSUPC75_2.jpeg',
                caption: 'Komatsu PC75 — Tampak Operasional',
                type: 'operasional'
            }
        ],
        galleryLabel: 'Dokumentasi Lapangan — 2024',

        // ── SEO META ──────────────────────────────────────────
        pageMeta: {
            title: 'Sewa Komatsu PC75 (Midi Excavator) Bogor & Karawang — Spesialis Land Clearing & Medan Berat',
            description: 'Rental Excavator Komatsu PC75 di Bogor, Karawang & Jawa Barat. Spesialis land clearing, galian batu, off-road ekstrem. Unit 2018+, operator SIO, SPK resmi.'
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
        location: 'POOL KARAWANG',
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
            <p>Armada PC75 Terratron Indonesia rata-rata 2018 ke atas dengan rekam jejak perawatan terdokumentasi. Beroperasi aktif di <strong>Bogor, Karawang, Purwakarta, Subang</strong>, dan seluruh Jawa Barat.</p>
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
        serviceArea: ['Bogor', 'Karawang', 'Purwakarta', 'Subang', 'Sukabumi', 'Garut', 'Cianjur'],
        serviceAreaNote: 'Area Kalimantan & Sumatera: konfirmasi terlebih dahulu (biaya ferry + logistik).'
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // UNIT 4: SUMITOMO SH75 — "The Speedster"
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        id: 'sumitomo-sh75',
        slug: 'sewa-excavator-sumitomo-sh75-loading-cepat-cut-fill-cikarang',
        category: 'mini',
        model: 'SUMITOMO SH75',
        type: 'Midi Excavator',
        tagline: 'Swing lebih cepat. Ritase lebih banyak. Proyek selesai lebih awal.',
        nickName: 'The Speedster',

        // ── VISUAL ASSETS ─────────────────────────────────────
        image: '/asset/units/COVER_SUMITOMO SH75.jpeg',
        seoAlt: 'Sewa Excavator Sumitomo SH75 untuk loading cepat cut and fill perumahan dan proyek ritase tinggi di Cikarang Karawang Bekasi Jawa Barat',
        gallery: [
            {
                src: '/asset/units/SUMITOMO_SH75_1.jpeg',
                caption: 'Sumitomo SH75 — Kondisi Unit Aktual',
                type: 'unit'
            },
            {
                src: '/asset/units/SUMITOMOSH75_2.jpeg',
                caption: 'Sumitomo SH75 — Tampak Operasional',
                type: 'operasional'
            }
        ],
        galleryLabel: 'Dokumentasi Lapangan — 2025',

        // ── SEO META ──────────────────────────────────────────
        pageMeta: {
            title: 'Sewa Sumitomo SH75 (Midi Excavator) Cikarang & Karawang — Spesialis Loading Cepat & Cut Fill',
            description: 'Rental Excavator Sumitomo SH75 di Cikarang, Karawang & Bekasi. Cycle time tercepat di kelasnya, full AC cabin. Spesialis Cut & Fill perumahan & proyek ritase tinggi.'
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
        location: 'POOL CIKARANG',
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
            <p>Kabin tertutup ber-AC memastikan operator tetap produktif hingga akhir shift tanpa fatik berlebih. Beroperasi aktif di <strong>Cikarang, Karawang, Bekasi, Subang</strong>, dan seluruh Jawa Barat.</p>
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
                a: 'Cikarang, Karawang, Bekasi, Subang, Cikampek, Bandung, Serang. Luar Jawa Barat konfirmasi ketersediaan dan biaya mobilisasi.'
            }
        ],

        // ── DOCUMENTS ─────────────────────────────────────────
        documents: ['SILO', 'SIO Operator', 'SPK Resmi'],
        hourMeter: 'Tersedia saat request',

        // ── SERVICE AREA ──────────────────────────────────────
        serviceArea: ['Cikarang', 'Karawang', 'Bekasi', 'Subang', 'Cikampek', 'Bandung', 'Serang'],
        serviceAreaNote: 'Luar Jawa Barat: konfirmasi ketersediaan dan biaya mobilisasi terlebih dahulu.'
    }
]

// ============================================================
//  ATTACHMENT DATA (Global — untuk ditampilkan di halaman Armada)
// ============================================================
export const attachmentData = [
    {
        id: 'breaker',
        name: 'Hydraulic Breaker',
        image: '/asset/units/CAT_305.5E2_2.jpeg',
        spec: 'Chisel ∅68mm | 400–800 BPM',
        desc: 'Untuk bobok beton K-250/K-400, kupas aspal, demolisi. Tersedia untuk CAT 305.5E2.',
        compatibleWith: ['cat-305']
    },
    {
        id: 'bucket-ditch',
        name: 'Bucket Ditch Cleaning',
        image: '/asset/units/KOMATSU_PC75_1.jpeg',
        spec: 'Kapasitas 0.50 m³',
        desc: 'Untuk galian saluran U-Ditch lebar dan normalisasi drainase.',
        compatibleWith: ['sany-sy75', 'komatsu-pc75', 'sumitomo-sh75']
    },
    {
        id: 'ripper',
        name: 'Bucket Ripper / Tip',
        image: '/asset/units/KOMATSUPC75_2.jpeg',
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
        category: 'CUT & FILL',
        title: 'Pematangan Lahan Pabrik 20 Hektar — KIIC Karawang',
        image: '/asset/projects/big_project.jpeg',
        units: '3x SANY SY75, 2x Komatsu PC75',
        challenge: 'Medan tanah lempung basah (Clay) dengan target rata 20 hektar dalam 90 hari.',
        solution: 'Penggunaan matras kayu & koordinasi ritase 3 shift untuk percepatan loading material basah.',
        location: 'KIIC Karawang, Jawa Barat',
        duration: '3 Bulan (On Time)'
    },
    {
        id: 'proj-2',
        category: 'DEMOLISI',
        title: 'Pembongkaran Struktur Beton Ruko — Cikarang Pusat',
        image: '/asset/projects/sipil_project.jpeg',
        units: '1x CAT 305.5E2 (Breaker Edition), 1x Komatsu PC75',
        challenge: 'Struktur beton bertulang di area komersial aktif dengan akses jalan terbatas.',
        solution: 'Metode pembongkaran bertahap dengan CAT 305.5 Breaker + PC75 untuk loading puing.',
        location: 'Cikarang Pusat, Jawa Barat',
        duration: '21 Hari (Zero Accident)'
    },
    {
        id: 'proj-3',
        category: 'INFRASTRUKTUR',
        title: 'Galian Jalur Kabel Optik & Pipa PDAM — Bekasi Barat',
        image: '/asset/projects/tol_project.jpeg',
        units: '2x CAT 305.5E2 (Standard)',
        challenge: 'Galian presisi di trotoar kota tanpa merusak utilitas bawah tanah eksisting.',
        solution: 'Deploy 2 unit CAT 305.5 (Zero Tail Swing) untuk galian paralel dengan rubber track.',
        location: 'Bekasi Barat, Jawa Barat',
        duration: '45 Hari (Progressive)'
    },
    {
        id: 'proj-4',
        category: 'LAND CLEARING',
        title: 'Pembukaan Akses Jalan Desa — Purwakarta Selatan',
        image: '/asset/projects/tambang_project.jpeg',
        units: '2x Komatsu PC75',
        challenge: 'Medan berbatu dan akar pohon besar di lahan perbukitan yang belum pernah dibuka.',
        solution: 'PC75 dengan ripper tip untuk breaking akar, kemudian loading ke area disposal.',
        location: 'Purwakarta Selatan, Jawa Barat',
        duration: '30 Hari (Complete)'
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
        question: 'Berapa biaya mobilisasi ke area Bogor / Purwakarta / luar Bekasi?',
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
    { id: 'pp', name: 'PT PP (Persero)', image: '/asset/logo/logo_PT_PP.svg.png' },
    { id: 'pupr', name: 'Kementerian PUPR', image: '/asset/logo/logo_pupr.png' },
    { id: 'waskita', name: 'Waskita Karya', image: '/asset/logo/logo_waskita.jpg' },
    { id: 'freeport', name: 'PT Freeport Indonesia', image: '/asset/logo/logo_pt_freeport.webp' },
    { id: 'sinarmas', name: 'Sinarmas Land', image: '/asset/logo/logo_sinarmas_land_logo.jpg' },
    { id: 'adaro', name: 'PT Adaro Energy', image: '/asset/logo/logo_AdroJK.png' }
]

// ============================================================
//  COMPANY STATS
// ============================================================
export const companyStats = {
    projects: '50',
    units: '4',
    clients: '45',
    experience: '8'
}

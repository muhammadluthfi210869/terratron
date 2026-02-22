import { motion } from 'framer-motion'
import './CompanyProfile.css'

const CompanyProfile = ({ onBack }) => {
    const companyData = {
        name: 'PT Terratron Indonesia HEAVY EQUIPMENT',
        founded: '2015',
        tagline: 'Mitra Strategis Infrastruktur & Konstruksi Sipil Terpercaya di Priangan Timur',
        address: 'Dsn. Cishung, RT.04/RW.08, Bojongmengger, Kec. Cijeungjing, Kab. Ciamis, Jawa Barat 46271',
        phone: '0822-6028-0392',
        email: 'admin@Terratron Indonesia-he.co.id',
        stats: [
            { val: '2015', label: 'ESTABLISHED' },
            { val: '25+', label: 'HEAVY UNITS' },
            { val: '150+', label: 'COMPLETED PROJECTS' }
        ],
        timeline: [
            { year: '2015', title: 'THE GENESIS', event: 'Pendirian & Pembelian Unit Pertama (PC200). Fokus pada penyewaan lokal Ciamis.', type: 'origin' },
            { year: '2018', title: 'INFRASTRUCTURE LEAP', event: 'Ekspansi ke Proyek Strategis Nasional (Tol Japek). Penambahan unit Dozer & Grader.', type: 'growth' },
            { year: '2021', title: 'DIGITAL & QUALITY CONTROL', event: 'Implementasi Fleet Management System & Sertifikasi ISO. Peremajaan armada besar-besaran.', type: 'quality' },
            { year: '2024', title: 'DOMINANCE', event: 'Perluasan Workshop & Gudang Suku Cadang. Total aset melampaui 15 unit spesifikasi tinggi.', type: 'current' }
        ],
        legalities: [
            {
                id: 'NIB',
                label: 'NIB (Nomor Induk Berusaha)',
                status: 'TERVERIFIKASI',
                code: 'REG-ID/293.001',
                icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                        <polyline points="10 9 9 9 8 9" />
                        <circle cx="15" cy="15" r="4" strokeDasharray="2 2" />
                    </svg>
                )
            },
            {
                id: 'SPPKP',
                label: 'SPPKP (Pengusaha Kena Pajak)',
                status: 'READY FAKTUR',
                code: 'TAX-AUTH/KPP-CBT',
                icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 2L3 7v9c0 5 9 6 9 6s9-1 9-6V7l-9-5z" />
                        <path d="M12 22s-9-1-9-6V7l9-5 9 5v9c0 5-9 6-9 6z" strokeOpacity="0.3" />
                        <circle cx="12" cy="11" r="3" />
                        <path d="M12 14v4M10 16h4" />
                    </svg>
                )
            },
            {
                id: 'SIA',
                label: 'SIA & SILO (Izin Alat)',
                status: 'VALID/UPDATE',
                code: 'UNIT-CERT/99.AF',
                icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
                    </svg>
                )
            },
            {
                id: 'K3',
                label: 'Sertifikasi K3 Umum',
                status: 'SAFETY FIRST',
                code: 'HSE-STD/K3-00',
                icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="M12 8v8M8 12h8" strokeWidth="2" />
                    </svg>
                )
            }
        ],
        facilities: [
            {
                id: 'WORKSHOP',
                title: 'In-House Workshop',
                desc: 'Fungsi workshop mandiri menjamin kesiapan tempur unit 100% sebelum mobilisasi tanpa ketergantungan sub-kon.',
                img: '/asset/about/inhouse_workshop_cover.jpeg', // Actual industrial workshop
                telemetry: { status: 'OPERATIONAL', cap: '1000m²', load: '85%' },
                stats: [{ val: '24/7', label: 'MONITORING' }]
            },
            {
                id: 'SERVICE',
                title: 'Rapid Response 4x4',
                desc: 'Mobile Service Car dengan peralatan lengkap siap menembus medan ekstrim. Downtime adalah musuh utama.',
                img: '/asset/about/rapid_response_cover.jpeg', // Rugged vehicle
                telemetry: { status: 'READY', unit: '2_FLEET', res: '<4HR' },
                stats: [{ val: '4x4', label: 'OFF-ROAD' }]
            },
            {
                id: 'WAREHOUSE',
                title: 'Parts Warehouse',
                desc: 'Stok komponen fast-moving (filter, hoses, teeth) tersedia melimpah untuk mempercepat perbaikan.',
                img: '/asset/about/parts_warehouse.jpeg',
                telemetry: { status: 'STOCK_READY', sku: '500+', type: 'GENUINE' },
                stats: [{ val: 'GENUINE', label: 'PARTS' }]
            }
        ],
        team: [
            {
                id: 'MECH_01',
                role: 'Chief Mechanic',
                name: 'SENIOR TECHNICAL ASSET',
                metrics: { exp: '15+ YRS', cert: 'CAT/KOMATSU', focus: 'HYDRAULICS' },
                text: 'Ahli diagnosa sistem hidrolik kompleks dengan pengalaman di Principal utama.',
                img: '/asset/about/senior_technical_asset_cover.jpeg'
            },
            {
                id: 'OPER_01',
                role: 'Certified Operator',
                name: 'HEAVY UNIT SPECIALIST',
                metrics: { exp: '8 YRS', cert: 'SIO LEVEL A', focus: 'PRECISION' },
                text: 'Operator ahli yang memahami efisiensi siklus kerja dan keselamatan medan ekstrim.',
                img: '/asset/about/heavy_unit_specialist_cover.jpeg'
            }
        ]
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', damping: 25, stiffness: 200 }
        }
    }

    return (
        <motion.div
            className="company-profile-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >


            <motion.main
                className="profile-main"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* 1. HERO IDENTITY */}
                <motion.section className="hero-identity" variants={itemVariants}>
                    <div className="hero-visual-bg">
                        <img src="/asset/Generated Image February 17, 2026 - 9_30AM.png" alt="Heavy Equipment Authority" fetchpriority="high" />
                        <div className="hero-overlay-gradient" />
                    </div>
                    <div className="hero-id-content">
                        <span className="id-kicker">INFRASTRUCTURE PARTNER</span>
                        <h1 className="id-title">IDENTITY &<br />AUTHORITY.</h1>
                        <p className="id-sub">{companyData.tagline}</p>

                        <div className="id-marker-box">
                            {companyData.stats.map((stat, i) => (
                                <div key={i} className="id-marker-item">
                                    <span className="marker-val">{stat.val}</span>
                                    <span className="marker-label">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* 2. TIMELINE */}
                <motion.section
                    className="timeline-section-v3"
                    variants={itemVariants}
                >
                    <div className="section-head">
                        <span className="line-num">ARCHIVE 02</span>
                        <h2 className="line-title">THE GROWTH ENGINE</h2>
                    </div>
                    <div className="timeline-v3-container">
                        <div className="timeline-center-spine">
                            <div className="spine-glow"></div>
                        </div>
                        {companyData.timeline.map((item, idx) => (
                            <motion.div
                                key={idx}
                                className={`timeline-v3-item ${idx % 2 === 0 ? 'left' : 'right'}`}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <div className="tm-v3-card">
                                    <div className="tm-v3-year">{item.year}</div>
                                    <div className="tm-v3-content">
                                        <h4>{item.title}</h4>
                                        <p>{item.event}</p>
                                    </div>
                                    <div className="tm-v3-indicator"></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* 3. REGULATORY ASSURANCE (INDUSTRIAL HUD VAULT) */}
                <motion.section className="legality-vault" variants={itemVariants}>
                    <div className="section-head">
                        <span className="line-num">ARCHIVE 03</span>
                        <h2 className="line-title">REGULATORY ASSURANCE</h2>
                    </div>
                    <div className="legality-grid">
                        {companyData.legalities.map((legal) => (
                            <div key={legal.id} className="legal-card-hud">
                                <div className="hud-grid-bg" />
                                <div className="hud-scanner-line" />

                                <div className="card-header-tactical">
                                    <span className="serial-num">{legal.code}</span>
                                    <div className="status-led-box">
                                        <div className="led-ping" />
                                        <span className="led-text">ENCRYPTED</span>
                                    </div>
                                </div>

                                <div className="legal-icon-wrap">
                                    {legal.icon}
                                    <div className="icon-glitch-layer" />
                                </div>

                                <div className="legal-info-hud">
                                    <h3>{legal.label}</h3>
                                    <div className="status-badge-clear">
                                        <span className="status-label-micro">VAULT_STATUS //</span>
                                        <span className="status-val-main">{legal.status}</span>
                                    </div>
                                </div>

                                <div className="card-footer-tactical">
                                    <div className="auth-stamp">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        <span>AUTHENTICATED BY Terratron Indonesia HEAVY</span>
                                    </div>
                                    <div className="load-bar-static">
                                        <div className="load-fill" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* 4. OPERATIONAL PROOF (TACTICAL BENTO-METRICS) */}
                <motion.section className="operational-proof-section-v2" variants={itemVariants}>
                    <div className="section-head">
                        <span className="line-num">ARCHIVE 04</span>
                        <h2 className="line-title">OPERATIONAL PROOF</h2>
                    </div>

                    <div className="operational-bento-grid">
                        {/* WORKSHOP - MAIN */}
                        <div className="bento-item workshop-main">
                            <div className="bento-img-wrap">
                                <img src={companyData.facilities[0].img} alt="Workshop" />
                                <div className="bento-hud-overlay">
                                    <div className="hud-tag">HQ_WORKSHOP</div>
                                    <div className="hud-stat-box">
                                        <div className="h-stat"><span>AVAILABILITY</span><span className="gold">100%</span></div>
                                        <div className="h-stat"><span>CAPACITY</span><span>{companyData.facilities[0].telemetry.cap}</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="bento-text">
                                <h3>{companyData.facilities[0].title}</h3>
                                <p>{companyData.facilities[0].desc}</p>
                            </div>
                        </div>

                        {/* RESPONSE CAR */}
                        <div className="bento-item service-mini">
                            <div className="bento-img-wrap">
                                <img src={companyData.facilities[1].img} alt="Service Car" />
                                <div className="bento-hud-tag-mini">RES_UNIT_01</div>
                            </div>
                            <div className="bento-text">
                                <h4>{companyData.facilities[1].title}</h4>
                                <p>Downtime: {companyData.facilities[1].telemetry.res}</p>
                            </div>
                        </div>

                        {/* WAREHOUSE */}
                        <div className="bento-item warehouse-mini">
                            <div className="bento-img-wrap">
                                <img src={companyData.facilities[2].img} alt="Warehouse" />
                                <div className="bento-hud-tag-mini">LOG_SEC_A</div>
                            </div>
                            <div className="bento-text">
                                <h4>{companyData.facilities[2].title}</h4>
                                <p>SKU: {companyData.facilities[2].telemetry.sku}</p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* 5. THE ENGINE ROOM (PERSONNEL DOSSIER) */}
                <motion.section className="team-section-dossier" variants={itemVariants}>
                    <div className="section-head">
                        <span className="line-num">ARCHIVE 05</span>
                        <h2 className="line-title">THE ENGINE ROOM (TEAM)</h2>
                    </div>

                    <div className="dossier-grid">
                        {companyData.team.map((member, idx) => (
                            <div key={idx} className="personnel-card">
                                <div className="dossier-frame">
                                    <div className="frame-corner tl" />
                                    <div className="frame-corner tr" />
                                    <div className="frame-corner bl" />
                                    <div className="frame-corner br" />

                                    <div className="person-visual">
                                        <img src={member.img} alt={member.role} />
                                        <div className="active-scan-line" />
                                        <div className="id-tag">{member.id}</div>
                                    </div>
                                </div>

                                <div className="personnel-info">
                                    <div className="role-kicker">{member.role}</div>
                                    <h3 className="person-name">{member.name}</h3>

                                    <div className="skill-matrix">
                                        <div className="matrix-item">
                                            <label>EXP</label>
                                            <span>{member.metrics.exp}</span>
                                        </div>
                                        <div className="matrix-item">
                                            <label>CERT</label>
                                            <span>{member.metrics.cert}</span>
                                        </div>
                                        <div className="matrix-item">
                                            <label>FOCUS</label>
                                            <span>{member.metrics.focus}</span>
                                        </div>
                                    </div>

                                    <p className="person-desc">{member.text}</p>

                                    <div className="dossier-footer">
                                        <div className="auth-stamp-mini">VERIFIED ASSET</div>
                                        <div className="secure-line" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* 6. LOCATION */}
                <motion.section className="map-section" variants={itemVariants}>
                    <div className="map-container-luxury">
                        <div className="map-content-left">
                            <div className="section-head" style={{ alignItems: 'flex-start', textAlign: 'left' }}>
                                <span className="line-num" style={{ marginBottom: '12px' }}>ARCHIVE 06</span>
                                <h2 className="line-title" style={{ marginBottom: '40px' }}>GROUND ZERO</h2>
                            </div>
                            <div className="map-address-box">
                                <h4>KANTOR & POOL PUSAT</h4>
                                <p>{companyData.address}</p>
                            </div>
                            <div className="contact-quick">
                                <div className="quick-item">
                                    <label>DIRECT LINE</label>
                                    <span>{companyData.phone}</span>
                                </div>
                                <div className="quick-item">
                                    <label>OFFICIAL EMAIL</label>
                                    <span>{companyData.email}</span>
                                </div>
                            </div>
                        </div>
                        <div className="map-visual-right">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15862.4!2d108.4834!3d-7.4079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMjQnMjguOSJTIDEwOMKwMjknMDAuMCJF!5e0!3m2!1sid!2sid!4v1708300000000!5m2!1sid!2sid"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Terratron Indonesia Heavy Equipment — Cijeungjing, Ciamis"
                            ></iframe>
                        </div>
                    </div>
                </motion.section>
            </motion.main>

            <footer className="profile-footer-simple">
                <div className="footer-line" />
                <p>© 2024 {companyData.name} — REGIONAL INFRASTRUCTURE AUTHORITY</p>
                <div className="footer-meta">CORE_PROFILE_SYSTEM_V2.0 // BY Terratron Indonesia HEAVY</div>
            </footer>
        </motion.div>
    )
}

export default CompanyProfile

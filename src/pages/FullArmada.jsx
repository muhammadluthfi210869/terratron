import { useState, useMemo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { fleetData, attachmentData } from '../data/fleetData'
import { articlesData } from '../data/articlesData'
import SchemaOrg from '../components/SchemaOrg'
import './FullArmada.css'

// ── WA Number (ganti di sini jika berubah) ─────────────────
const WA_NUMBER = '6282260280392'

// ── FAQ Accordion per Unit ──────────────────────────────────
const FaqAccordion = ({ items }) => {
    const [openIdx, setOpenIdx] = useState(null)
    return (
        <div className="faq-accordion-list">
            {items.map((item, idx) => (
                <div key={idx} className={`faq-item ${openIdx === idx ? 'open' : ''}`}>
                    <button
                        className="faq-question"
                        onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                        aria-expanded={openIdx === idx}
                    >
                        <span>{item.q}</span>
                        <span className="faq-chevron">
                            {openIdx === idx ? (
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            ) : (
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            )}
                        </span>
                    </button>
                    <AnimatePresence>
                        {openIdx === idx && (
                            <motion.div
                                className="faq-answer"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <p>{item.a}</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    )
}

// ── Gallery Viewer (CYCLIC HUD MONITOR) ────────────────
const GalleryViewer = ({ gallery, model }) => {
    const [active, setActive] = useState(0)
    const [isScanning, setIsScanning] = useState(true)

    useEffect(() => {
        if (!isScanning) return
        const timer = setInterval(() => {
            setActive(prev => (prev + 1) % gallery.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [isScanning, gallery.length])

    if (!gallery || gallery.length === 0) return null

    const handleNext = () => {
        setIsScanning(false)
        setActive(prev => (prev + 1) % gallery.length)
    }

    const handlePrev = () => {
        setIsScanning(false)
        setActive(prev => (prev - 1 + gallery.length) % gallery.length)
    }

    return (
        <div className="cyclic-hud-terminal">
            <div className="monitor-viewport">
                {/* HUD SCANLINE & NOISE */}
                <div className="monitor-glitch-layer" />
                <div className="monitor-scanlines" />

                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        className="monitor-shutter-layer"
                        initial={{ opacity: 0, x: 100, scale: 1.1 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -100, scale: 0.95 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <img
                            src={gallery[active].src}
                            alt={`${model} — ANGLE_0${active + 1}`}
                            className="monitor-main-img"
                        />
                    </motion.div>
                </AnimatePresence>

                {/* TACTICAL OVERLAYS */}
                <div className="terminal-corner-brackets">
                    <span className="bracket tl" />
                    <span className="bracket tr" />
                    <span className="bracket bl" />
                    <span className="bracket br" />
                </div>

                <div className="terminal-header-meta">
                    <div className="meta-left">
                        <span className="meta-label">VIEW_PORT:</span>
                        <span className="meta-val">A_{active + 1}</span>
                    </div>
                    <div className="meta-right">
                        <div className={`status-scan ${isScanning ? 'active' : ''}`}>
                            {isScanning ? 'SCANNING_MODE' : 'MANUAL_OVERRIDE'}
                        </div>
                    </div>
                </div>

                {/* SLIDE CONTROLS (HUD Style) */}
                <div className="monitor-controls">
                    <button className="ctrl-btn prev" onClick={handlePrev} aria-label="Previous Feed">
                        <span className="chevron">{"<"}</span>
                        <span className="btn-label">PREV_FEED</span>
                    </button>
                    <button className="ctrl-btn next" onClick={handleNext} aria-label="Next Feed">
                        <span className="btn-label">NEXT_FEED</span>
                        <span className="chevron">{">"}</span>
                    </button>
                </div>

                {/* FEED PROGRESS BAR */}
                <div className="feed-progress-container">
                    {gallery.map((_, i) => (
                        <div key={i} className={`feed-dot ${active === i ? 'active' : ''}`}>
                            <div className="dot-inner" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="feed-description-chassis">
                <div className="desc-header">
                    <span className="target-id">TARGET: {model}</span>
                    <span className="angle-id">ANGLE: 0{active + 1} // FIELD_DATA</span>
                </div>
                <p className="desc-body">{gallery[active].caption}</p>
            </div>
        </div>
    )
}

// ── Section Header Blueprint ──────────────────────────────
const SectionHeader = ({ idx, sub, title }) => (
    <div className="section-header-blueprint">
        <span className="section-index">{idx}</span>
        <div className="header-label-stack">
            <span className="header-sub-label">{sub}</span>
            <h2 className="section-h2">{title}</h2>
        </div>
        <div className="header-line" />
    </div>
)

// ══════════════════════════════════════════════════════════════
const getBadgeIcon = (iconName) => {
    const icons = {
        power: (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
        ),
        fuel: (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M3 22L7 22" />
                <path d="M4 9L4 22" />
                <path d="M14 22L14 9" />
                <path d="M20 22L20 4.5C20 3.67 19.33 3 18.5 3C17.67 3 17 3.67 17 4.5V9" />
                <path d="M14 9L19 9" />
                <path d="M14 13L19 13" />
                <path d="M4 9L14 9" />
            </svg>
        ),
        city: (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M3 21h18" />
                <path d="M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3" />
                <path d="M5 21V10.85" />
                <path d="M19 21V10.85" />
                <path d="M9 21V14" />
                <path d="M15 21V14" />
            </svg>
        ),
        ruler: (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="m2 10 3 3 3-3" />
                <path d="m22 10-3 3-3-3" />
                <path d="M8 13h8" />
                <path d="M2 13h3" />
                <path d="M19 13h3" />
            </svg>
        ),
        target: (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
            </svg>
        ),
        hammer: (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9" />
                <path d="M17.64 15 22 10.64" />
                <path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86c0-1.1-.9-2-2-2H15.8c-.85 0-1.65-.34-2.25-.94l-1.25-1.25" />
                <path d="m15 12-5-5" />
                <path d="m11 7 5 5" />
            </svg>
        ),
        shield: (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        tractor: (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                <path d="M9 20a2 2 0 1 0 4 0a2 2 0 1 0-4 0" />
                <path d="M19 20a2 2 0 1 0 4 0a2 2 0 1 0-4 0" />
                <path d="M14 15V5h5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2" />
            </svg>
        ),
        muscle: (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                <path d="M12 6v6l4 2" />
            </svg>
        ),
        rocket: (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.71-2.13.71-2.13l-4.42-4.42s-1.29 0-2.13.71l4.42 4.42z" />
                <path d="M15 13.84l5.22-5.22c.51-.51.66-1.28.39-1.94L18.43 2.1c-.26-.64-1.03-.81-1.51-.31L9.82 8.5a6 6 0 0 0-1.68 3.06l-.58 3.06 6.86 6.86 3.06-.58a6 6 0 0 0 3.06-1.68l6.71-6.71c.5-.5.33-1.25-.31-1.51l-4.58-2.18c-.66-.27-1.43-.12-1.94.39L15 13.84z" />
            </svg>
        ),
        snow: (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M20 17.58A8.51 8.51 0 0 0 12 2a8.51 8.51 0 0 0-8 15.57" />
                <circle cx="12" cy="18" r="4" />
                <path d="M12 14v8" />
                <path d="M8 18h8" />
            </svg>
        ),
        timer: (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="10" y1="2" x2="14" y2="2" />
                <line x1="12" y1="14" x2="15" y2="11" />
                <circle cx="12" cy="14" r="8" />
            </svg>
        ),
    }
    return icons[iconName] || null
}

const FullArmada = () => {
    const { slug, area } = useParams()
    const navigate = useNavigate()
    const [activeFilter, setActiveFilter] = useState('all')

    const formattedArea = area
        ? area.charAt(0).toUpperCase() + area.slice(1).replace(/-/g, ' ')
        : null

    const selectedUnit = useMemo(
        () => fleetData.find(u => u.slug === slug),
        [slug]
    )

    // ── SILO: Related Articles ─────────────────────────────
    const relatedArticles = useMemo(() => {
        if (!selectedUnit) return []
        const keywords = selectedUnit.model.toLowerCase().split(' ')
        return articlesData
            .filter(art => {
                const t = art.title.toLowerCase()
                const c = (art.content || '').toLowerCase()
                return keywords.some(k => t.includes(k) || c.includes(k))
            })
            .slice(0, 3)
    }, [selectedUnit])

    // ── SCHEMA.ORG ─────────────────────────────────────────
    const unitSchema = useMemo(() => {
        if (!selectedUnit) return null
        return {
            '@context': 'https://schema.org/',
            '@type': 'Product',
            name: selectedUnit.model,
            image: `https://terratron.id${selectedUnit.image}`,
            description: selectedUnit.pageMeta.description,
            brand: { '@type': 'Brand', name: selectedUnit.model.split(' ')[0] },
            offers: {
                '@type': 'Offer',
                url: `https://terratron.id/sewa-alat-berat/${selectedUnit.slug}`,
                priceCurrency: 'IDR',
                availability:
                    selectedUnit.status === 'available'
                        ? 'https://schema.org/InStock'
                        : 'https://schema.org/OutOfStock',
                seller: { '@type': 'LocalBusiness', name: 'Terratron Indonesia Heavy Equipment' }
            },
            aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '24'
            }
        }
    }, [selectedUnit])

    const breadcrumbSchema = useMemo(() => {
        const items = [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://terratron.id/' },
            { '@type': 'ListItem', position: 2, name: 'Sewa Alat Berat', item: 'https://terratron.id/sewa-alat-berat' }
        ]
        if (selectedUnit) {
            items.push({
                '@type': 'ListItem',
                position: 3,
                name: selectedUnit.model,
                item: `https://terratron.id/sewa-alat-berat/${selectedUnit.slug}`
            })
        }
        return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items }
    }, [selectedUnit])

    // ── FILTERS ────────────────────────────────────────────
    const filterOptions = [
        { id: 'all', label: 'SEMUA UNIT' },
        { id: 'mini', label: 'MIDI / MINI (5–8 TON)' },
        { id: 'standard', label: 'STANDARD (20 TON+)' },
        { id: 'attachment', label: 'ALAT BANTU' }
    ]

    const filteredUnits = useMemo(
        () => (activeFilter === 'all' ? fleetData : fleetData.filter(u => u.category === activeFilter)),
        [activeFilter]
    )

    const handleSelectUnit = unit => navigate(`/sewa-alat-berat/${unit.slug}`)
    const handleBackToList = () => navigate('/sewa-alat-berat')

    // ─────────────────────────────────────────────────────────
    return (
        <motion.div
            className="full-armada-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* ── SEO HEAD ── */}
            <Helmet>
                {selectedUnit ? (
                    <>
                        <title>{selectedUnit.pageMeta.title}</title>
                        <meta name="description" content={selectedUnit.pageMeta.description} />
                        <link rel="canonical" href={`https://terratron.id/sewa-alat-berat/${selectedUnit.slug}`} />
                    </>
                ) : area ? (
                    <>
                        <title>Sewa Alat Berat & Excavator di {formattedArea} — Unit Ready 24 Jam</title>
                        <meta name="description" content={`Rental alat berat murah di ${formattedArea}. Sewa Excavator mini dan midi untuk proyek konstruksi, cut & fill, dan galian di ${formattedArea} dan sekitarnya.`} />
                        <link rel="canonical" href={`https://terratron.id/sewa-alat-berat/lokasi/${area}`} />
                    </>
                ) : (
                    <>
                        <title>Harga Sewa Alat Berat 2026: SANY SY75, CAT 305, Komatsu PC75 — Tasikmalaya Ciamis</title>
                        <meta name="description" content="Daftar lengkap unit excavator sewa: SANY SY75, CAT 305.5E2, Komatsu PC75, Sumitomo SH75. Melayani Tasikmalaya, Ciamis, Banjar dan seluruh Priangan Timur. Dokumen SILO & SIO lengkap." />
                        <link rel="canonical" href="https://terratron.id/sewa-alat-berat" />
                    </>
                )}
            </Helmet>

            <SchemaOrg schema={unitSchema} />
            <SchemaOrg schema={breadcrumbSchema} />

            {/* ══════════════════════════════════════════════
                UNIT DETAIL PAGE (TACTICAL COMMAND HUD)
            ══════════════════════════════════════════════ */}
            {selectedUnit ? (
                <article className="dedicated-unit-page container cinematic-full-page">

                    {/* TOP HUD METADATA BAR */}
                    <header className="hud-nav-bar-standalone">
                        <div className="brand-identifier">
                            <span className="brand-main">TERRATRON INDONESIA // COMMAND_DETAIL</span>
                            <span className="brand-sub">ASSET_ID: TRN-{selectedUnit.id.toUpperCase()}</span>
                        </div>
                        <div className="hud-meta-right">
                            <div className="unit-nav-breadcrumb-standalone">
                                <Link to="/">HOME</Link>
                                <span className="divider">//</span>
                                <Link to="/sewa-alat-berat">SEWA ALAT BERAT</Link>
                                <span className="divider">//</span>
                                <span className="current">{selectedUnit.model}</span>
                            </div>
                        </div>
                    </header>

                    {/* ── SECTION A: HERO + DATA PANELS (SPLIT HUD) ── */}
                    <div className="unit-hero-identity-hud">

                        {/* LEFT: HERO TEXT & GALLERY VIEW */}
                        <div className="hud-hero-view">
                            <div className="unit-category-pill">{selectedUnit.category.toUpperCase()} // HEAVY CLASS</div>
                            <h1 className="unit-hero-title">{selectedUnit.model}</h1>
                            <div className="quote-chassis">
                                <p className="unit-hero-subtitle">
                                    "{selectedUnit.tagline || 'Unit eksklusif Terratron Indonesia dengan performa tinggi untuk proyek infrastruktur strategis.'}"
                                </p>
                            </div>

                            <div className="pulse-beacon-container" style={{ marginBottom: '40px' }}>
                                <div className="tiny-pulse" />
                                <span className="beacon-status-text">SYSTEMS ACTIVE // UNIT READY FOR DEPLOYMENT</span>
                            </div>

                            {/* Gallery Component */}
                            <div className="unit-gallery-wrapper">
                                <GalleryViewer
                                    gallery={selectedUnit.gallery}
                                    model={selectedUnit.model}
                                    galleryLabel={selectedUnit.galleryLabel}
                                />
                            </div>
                        </div>

                        {/* RIGHT: TACTICAL DATA CHASSIS */}
                        <aside className="hud-side-panels">

                            {/* Panel 1: Operational Status */}
                            <div className="glass-panel-hud">
                                <span className="panel-label">OPERATIONAL TELEMETRY // HOUR METER</span>
                                <div className="hm-hud-value">
                                    {isNaN(parseInt(selectedUnit.hourMeter)) ? (
                                        <span className="hm-status-tag">{selectedUnit.hourMeter.toUpperCase()}</span>
                                    ) : (
                                        <div className="hm-number-group">
                                            <span className="hm-number">{selectedUnit.hourMeter}</span>
                                            <span className="hm-unit">HM</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Panel 2: Technical Specifications Matrix */}
                            <div className="glass-panel-hud">
                                <span className="panel-label">TECHNICAL SPECIFICATIONS // MATRIX</span>
                                <div className="tech-spec-list-standalone">
                                    {[
                                        { label: "SERIES / YEAR", value: selectedUnit.specs.year },
                                        { label: "OPERATING WEIGHT", value: selectedUnit.specs.weight },
                                        { label: "BUCKET CAPACITY", value: selectedUnit.specs.bucket },
                                        { label: "POWER OUTPUT", value: selectedUnit.specs.engine },
                                        { label: "FUEL CONSUMPTION", value: selectedUnit.specs.fuelConsumption },
                                        { label: "COMPLIANCE", value: "SILO/SIA ACTIVE" }
                                    ].map((spec, i) => (
                                        <div className="tech-spec-row-standalone" key={i}>
                                            <span className="spec-key">{spec.label}</span>
                                            <span className="spec-val">{spec.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Panel 3: Quick Action Center */}
                            <div className="hud-action-center-standalone">
                                <a
                                    href={`https://wa.me/${WA_NUMBER}?text=Halo%20Terratron Indonesia%2C%20saya%20ingin%20tanyakan%20ketersediaan%20unit%20*${encodeURIComponent(selectedUnit.model)}*`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hud-action-btn primary shimmering-cta"
                                >
                                    <span className="shimmer-effect" />
                                    <span className="btn-text">SECURE THIS UNIT NOW</span>
                                </a>
                                <button onClick={handleBackToList} className="hud-action-btn secondary">
                                    <span>BACK TO COMMAND TERMINAL</span>
                                </button>
                            </div>
                        </aside>
                    </div>

                    {/* ── World-Class Floating HUD Controls ── */}
                    <div className="floating-action-hud">
                        <motion.button
                            className="floating-back-btn"
                            onClick={handleBackToList}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            whileHover={{ x: -5 }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                            <span className="btn-label-float">BACK</span>
                        </motion.button>

                        <motion.a
                            href={`https://wa.me/${WA_NUMBER}?text=Halo%20Terratron Indonesia%2C%20saya%20tertarik%20dengan%20unit%20*${encodeURIComponent(selectedUnit.model)}*`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="floating-wa-btn"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <div className="wa-ring-pulse" />
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.431 5.63 1.434h.006c6.558 0 11.897-5.335 11.9-11.894a11.844 11.844 0 00-3.486-8.421z" />
                            </svg>
                        </motion.a>
                    </div>

                    {/* ── SECTION B: EXTENDED SPECIFICATIONS ── */}
                    <section className="detail-section-hud">
                        <SectionHeader idx="01" sub="// DATA_CORE: EXTENDED" title="SPESIFIKASI TAMBAHAN" />
                        <div className="unit-specs-detailed-grid-hud">
                            {Object.entries(selectedUnit.specs).map(([key, value]) => {
                                const labels = {
                                    maxDigDepth: 'Max Dig Depth',
                                    transportDimension: 'Dimensi Transport',
                                    trackType: 'Tipe Track'
                                }
                                if (!labels[key]) return null;
                                return (
                                    <div key={key} className="spec-detailed-item-hud">
                                        <label>{labels[key]}</label>
                                        <span>{value}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </section>

                    {/* ── SECTION C: NARASI + LONG DESC ── */}
                    <section className="detail-section">
                        <SectionHeader idx="02" sub="// INTEL: SKENARIO OPERASI" title="SKENARIO TEMPUR" />
                        <div className="unit-detailed-description" dangerouslySetInnerHTML={{ __html: selectedUnit.longDescription }} />
                    </section>

                    {/* ── SECTION D: LOAD CHART ── */}
                    {selectedUnit.loadChart && (
                        <section className="detail-section">
                            <SectionHeader idx="03" sub="// LOAD_CHART: SAFE WORKING LOAD" title={selectedUnit.loadChartTitle || 'LOAD CHART'} />
                            {selectedUnit.loadChartNote && (
                                <p className="section-note">{selectedUnit.loadChartNote}</p>
                            )}
                            <div className="load-chart-table-wrapper">
                                <table className="load-chart-table">
                                    <thead>
                                        <tr>
                                            <th>Radius Kerja</th>
                                            <th>Depan (Front)</th>
                                            <th>Samping (Side)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {selectedUnit.loadChart.map((row, i) => (
                                            <tr key={i}>
                                                <td>{row.radius}</td>
                                                <td className="load-val">{row.front}</td>
                                                <td className="load-val">{row.side}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Breaker Productivity — CAT 305 exclusive */}
                            {selectedUnit.breakerProductivity && (
                                <>
                                    <p className="section-subheader" style={{ marginTop: '2rem' }}>Output Breaker (Estimasi Lapangan)</p>
                                    {selectedUnit.breakerProductivityNote && (
                                        <p className="section-note">{selectedUnit.breakerProductivityNote}</p>
                                    )}
                                    <div className="load-chart-table-wrapper">
                                        <table className="load-chart-table">
                                            <thead>
                                                <tr>
                                                    <th>Material</th>
                                                    <th>Ketebalan</th>
                                                    <th>Output per Jam</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {selectedUnit.breakerProductivity.map((row, i) => (
                                                    <tr key={i}>
                                                        <td>{row.material}</td>
                                                        <td>{row.thickness}</td>
                                                        <td className="load-val">{row.output}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </>
                            )}

                            {/* Productivity Table — SH75 exclusive */}
                            {selectedUnit.productivityTable && (
                                <>
                                    <p className="section-subheader" style={{ marginTop: '2rem' }}>Data Produktivitas Lapangan</p>
                                    {selectedUnit.productivityNote && (
                                        <p className="section-note">{selectedUnit.productivityNote}</p>
                                    )}
                                    <div className="load-chart-table-wrapper">
                                        <table className="load-chart-table">
                                            <thead>
                                                <tr>
                                                    <th>Aktivitas</th>
                                                    <th>Cycle Time</th>
                                                    <th>Output / Jam</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {selectedUnit.productivityTable.map((row, i) => (
                                                    <tr key={i}>
                                                        <td>{row.activity}</td>
                                                        <td>{row.cycleTime}</td>
                                                        <td className="load-val">{row.outputPerHour}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </>
                            )}
                        </section>
                    )}

                    {/* ── SECTION E: LOGISTIK & MOBILISASI ── */}
                    {selectedUnit.logistics && (
                        <section className="detail-section">
                            <SectionHeader idx="04" sub="// DEPLOYMENT: LOGISTICS MODULE" title="LOGISTIK & MOBILISASI" />
                            <div className="logistics-grid">
                                {[
                                    { label: 'Tipe Truk Angkut', value: selectedUnit.logistics.truckType },
                                    { label: 'Lebar Jalan Minimum', value: selectedUnit.logistics.minRoadWidth },
                                    { label: 'Tinggi Gapura Minimum', value: selectedUnit.logistics.minGateHeight },
                                    { label: 'Ground Pressure', value: selectedUnit.logistics.groundPressure },
                                    ...(selectedUnit.logistics.specialFeature ? [{
                                        label: (
                                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                                                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                </svg>
                                                Fitur Khusus
                                            </span>
                                        ), value: selectedUnit.logistics.specialFeature
                                    }] : [])
                                ].map((item, i) => (
                                    <div key={i} className="logistics-item">
                                        <span className="logistics-label">{item.label}</span>
                                        <span className="logistics-value">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                            {selectedUnit.logistics.mobilizationNote && (
                                <div className="logistics-note-box">
                                    <span className="note-icon">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01" />
                                        </svg>
                                    </span>
                                    <p>{selectedUnit.logistics.mobilizationNote}</p>
                                </div>
                            )}
                        </section>
                    )}

                    {/* ── SECTION F: ATTACHMENTS ── */}
                    {selectedUnit.attachments && selectedUnit.attachments.length > 0 && (
                        <section className="detail-section">
                            <SectionHeader idx="05" sub="// ATTACHMENT: COMPATIBLE MODULES" title="ATTACHMENT TERSEDIA" />
                            <div className="attachments-detail-list">
                                {selectedUnit.attachments.map((att, i) => (
                                    <div key={i} className="attachment-detail-row">
                                        <div className="att-left">
                                            <span className="att-name">{att.name}</span>
                                            <span className="att-desc">{att.desc}</span>
                                        </div>
                                        <div className={`att-status-chip ${att.status.includes('Standard') ? 'included' : 'request'}`}>
                                            {att.status}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* ── SECTION G: COMPARISON ── */}
                    {selectedUnit.comparison && (
                        <section className="detail-section">
                            <SectionHeader idx="06" sub="// DECISION_ENGINE: SELF-SELECT" title="PANDUAN PEMILIHAN UNIT" />
                            <div className="comparison-grid">
                                <div className="comparison-col choose-this">
                                    <div className="comp-col-header">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ marginRight: '8px' }}>
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        PILIH UNIT INI JIKA:
                                    </div>
                                    <ul>
                                        {selectedUnit.comparison.choose_this_if.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="comparison-col choose-other">
                                    <div className="comp-col-header">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ marginRight: '8px' }}>
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                        PERTIMBANGKAN UNIT LAIN JIKA:
                                    </div>
                                    <ul>
                                        {selectedUnit.comparison.choose_other_if.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* ── SECTION G+1: GARANSI LAYANAN ── */}
                    <section className="detail-section">
                        <SectionHeader idx="07" sub="// PROTOCOL: SERVICE_GUARANTEE" title="GARANSI LAYANAN" />
                        <div className="guarantee-grid">
                            <div className="guarantee-item">
                                <div className="guarantee-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12 6 12 12 16 14" />
                                    </svg>
                                </div>
                                <div className="guarantee-text">
                                    <strong>Zero-Billing Downtime</strong>
                                    <p>Kerusakan mekanikal dari pihak kami &gt;8 jam tidak ditagihkan. Tercantum dalam SPK.</p>
                                </div>
                            </div>
                            <div className="guarantee-item">
                                <div className="guarantee-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a2 2 0 0 1-2.17-.55l-3.36 3.36-1.41-1.41 3.36-3.36a2 2 0 0 1-.55-2.17l-3.36 3.36z" />
                                        <path d="m2 22 5-5" />
                                        <path d="M9.5 14.5 16 8" />
                                        <path d="m7.3 12.1 4.5 4.5" />
                                        <path d="m14 19-3 3-5-5 3-3 5 5z" />
                                    </svg>
                                </div>
                                <div className="guarantee-text">
                                    <strong>Mekanik Standby 24 Jam</strong>
                                    <p>Service car on-call sepanjang masa kontrak. Intervensi teknis area Priangan Timur instan.</p>
                                </div>
                            </div>
                            <div className="guarantee-item">
                                <div className="guarantee-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                                        <path d="m3.3 7 8.7 5 8.7-5" />
                                        <path d="M12 22V12" />
                                    </svg>
                                </div>
                                <div className="guarantee-text">
                                    <strong>Sparepart Ready Stock</strong>
                                    <p>Stok suku cadang tersedia untuk semua merek armada kami. Tidak menunggu impor.</p>
                                </div>
                            </div>
                            <div className="guarantee-item">
                                <div className="guarantee-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                        <path d="m9 12 2 2 4-4" />
                                    </svg>
                                </div>
                                <div className="guarantee-text">
                                    <strong>Transparan, Tidak Ada Biaya Tersembunyi</strong>
                                    <p>Semua biaya — mobilisasi, solar, uang makan — diinformasikan sebelum Anda konfirmasi.</p>
                                </div>
                            </div>
                        </div>

                        {/* Operator Trust Block */}
                        <div className="operator-trust-block">
                            <div className="trust-header">
                                <span className="trust-tag">// OPERATOR VERIFIED</span>
                                <h3>SEMUA OPERATOR Terratron Indonesia</h3>
                            </div>
                            <div className="trust-items-row">
                                {[
                                    {
                                        icon: (
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <rect x="3" y="4" width="18" height="16" rx="2" />
                                                <circle cx="9" cy="10" r="2" />
                                                <path d="M15 8h2" />
                                                <path d="M15 12h2" />
                                                <path d="M7 16h10" />
                                            </svg>
                                        ),
                                        text: 'SIO Kelas 2 Aktif — diterbitkan Kemnaker RI'
                                    },
                                    {
                                        icon: (
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                                <line x1="16" y1="2" x2="16" y2="6" />
                                                <line x1="8" y1="2" x2="8" y2="6" />
                                                <line x1="3" y1="10" x2="21" y2="10" />
                                            </svg>
                                        ),
                                        text: 'Min. 3 Tahun Jam Terbang Lapangan'
                                    },
                                    {
                                        icon: (
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                                <path d="M2 17l10 5 10-5" />
                                                <path d="M2 12l10 5 10-5" />
                                            </svg>
                                        ),
                                        text: 'Terlatih Prosedur K3 Alat Berat'
                                    },
                                    {
                                        icon: (
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z" />
                                            </svg>
                                        ),
                                        text: 'APD Standar Proyek (Helm, Rompi, Safety Shoes)'
                                    },
                                ].map((item, i) => (
                                    <div key={i} className="trust-item">
                                        <span className="trust-item-icon">{item.icon}</span>
                                        <span className="trust-item-text">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ── SECTION H: PRIMARY CTA ── */}
                    <section className="detail-section detail-cta-section">
                        <div className="cta-main-block">
                            <div className="cta-text-col">
                                <p className="cta-pre-label">// KONTAK LANGSUNG</p>
                                <h2 className="cta-unit-name">{selectedUnit.model}</h2>
                                <p className="cta-unit-tagline">Konfirmasi ketersediaan & dapatkan harga resmi dalam hitungan menit.</p>
                                {selectedUnit.serviceArea && (
                                    <p className="cta-service-area">
                                        Area layanan: {selectedUnit.serviceArea.join(' · ')}
                                    </p>
                                )}
                            </div>
                            <div className="cta-btn-col">
                                <a
                                    href={`https://wa.me/${WA_NUMBER}?text=Halo%20Terratron Indonesia%2C%20saya%20ingin%20tanyakan%20ketersediaan%20dan%20harga%20unit%20*${encodeURIComponent(selectedUnit.model)}*%20yang%20saya%20lihat%20di%20website%20Terratron.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cta-btn-gold-large"
                                >
                                    <span>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginRight: '8px', verticalAlign: 'middle' }}>
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                        </svg>
                                        WHATSAPP: CEK HARGA & KETERSEDIAAN
                                    </span>
                                </a>
                                <div className="unit-doc-compliance">
                                    DOKUMEN READY: {selectedUnit.documents.join(' // ')}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── SECTION I: FAQ per Unit ── */}
                    {selectedUnit.faqUnit && selectedUnit.faqUnit.length > 0 && (
                        <section className="detail-section">
                            <SectionHeader idx="08" sub="// INTEL: PERTANYAAN UMUM" title={`FAQ — ${selectedUnit.model}`} />
                            <FaqAccordion items={selectedUnit.faqUnit} />
                        </section>
                    )}

                    {/* ── SECTION J: SILO — Related Articles ── */}
                    {relatedArticles.length > 0 && (
                        <div className="unit-related-articles">
                            <h3 className="silo-title">PANDUAN TEKNIS & ANALISA TERKAIT</h3>
                            <div className="silo-grid">
                                {relatedArticles.map(art => (
                                    <Link to={`/pustaka-konstruksi/${art.slug}`} key={art.id} className="silo-card">
                                        <div className="silo-img">
                                            <img src={art.img} alt={art.title} loading="lazy" />
                                        </div>
                                        <div className="silo-info">
                                            <span className="silo-cat">{art.category}</span>
                                            <h4>{art.title}</h4>
                                            <span className="silo-link">
                                                BACA ANALISA
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ marginLeft: '8px' }}>
                                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                                </svg>
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </article>

            ) : (
                /* ══════════════════════════════════════════════
                    FLEET LIST PAGE
                ══════════════════════════════════════════════ */
                <>
                    {/* 1. HERO */}
                    <section className="armada-hero">
                        <div className="hero-bg-detail">
                            <img src="/asset/hero_background_mobile2.png" alt="Fleet Terratron" fetchPriority="high" />
                        </div>
                        <div className="hero-bg-overlay" />
                        <div className="hero-context container">
                            {area && (
                                <nav className="breadcrumb-nav-ui" style={{ marginBottom: '20px', borderBottom: 'none' }}>
                                    <Link to="/">HOME</Link>
                                    <span className="divider">//</span>
                                    <Link to="/sewa-alat-berat">SEWA ALAT BERAT</Link>
                                    <span className="divider">//</span>
                                    <span className="current">{formattedArea?.toUpperCase()}</span>
                                </nav>
                            )}
                            <motion.h1
                                className="hero-h1"
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                {area
                                    ? <><>SEWA ALAT BERAT & EXCAVATOR </><span>{formattedArea?.toUpperCase()}</span></>
                                    : <><>DAFTAR UNIT & HARGA SEWA </><span>EXCAVATOR</span><> [JAWA BARAT]</></>
                                }
                            </motion.h1>
                            <motion.p
                                className="hero-subtext"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                {area
                                    ? `Layanan rental tercepat di ${formattedArea} dan sekitarnya. Dukungan teknis 24/7, unit tahun muda.`
                                    : 'Ready Stock: SANY SY75, CAT 305.5E2, Komatsu PC75, Sumitomo SH75. Dokumen SILO & SIO Operator Aktif.'
                                }
                            </motion.p>
                        </div>
                    </section>

                    {/* 2. FILTER */}
                    <div className="filter-sticky-wrapper">
                        <div className="filter-bar container hide-scrollbar">
                            {filterOptions.map(opt => (
                                <button
                                    key={opt.id}
                                    className={`filter-btn ${activeFilter === opt.id ? 'active' : ''}`}
                                    onClick={() => setActiveFilter(opt.id)}
                                >
                                    {opt.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* 3. UNIT LIST */}
                    <section className="unit-list-section container">
                        <div className="stacked-armada-list">
                            <AnimatePresence mode="popLayout">
                                {filteredUnits.map((unit, index) => (
                                    <motion.article
                                        key={unit.id}
                                        className="industrial-datasheet-card"
                                        layout
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.98 }}
                                        transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                                        onClick={() => handleSelectUnit(unit)}
                                    >
                                        {/* VISUAL */}
                                        <div className="asset-visual-box">
                                            <div className={`status-neon-badge ${unit.status}`}>
                                                <div className="neon-dot" />
                                                <span>{unit.status === 'available' ? 'READY' : 'ON PROJECT'}</span>
                                            </div>
                                            <div className="image-container-16-9">
                                                <img
                                                    src={unit.image}
                                                    alt={unit.seoAlt || `Sewa Excavator ${unit.model}`}
                                                    className="asset-img"
                                                    loading="lazy"
                                                />
                                                <div className="visual-scanline" />
                                                <div className="image-vignette" />
                                            </div>
                                            <div className="unit-uid-tag">ASSET_ID: TRTRN-{(index + 101)}</div>
                                        </div>

                                        {/* DATASHEET */}
                                        <div className="datasheet-body">
                                            {/* Nick + Model */}
                                            <div className="unit-primary-info">
                                                <span className="card-nickname">// {unit.nickName}</span>
                                                <h3 className="unit-model-header">{unit.model}</h3>
                                                <div className="unit-type-tag">{unit.type}</div>
                                            </div>

                                            {/* Badges */}
                                            {unit.badges && (
                                                <div className="card-badges-row">
                                                    {unit.badges.map((b, i) => (
                                                        <span key={i} className="card-badge-chip">
                                                            {getBadgeIcon(b.icon)}
                                                            {b.label}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}

                                            {/* Tactical Specs */}
                                            <div className="tactical-specs-row">
                                                <div className="spec-pill">
                                                    <svg className="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                                                    </svg>
                                                    <span className="spec-label">{unit.specs.year}</span>
                                                </div>
                                                <div className="spec-pill">
                                                    <svg className="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                                                    </svg>
                                                    <span className="spec-label">{unit.specs.weight}</span>
                                                </div>
                                                <div className="spec-pill">
                                                    <svg className="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><polyline points="13 2 13 9 20 9" />
                                                    </svg>
                                                    <span className="spec-label">{unit.specs.fuelConsumption}</span>
                                                </div>
                                            </div>

                                            {/* Best For */}
                                            <div className="seo-context-box">
                                                <p className="unit-brief-desc">{unit.bestFor}</p>
                                            </div>


                                            {/* CTA → Spec Sheet */}
                                            <button
                                                className="btn-industrial-cta"
                                                onClick={e => { e.stopPropagation(); handleSelectUnit(unit); }}
                                            >
                                                <span className="btn-label">
                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginRight: '6px' }}>
                                                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                                                        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                                                    </svg>
                                                    LIHAT SPEC SHEET
                                                </span>
                                                <div className="btn-metallic-overlay" />
                                                <div className="btn-glow-effect" />
                                            </button>
                                        </div>

                                        <div className="card-blueprint-corner" />
                                    </motion.article>
                                ))}
                            </AnimatePresence>
                        </div>
                    </section>

                    {/* 4. RELIABILITY ASSURANCE */}
                    <section className="trust-section-lux container">
                        <SectionHeader idx="04" sub="// PROTOCOL: ENFORCED" title="RELIABILITY_ASSURANCE" />
                        <div className="assurance-stack-tactical">
                            {[
                                { label: '24/7', title: 'Mekanik Ready 24/7', desc: 'Service Car standby untuk intervensi teknis area Priangan Timur secara instan.', statusVal: 'OPERATIONAL', statusClass: 'operational' },
                                { label: 'SYNC', title: 'Unit Cadangan (Hotswap)', desc: 'Garansi penggantian unit dalam 1×24 jam untuk menjamin zero-downtime proyek.', statusVal: 'STANDBY_READY', statusClass: 'standby' },
                                { label: 'EXP', title: 'Elite Operator Squad', desc: 'Minimal 5 tahun jam terbang pada medan ekstrem dengan sertifikasi SIO aktif.', statusVal: 'VERIFIED', statusClass: 'verified' }
                            ].map((mod, i) => (
                                <div key={i} className="assurance-module-horizontal">
                                    <div className="module-radar-box">
                                        <div className="radar-ping" />
                                        <div className="radar-circle" />
                                        <span className="radar-label">{mod.label}</span>
                                    </div>
                                    <div className="module-content">
                                        <h3 className="assurance-h3-tactical">{mod.title}</h3>
                                        <p className="assurance-p-tactical">{mod.desc}</p>
                                    </div>
                                    <div className="module-status-indicator">
                                        <span className="status-label">STATUS:</span>
                                        <span className={`status-value ${mod.statusClass}`}>{mod.statusVal}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </>
            )}
        </motion.div>
    )
}

export default FullArmada

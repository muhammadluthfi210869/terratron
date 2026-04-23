import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './UnitDetail.css'

const UnitDetail = ({ unit, onClose }) => {
    const [isPreparingPrint, setIsPreparingPrint] = useState(false)
    const [currentTime, setCurrentTime] = useState(new Date())

    // Update system clock for tactical feel
    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000)
        return () => clearInterval(timer)
    }, [])

    const handlePrint = () => {
        setIsPreparingPrint(true)
        setTimeout(() => {
            window.print()
            setIsPreparingPrint(false)
        }, 1200)
    }

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => { document.body.style.overflow = 'unset' }
    }, [])

    if (!unit) return null

    const isHMStatus = isNaN(parseInt(unit.hourMeter))
    const systemTimeString = currentTime.toLocaleTimeString('en-GB', { hour12: false })

    return (
        <div className="unit-modal-overlay">
            <motion.div
                className="modal-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            />

            <motion.div
                className="unit-modal cinematic-hud"
                initial={{ y: "100%", opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: "100%", opacity: 0, scale: 0.95 }}
                transition={{ type: 'spring', damping: 40, stiffness: 250 }}
            >
                {/* Immersive Cinematic Background */}
                <div className="cinematic-background">
                    <img src={unit.image} alt={unit.model} />
                    <div className="background-overlay-gradient" />
                </div>

                {/* Tactical Interface Chassis */}
                <div className="modal-interface-layer hide-scrollbar">

                    {/* TOP METADATA BAR (Tactical Option 1) */}
                    <header className="hud-nav-bar">
                        <div className="brand-identifier">
                            <span className="brand-main">TERRATRON INDONESIA // COMMAND</span>
                            <span className="brand-sub">ASSET_ID: TRN-{unit.id.toUpperCase()}</span>
                            <span className="brand-sub">LOC: -6.2088, 106.8456</span>
                            <span className="brand-sub">SYS_TIME: {systemTimeString}</span>
                        </div>
                        <button className="hud-close-btn" onClick={onClose}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>
                    </header>

                    {/* Main HUD Body */}
                    <main className="hud-main-content">

                        {/* Hero Info - Otoritas Display */}
                        <section className="hero-text-block">
                            <div className="unit-category-pill">{unit.category.toUpperCase()} // HEAVY CLASS</div>
                            <h1 className="unit-hero-title">{unit.model}</h1>
                            <div className="quote-chassis">
                                <p className="unit-hero-subtitle">
                                    "{unit.tagline || 'Unit eksklusif Terratron Indonesia dengan performa tinggi untuk proyek infrastruktur strategis.'}"
                                </p>
                            </div>
                            <div className="pulse-beacon-container">
                                <div className="tiny-pulse" />
                                <span className="beacon-status-text">SYSTEMS ACTIVE // UNIT READY FOR DEPLOYMENT</span>
                            </div>
                        </section>

                        {/* Data Panels - Tactical Data Chassis */}
                        <aside className="data-hud-panels">

                            {/* Critical Telemetry: HM */}
                            <div className="glass-panel">
                                <span className="hm-label">OPERATIONAL TELEMETRY // HOUR METER</span>
                                <div className="hm-hud-value">
                                    <div className="hm-number-group">
                                        {isHMStatus ? (
                                            <span className="hm-status-tag">{unit.hourMeter.toUpperCase()}</span>
                                        ) : (
                                            <>
                                                <span className="hm-number">{unit.hourMeter}</span>
                                                <span className="hm-unit">HM</span>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Technical Specs Array */}
                            <div className="glass-panel">
                                <span className="hm-label">TECHNICAL SPECIFICATIONS // MATRIX</span>
                                <div className="tech-spec-list">
                                    {[
                                        { label: "SERIES / YEAR", value: unit.specs.year },
                                        { label: "OPERATING WEIGHT", value: unit.specs.weight },
                                        { label: "BUCKET CAPACITY", value: unit.specs.bucket },
                                        { label: "POWER OUTPUT", value: unit.specs.engine },
                                        { label: "COMPLIANCE", value: "SILO/SIA ACTIVE" }
                                    ].map((spec, i) => (
                                        <div className="tech-spec-row" key={i}>
                                            <span className="spec-key">{spec.label}</span>
                                            <span className="spec-val">{spec.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Action Control Center */}
                            <div className="hud-actions">
                                <button
                                    className="action-btn-cinematic primary"
                                    onClick={handlePrint}
                                    disabled={isPreparingPrint}
                                >
                                    {isPreparingPrint ? (
                                        <span>GENERATING ENCRYPTED PDF...</span>
                                    ) : (
                                        <>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                                            </svg>
                                            <span>TECHNICAL DATASHEET</span>
                                        </>
                                    )}
                                </button>
                                <a
                                    href={`https://wa.me/6282260280392?text=Halo%20Terratron%20Indonesia,%20saya%20tertarik%20sewa%20unit%20${unit.model}`}
                                    className="action-btn-cinematic secondary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-14h.8A8.4 8.4 0 0 1 21 11.5z" />
                                    </svg>
                                    <span>INQUIRE AVAILABILITY</span>
                                </a>
                            </div>

                        </aside>
                    </main>
                </div>

                {/* OFFICIAL PRINT DOCUMENT: TERRATRON INDONESIA (OFF-SCREEN) */}
                <div className="official-print-document">
                    <div className="print-header-logo">
                        <img src="/asset/logo_brand (1).webp" alt="Terratron Logo" className="print-brand-img" />
                        <span className="print-brand-text">TERRATRON INDONESIA // HEAVY EQUIPMENT</span>
                    </div>
                    <div className="print-header-main">
                        <div>
                            <h1 className="print-model-name">{unit.model}</h1>
                            <p className="print-model-subtitle">OFFICIAL TECHNICAL DATASHEET // REF: TRN-{unit.id.toUpperCase()}</p>
                        </div>
                        <div className="doc-metadata">
                            DATE: {new Date().toLocaleDateString('id-ID')}<br />
                            TIME: {systemTimeString}<br />
                            STATUS: CERTIFIED
                        </div>
                    </div>

                    <div className="print-body-layout">
                        <div className="print-side-a">
                            <div className="print-image-container">
                                <img src={unit.image} alt={unit.model} className="print-hero-image" />
                            </div>
                            <div className="print-overview-box">
                                <h3 className="print-section-title">UNIT OVERVIEW</h3>
                                <p className="print-desc-text">
                                    {unit.bestFor}<br /><br />
                                    Unit ini merupakan bagian dari armada prioritas <strong>Terratron Indonesia</strong>.
                                    Telah melewati inspeksi teknis menyeluruh dan siap dioperasikan untuk beban kerja tinggi.
                                    Dilengkapi dengan sertifikasi unit (SILO) dan operator berlisensi (SIO).
                                </p>
                            </div>
                        </div>

                        <div className="print-side-b">
                            <h3 className="print-section-title">TECHNICAL SPECIFICATIONS</h3>
                            <table className="print-technical-table">
                                <tbody>
                                    <tr className="highlight-row">
                                        <td>HOUR METER (HM)</td>
                                        <td>{unit.hourMeter.toUpperCase()}</td>
                                    </tr>
                                    <tr>
                                        <td>YEAR OF MANUFACTURE</td>
                                        <td>{unit.specs.year}</td>
                                    </tr>
                                    <tr>
                                        <td>OPERATING WEIGHT</td>
                                        <td>{unit.specs.weight}</td>
                                    </tr>
                                    <tr>
                                        <td>BUCKET CAPACITY</td>
                                        <td>{unit.specs.bucket}</td>
                                    </tr>
                                    <tr>
                                        <td>ENGINE TYPE</td>
                                        <td>{unit.specs.engine}</td>
                                    </tr>
                                    <tr>
                                        <td>FUEL CONSUMPTION</td>
                                        <td>{unit.specs.fuelConsumption}</td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="print-compliance-box">
                                <h3 className="print-section-title">COMPLIANCE & LOGISTICS</h3>
                                {unit.documents.map((doc, idx) => (
                                    <div key={idx} className="print-doc-item">
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" style={{ marginRight: '6px', color: '#000' }}>
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        {doc.toUpperCase()} - VERIFIED & ACTIVE
                                    </div>
                                ))}
                            </div>

                            <div className="print-footer-auth">
                                <div className="qr-container">
                                    <div className="qr-box">VERIFIED</div>
                                    <div className="qr-text">Scan for authenticity<br />terratron.id/verify</div>
                                </div>
                                <div className="signature-box">
                                    <div className="sign-title">FLEET COMMANDER AUTH</div>
                                    <div className="sign-line" />
                                    <div className="sign-name">TERRATRON INDONESIA OPERATIONS</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default UnitDetail

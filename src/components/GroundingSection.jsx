import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import './GroundingSection.css'

const GroundingSection = () => {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-50px" })

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 28
            }
        }
    }

    return (
        <section className="grounding-section" ref={sectionRef}>
            <motion.div
                className="grounding-container"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {/* Section Header */}
                <motion.div className="grounding-header" variants={itemVariants}>
                    <h2 className="grounding-title">
                        <span className="title-text">KANTOR &</span>
                        <span className="title-accent">POOL ALAT</span>
                    </h2>
                    <p className="grounding-subtitle">Temukan Kami di Lapangan</p>
                </motion.div>

                {/* Location Card */}
                <motion.div className="location-card" variants={itemVariants}>
                    {/* Location Icon */}
                    <div className="location-icon-wrapper">
                        <div className="location-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                        </div>
                    </div>

                    {/* Location Info */}
                    <div className="location-info">
                        <h3 className="pool-name">POOL TERRATRON INDONESIA HEAVY EQUIPMENT</h3>
                        <div className="pool-divider" />
                        <address className="pool-address">
                            Dsn. Cishung, RT.04/RW.08<br />
                            Bojongmengger, Kec. Cijeungjing<br />
                            Kab. Ciamis, Jawa Barat 46271
                        </address>

                        {/* Status Badge */}
                        <div className="status-badge">
                            <span className="status-dot" />
                            <span className="status-text">BUKA 08.00 – 21.00</span>
                            <span className="status-days">Senin - Minggu</span>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="action-buttons">
                        <a
                            href="https://www.google.com/maps/dir/?api=1&destination=-7.4079,108.4834"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="action-btn primary btn-cta"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            <span>BUKA GOOGLE MAPS</span>
                        </a>
                        <a
                            href="tel:+6282260280392"
                            className="action-btn secondary btn-cta"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            <span>TELEPON</span>
                        </a>
                    </div>
                </motion.div>

                {/* Map Thumbnail */}
                <motion.div className="map-thumbnail" variants={itemVariants}>
                    <div className="map-frame">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.8!2d108.4834!3d-7.4079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f5d5b5b5b5b5b%3A0x0!2sBojongmengger%2C%20Cijeungjing%2C%20Ciamis!5e0!3m2!1sid!2sid!4v1708300000000!5m2!1sid!2sid"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Pool Terratron Indonesia — Ciamis, Jawa Barat"
                        />
                        <div className="map-overlay" />
                    </div>
                    <p className="map-hint">Tap peta untuk navigasi</p>
                </motion.div>

                {/* Footer */}
                <motion.footer className="site-footer" variants={itemVariants}>
                    <div className="service-areas">
                        <span className="area-label">TARGET OPERASIONAL & KAWASAN:</span>
                        <div className="area-links">
                            <Link to="/sewa-alat-berat/lokasi/ciamis" className="area-link">Sewa Excavator Ciamis Kota</Link>
                            <span className="area-dot">•</span>
                            <Link to="/sewa-alat-berat/lokasi/tasikmalaya" className="area-link">Rental Dozer Tasikmalaya</Link>
                            <span className="area-dot">•</span>
                            <Link to="/sewa-alat-berat/lokasi/banjar" className="area-link">Sewa Alat Berat Banjar</Link>
                            <span className="area-dot">•</span>
                            <Link to="/sewa-alat-berat/lokasi/pangandaran" className="area-link">Rental PC200 Pangandaran</Link>
                            <span className="area-dot">•</span>
                            <Link to="/sewa-alat-berat/lokasi/singaparna" className="area-link">Sewa Beko Singaparna</Link>
                            <span className="area-dot">•</span>
                            <Link to="/sewa-alat-berat/lokasi/cijeungjing" className="area-link">Sewa Excavator Cijeungjing</Link>
                        </div>
                    </div>
                    <div className="service-areas sub-areas">
                        <span className="area-label">KECAMATAN TASIKMALAYA:</span>
                        <div className="area-links">
                            <Link to="/sewa-alat-berat/lokasi/kawalu" className="area-link">Kawalu</Link>
                            <span className="area-dot">•</span>
                            <Link to="/sewa-alat-berat/lokasi/cipedes" className="area-link">Cipedes</Link>
                            <span className="area-dot">•</span>
                            <Link to="/sewa-alat-berat/lokasi/indihiang" className="area-link">Indihiang</Link>
                            <span className="area-dot">•</span>
                            <Link to="/sewa-alat-berat/lokasi/mangkubumi" className="area-link">Mangkubumi</Link>
                            <span className="area-dot">•</span>
                            <Link to="/sewa-alat-berat/lokasi/singaparna" className="area-link">Singaparna</Link>
                            <span className="area-dot">•</span>
                            <Link to="/sewa-alat-berat/lokasi/ciawi" className="area-link">Ciawi</Link>
                        </div>
                    </div>

                    <div className="footer-brand">
                        <img src="/asset/logo_brand (1).webp" alt="Terratron Logo" className="footer-brand-logo-img" />
                        <span className="footer-logo">TERRATRON INDONESIA HEAVY EQUIPMENT</span>
                        <span className="footer-tagline">Solusi Alat Berat Priangan Timur</span>
                    </div>

                    <div className="footer-trust">
                        <span className="trust-item">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                            ISO 9001
                        </span>
                        <span className="trust-divider">•</span>
                        <span className="trust-item">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                            K3 CERTIFIED
                        </span>
                        <span className="trust-divider">•</span>
                        <span className="trust-item">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                            </svg>
                            SILO / SIA
                        </span>
                    </div>

                    <div className="footer-copyright">
                        <span>© 2026 TERRATRON INDONESIA HEAVY EQUIPMENT. ALL RIGHTS RESERVED.</span>
                    </div>
                </motion.footer>
            </motion.div>
        </section>
    )
}

export default GroundingSection

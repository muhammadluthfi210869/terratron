import { motion } from 'framer-motion'
import { companyStats, clientLogos } from '../data/fleetData'
import './HeroSection.css'

const HeroSection = () => {
    // ========================================
    // DYNAMIC COMPANY NAME - HOOK SECTION
    // Edit these values to change company name
    // ========================================
    const COMPANY_NAME_MAIN = "Terratron Indonesia";      // Line 1 - Gold gradient
    const COMPANY_NAME_HEAVY = "Heavy Equipment";         // Line 2 - White text
    // ========================================

    // Calculate character counts for fluid typography scaling
    const charCountMain = COMPANY_NAME_MAIN.length;
    const charCountHeavy = COMPANY_NAME_HEAVY.length;

    // Animation variants - PROPER SLAM (No Bounce, High Damping)
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.3
            }
        }
    }

    // SLAM EFFECT - Heavy, no bounce (damping 35+)
    const slamVariants = {
        hidden: { opacity: 0, scale: 1.3, y: -20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 400,
                damping: 35,  // HIGH damping = SOLID stop, no bounce
                mass: 2       // Heavy mass for weight perception
            }
        }
    }

    // Fade with weight - slower, more deliberate
    const fadeWeightedVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.9,
                ease: [0.25, 0.1, 0.25, 1] // Heavy ease-out
            }
        }
    }

    // Stats stagger - slot machine effect
    const statsContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.8
            }
        }
    }

    const statVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 25,
                mass: 1.2
            }
        }
    }

    // Trust badges stagger
    const trustVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: 'easeOut' }
        }
    }

    // Duplicate logos for seamless infinite scroll
    const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos]

    return (
        <section className="hero-section">
            {/* Background Image with VOID Overlay */}
            <div className="hero-background">
                <img
                    src="/asset/hero_background_mobile2.png"
                    alt="Excavator in action"
                    className="hero-bg-image"
                    fetchpriority="high"
                />
                {/* TRUE BLACK VOID Overlay */}
                <div className="hero-overlay-void" />
                {/* Rim Light Effect */}
                <div className="hero-rim-light" />
                {/* Noise Texture for Material Feel */}
                <div className="hero-noise" />
            </div>

            {/* THE SILENT AUTHORITY - WORLD CLASS MINIMALIST BRANDING */}
            <motion.div
                className="silent-brand-header"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1.2 }}
            >
                <div className="brand-anchor">
                    <div className="brand-logo-minimal">
                        <img src="/asset/logo_brand.jpeg" alt="Terratron" />
                    </div>
                    <div className="brand-v-line" /> {/* Tactical Guide Line */}
                    <div className="brand-identity-text">
                        <div className="brand-name-row">
                            <span className="brand-name-main">TERRATRON</span>
                            <span className="brand-name-sep">|</span>
                            <span className="brand-name-sub">INDONESIA</span>
                        </div>
                        <div className="brand-system-row">
                            <span className="system-tag">INDUSTRIAL AUTHORITY // HQ_BKS</span>
                            <div className="system-pulse-container">
                                <span className="system-pulse-dot" />
                                <span className="system-status">SECURE</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sub-Metadata Grid */}
                <div className="brand-meta-grid">
                    <div className="meta-col">
                        <span className="meta-label">SECTOR</span>
                        <span className="meta-val">HEAVY EQUIPMENT</span>
                    </div>
                    <div className="meta-col">
                        <span className="meta-label">COORD</span>
                        <span className="meta-val">6.230°S 106.997°E</span>
                    </div>
                </div>
            </motion.div>

            {/* Content */}
            <motion.div
                className="hero-content container"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Company Name - THE GIANT NAMECARD (SLAM EFFECT) */}
                <motion.div className="hero-namecard" variants={slamVariants}>
                    <h1 className="company-name">
                        <span className="name-main">PUSAT SEWA EXCAVATOR</span>
                        <span className="name-heavy">& ALAT BERAT JABODETABEK</span>
                    </h1>
                    <div className="gold-divider" />
                    <div className="fleet-tagline-center">
                        Unit 2020+ • Operator SIO • Mekanik 24 Jam
                    </div>
                </motion.div>

                {/* Verified Owner Badge - METAL EMBLEM (Non-Interactive) */}
                <div className="hero-cta-group">
                    <motion.div className="verified-emblem" variants={fadeWeightedVariants}>
                        <svg className="emblem-checkmark" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                        <span className="emblem-text">VERIFIED OWNER & POOL</span>
                    </motion.div>

                    <motion.a
                        href="https://wa.me/6281234567890?text=Halo%20Terratron Indonesia%20Heavy%20Equipment,%20saya%20ingin%20cek%20ketersediaan%20unit..."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hero-primary-cta"
                        variants={fadeWeightedVariants}
                    >
                        <span className="cta-wa-icon">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                            </svg>
                        </span>
                        <span className="cta-text">WA: CEK KETERSEDIAAN UNIT</span>
                    </motion.a>
                </div>

                {/* Stats Tape Counter - INDUSTRIAL ODOMETER PANEL */}
                <motion.div
                    className="stats-tape"
                    variants={statsContainerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="tape-glass-effect" />
                    <div className="tape-inner">
                        <motion.div className="tape-cell" variants={statVariants}>
                            <span className="tape-value">{companyStats.units}</span>
                            <span className="tape-label">UNIT</span>
                        </motion.div>

                        <div className="tape-divider" />

                        <motion.div className="tape-cell tape-cell-primary" variants={statVariants}>
                            <span className="tape-value">{companyStats.projects}</span>
                            <span className="tape-label">PROYEK</span>
                        </motion.div>

                        <div className="tape-divider" />

                        <motion.div className="tape-cell" variants={statVariants}>
                            <span className="tape-value">{companyStats.experience}<span className="tape-suffix">+</span></span>
                            <span className="tape-label">TAHUN</span>
                        </motion.div>
                    </div>
                    <div className="tape-scanline" />
                </motion.div>

                {/* Trust Line - Inline Badges */}
                <motion.div
                    className="trust-line"
                    variants={statsContainerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.span className="trust-item" variants={trustVariants}>
                        <svg className="trust-check-svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                        ISO 9001
                    </motion.span>
                    <motion.span className="trust-separator" variants={trustVariants}>•</motion.span>
                    <motion.span className="trust-item" variants={trustVariants}>
                        <svg className="trust-check-svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                        K3 CERTIFIED
                    </motion.span>
                    <motion.span className="trust-separator" variants={trustVariants}>•</motion.span>
                    <motion.span className="trust-item" variants={trustVariants}>
                        <svg className="trust-check-svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                        SILO
                    </motion.span>
                </motion.div>
            </motion.div>

            {/* STRATEGIC PROJECT PARTNERS - THE PREMIUM GLASS DECK */}
            <motion.div
                className="hero-partners-section"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="partners-label">
                    <span className="partners-line" />
                    <span className="partners-text">STRATEGIC PROJECT PARTNERS</span>
                    <span className="partners-line" />
                </div>

                <div className="partners-deck">
                    {clientLogos.map((logo, index) => (
                        <div
                            key={logo.id}
                            className="partner-card"
                        >
                            <img
                                src={logo.image}
                                alt={logo.name}
                                className="partner-logo-colored"
                            />
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Scroll Indicator - Minimal Industrial */}
            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
            >
                <motion.div
                    className="scroll-arrow"
                    animate={{ y: [0, 6, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: [0.45, 0, 0.55, 1] // Industrial, not bouncy
                    }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M7 10l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default HeroSection

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



            {/* Content */}
            <motion.div
                className="hero-content container"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div className="hero-namecard" variants={slamVariants}>
                    <div className="company-name">
                        <h1 className="name-main">PUSAT SEWA EXCAVATOR & DOZER</h1>
                        <h2 className="name-heavy">CIAMIS & TASIKMALAYA</h2>
                    </div>
                </motion.div>





                {/* HERO BADGES - TACTICAL SPEC-OPS TAGS */}
                <motion.div
                    className="hero-badges-container"
                    variants={fadeWeightedVariants}
                    style={{ marginTop: '0px' }} /* Initial spacing handled by CSS */
                >
                    <div className="hero-badge">
                        <span className="badge-icon-svg">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 21h18" />
                                <path d="M5 21V7" />
                                <path d="M19 21V7" />
                                <path d="M4 7h16" />
                                <path d="m12 2-8 5h16z" />
                                <path d="M10 21V7" />
                                <path d="M14 21V7" />
                            </svg>
                        </span>
                        <span className="badge-text">Unit Standby di Pool Priangan Timur</span>
                    </div>
                    <div className="hero-badge">
                        <span className="badge-icon-svg">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12.29 17a5 5 0 0 1-4.29-8.5" />
                                <path d="M21 12a9 9 0 1 1-9-9c1.9 0 3.65.6 5.1 1.6" />
                                <path d="M16 9v4h4" />
                            </svg>
                        </span>
                        <span className="badge-text">Zero-Tolerance Maintenance</span>
                    </div>
                    <div className="hero-badge">
                        <span className="badge-icon-svg">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <path d="M14 2v6h6" />
                                <path d="m9 15 2 2 4-4" />
                            </svg>
                        </span>
                        <span className="badge-text">Semua Unit Dilengkapi SILO Aktif & Operator ber-SIO</span>
                    </div>
                </motion.div>

                {/* WORLD CLASS TACTICAL CTA - Relocated for optimal flow */}
                {/* WORLD CLASS TACTICAL CTA - THE MONOLITH */}
                <motion.a
                    href="https://wa.me/6282260280392?text=Halo,%20saya%20butuh%20sewa%20excavator%20di%20Ciamis/Tasikmalaya..."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-tactical-cta"
                    variants={fadeWeightedVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <span className="cta-text">CEK UNIT DI TASIK/CIAMIS HARI INI</span>
                    <div className="cta-tactical-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                            <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                            <path d="m21 3 1 11h-2" />
                            <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                            <path d="M3 4h8" />
                        </svg>
                    </div>
                </motion.a>

            </motion.div>

            {/* STRATEGIC PROJECT PARTNERS - THE PREMIUM GLASS DECK */}
            <motion.div
                className="hero-partners-section"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 1, ease: [0.22, 1, 0.36, 1] }} // Earlier animation
            >
                {/* Stats Tape Counter - Relocated to Bottom Deck */}
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
        </section >
    )
}

export default HeroSection

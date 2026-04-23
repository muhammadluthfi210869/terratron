import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { deploymentHistory, clientLogos } from '../data/fleetData'
import './Projects.css'

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('SEMUA')

    const filters = [
        'SEMUA',
        'CUT & FILL',
        'DEMOLISI',
        'INFRASTRUKTUR JALAN',
        'PENGOLAHAN LIMBAH/SWAMP'
    ]

    const filteredProjects = useMemo(() => {
        if (activeFilter === 'SEMUA') return deploymentHistory
        return deploymentHistory.filter(proj => proj.category === activeFilter)
    }, [activeFilter])

    return (
        <div className="projects-page">
            {/* HERO SECTION: THE AUTHORITY STATEMENT */}
            <section className="projects-hero">
                <div className="hero-video-overlay">
                    {/* Placeholder for Video Time-lapse */}
                    <img
                        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop"
                        alt="Background Proyek Konstruksi"
                        className="hero-video-fallback"
                    />
                    <div className="dark-overlay"></div>
                </div>

                <div className="container hero-content">
                    <nav className="breadcrumb">
                        <span>HOME</span> / <span>KONSTRUKSI SIPIL</span> / <span>REKAM JEJAK</span>
                    </nav>
                    <motion.h1
                        className="hero-h1"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        REKAM JEJAK PROYEK & <br /><span>KONSTRUKSI SIPIL</span>
                    </motion.h1>
                    <motion.p
                        className="hero-sub"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        "50+ Proyek Terselesaikan di Ciamis, Tasikmalaya, dan Priangan Timur. Spesialis Cut & Fill, Demolisi, dan Infrastruktur Jalan."
                    </motion.p>
                </div>
            </section>

            {/* PROJECT CATEGORY FILTER (The Silo Navigation) */}
            <nav className="filter-sticky-wrapper">
                <div className="container">
                    <div className="filter-bar hide-scrollbar">
                        {filters.map(filter => (
                            <button
                                key={filter}
                                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                                onClick={() => setActiveFilter(filter)}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

            {/* THE CHRONOLOGY COMMAND: FIELD REPORTS */}
            <section className="field-reports-section container">
                <div className="section-header-industrial">
                    <div className="status-indicator">
                        <div className="pulse-dot-green"></div>
                        <span>SYSTEM_ACTIVE: FIELD_RECORDS // DATA_SYNC_OK</span>
                    </div>
                </div>

                <div className="field-records-list">
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project, index) => (
                            <motion.article
                                key={project.id}
                                className="dossier-card"
                                layout
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                            >
                                <div className="dossier-header-strip">
                                    <div className="index-tag">REP-0{index + 1}</div>
                                    <div className="dossier-line" />
                                    <div className="category-pill">{project.category}</div>
                                </div>

                                <div className="dossier-main-content">
                                    <div className="dossier-visual">
                                        <img src={project.image} alt={project.imageAlt || project.title} />
                                        <div className="visual-scan" />
                                        <div className="dossier-frame-decor">
                                            <div className="d-corner tl" /><div className="d-corner br" />
                                        </div>
                                    </div>

                                    <div className="dossier-info">
                                        <h3 className="dossier-title">{project.title}</h3>

                                        <div className="dossier-specs-row">
                                            <div className="d-spec">
                                                <span className="d-label">DEPLOYED</span>
                                                <span className="d-value gold">{project.units}</span>
                                            </div>
                                            <div className="d-spec">
                                                <span className="d-label">TIMELINE</span>
                                                <span className="d-value">{project.duration}</span>
                                            </div>
                                            <div className="d-spec">
                                                <span className="d-label">COORDS</span>
                                                <span className="d-value">{project.location}</span>
                                            </div>
                                        </div>

                                        <div className="dossier-mission-grid">
                                            <div className="m-node">
                                                <div className="m-tag">OBJECTIVE_CHALLENGE</div>
                                                <p className="m-text">{project.challenge}</p>
                                            </div>
                                            <div className="m-node accent">
                                                <div className="m-tag">TACTICAL_RESOLUTION</div>
                                                <p className="m-text">{project.solution}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dossier-footer-accent" />
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </div>
            </section>

            {/* CLIENT TRUST BADGES */}
            <section className="client-trust-section">
                <div className="container">
                    <h2 className="trust-h2">DIPERCAYA OLEH KONTRAKTOR UTAMA <span className="text-gold">(MAIN CON)</span></h2>
                    <div className="logo-grid">
                        {clientLogos.map(logo => (
                            <div key={logo.id} className="logo-item">
                                <img src={logo.image} alt={logo.name} className="grayscale-logo" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA: PROJECT CONSULTATION */}
            <section className="project-cta-section">
                <div className="cta-bg-box">
                    <img
                        src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2000&auto=format&fit=crop"
                        alt="Consultation Background"
                        className="cta-bg-img"
                    />
                    <div className="cta-overlay"></div>
                </div>

                <div className="container cta-content">
                    <motion.div
                        className="cta-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="cta-h2">PUNYA TANTANGAN PROYEK SERUPA?</h2>
                        <p className="cta-p">
                            Diskusikan RAB (Rencana Anggaran Biaya) dan Metode Kerja dengan tim ahli kami. Konsultasi Gratis.
                        </p>
                        <a
                            href="https://wa.me/6282260280392?text=Halo%20Terratron Indonesia%20Heavy%20Equipment,%20saya%20ingin%20konsultasi%20hitung%20RAB%20untuk%20proyek..."
                            className="cta-btn-wa"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg className="wa-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.414 0 12.05c0 2.123.552 4.197 1.6 6.037L0 24l6.105-1.602a11.834 11.834 0 005.943 1.604h.005c6.634 0 12.05-5.414 12.05-12.051 0-3.21-1.248-6.228-3.514-8.495" />
                            </svg>
                            WA: HITUNG RAB PROYEK
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Projects

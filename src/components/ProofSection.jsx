import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { deploymentHistory } from '../data/fleetData'
import './ProofSection.css'

const ProofSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const activeProject = deploymentHistory[currentIndex]

    const nextProject = () => {
        setCurrentIndex((prev) => (prev + 1) % deploymentHistory.length)
    }

    const prevProject = () => {
        setCurrentIndex((prev) => (prev - 1 + deploymentHistory.length) % deploymentHistory.length)
    }

    return (
        <section className="tactical-theater-section">
            <div className="theater-ambient-glow" />

            <div className="theater-container">
                {/* TOP CONTROL BAR - HUD STYLE */}
                <div className="theater-hud-top">
                    <div className="hud-meta">
                        <span className="hud-label">ARCHIVE_ID:</span>
                        <span className="hud-value">TRN/OPS/00{currentIndex + 1}</span>
                    </div>
                    <div className="hud-title-center">
                        <h2 className="hud-section-title">REKAM JELAJAH LAPANGAN</h2>
                        <div className="hud-line-glow" />
                    </div>
                    <div className="hud-meta text-right">
                        <span className="hud-label">PROTOCOL:</span>
                        <span className="hud-value">ACTIVE_SECURE</span>
                    </div>
                </div>

                {/* THEATER CORE - CINEMATIC DISPLAY */}
                <div className="theater-stage">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeProject.id}
                            className="theater-view-block"
                            initial={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="theater-visual-frame">
                                <img src={activeProject.image} alt={activeProject.title} className="theater-main-img" />
                                <div className="theater-scanline" />
                                <div className="theater-vignette" />
                                <div className="theater-frame-edges">
                                    <div className="edge tl" /><div className="edge tr" />
                                    <div className="edge bl" /><div className="edge br" />
                                </div>
                                <div className="theater-category-badge">{activeProject.category}</div>
                            </div>

                            <div className="theater-content-hud">
                                <motion.div
                                    className="theater-text-block"
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3, duration: 0.6 }}
                                >
                                    <h3 className="theater-project-name">{activeProject.title}</h3>

                                    <div className="theater-mission-data">
                                        <div className="data-node">
                                            <div className="node-icon">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                    <path d="M12 2v20M2 12h20M12 2l4 4M12 22l-4-4M2 12l4-4M22 12l-4 4" />
                                                </svg>
                                            </div>
                                            <div className="node-info">
                                                <span className="node-label">TANTANGAN MEDAN</span>
                                                <p className="node-desc">{activeProject.challenge}</p>
                                            </div>
                                        </div>

                                        <div className="data-node">
                                            <div className="node-icon">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77z" />
                                                </svg>
                                            </div>
                                            <div className="node-info">
                                                <span className="node-label">SOLUSI TAKTIS</span>
                                                <p className="node-desc">{activeProject.solution}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="theater-metadata-grid">
                                        <div className="meta-item">
                                            <span className="m-label">STATUS</span>
                                            <span className="m-value gold">{activeProject.duration}</span>
                                        </div>
                                        <div className="meta-item">
                                            <span className="m-label">LOCATION</span>
                                            <span className="m-value">{activeProject.location}</span>
                                        </div>
                                        <div className="meta-item">
                                            <span className="m-label">DEPLOYED_UNIT</span>
                                            <span className="m-value">{activeProject.units}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* THEATER NAVIGATION - INTERACTIVE */}
                <div className="theater-controls">
                    <button className="theater-nav-btn prev" onClick={prevProject}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                        <span className="nav-tip">BACK</span>
                    </button>

                    <div className="theater-index-indicator">
                        {deploymentHistory.map((_, idx) => (
                            <div
                                key={idx}
                                className={`index-dot ${idx === currentIndex ? 'active' : ''}`}
                                onClick={() => setCurrentIndex(idx)}
                            />
                        ))}
                    </div>

                    <button className="theater-nav-btn next" onClick={nextProject}>
                        <span className="nav-tip">NEXT MISSION</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* GRID DECOR BACKGROUND */}
            <div className="theater-grid-bg" />
        </section>
    )
}

export default ProofSection

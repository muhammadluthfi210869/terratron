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
                {/* SECTION HEADLINE - WORLD CLASS */}
                <div className="proof-headline-block">
                    <div className="headline-eyebrow">
                        <span className="eyebrow-dot" />
                        <span className="eyebrow-text">MISSION LOGS & FIELD PROOF</span>
                    </div>
                    <h2 className="headline-title">
                        <span className="text-white">REKAM JEJAK</span>
                        <span className="text-gold">PROJECT</span>
                    </h2>
                    <div className="headline-divider">
                        <div className="divider-line" />
                        <div className="divider-diamond" />
                        <div className="divider-line" />
                    </div>
                </div>

                {/* TOP CONTROL BAR - HUD STYLE (META ONLY) */}
                <div className="theater-hud-top">
                    <div className="hud-meta">
                        <span className="hud-label">ARCHIVE_ID:</span>
                        <span className="hud-value">TRN/OPS/00{currentIndex + 1}</span>
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
                            <div className="theater-header">
                                <span className="mission-id">PROJECT_LOG_{activeProject.id}</span>
                                <div className="theater-category-pill">{activeProject.category}</div>
                            </div>

                            <div className="theater-main-content">
                                <div className="theater-visual-frame">
                                    <img src={activeProject.image} alt={activeProject.title} className="theater-main-img" />
                                    <div className="theater-location-tag">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                        {activeProject.location}
                                    </div>
                                    <div className="theater-frame-edges">
                                        <div className="edge tl" /><div className="edge tr" />
                                        <div className="edge bl" /><div className="edge br" />
                                    </div>
                                </div>

                                <div className="theater-info-pane">
                                    <h3 className="theater-project-title">{activeProject.title}</h3>
                                    
                                    <div className="tactical-brief-grid">
                                        <div className="brief-item">
                                            <div className="brief-header">
                                                <div className="brief-dot" />
                                                <span className="brief-label">CHALLENGE</span>
                                            </div>
                                            <p className="brief-text">{activeProject.challenge}</p>
                                        </div>
                                        <div className="brief-item">
                                            <div className="brief-header">
                                                <div className="brief-dot gold" />
                                                <span className="brief-label gold">SOLUTION</span>
                                            </div>
                                            <p className="brief-text">{activeProject.solution}</p>
                                        </div>
                                    </div>

                                    <div className="theater-meta-row">
                                        <div className="meta-capsule">
                                            <span className="capsule-label">TIME</span>
                                            <span className="capsule-value">{activeProject.duration}</span>
                                        </div>
                                        <div className="meta-capsule">
                                            <span className="capsule-label">UNITS</span>
                                            <span className="capsule-value">{activeProject.units}</span>
                                        </div>
                                    </div>
                                </div>
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

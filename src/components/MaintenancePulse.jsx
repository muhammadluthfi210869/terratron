import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import './MaintenancePulse.css'

const MaintenancePulse = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <section className="pulse-section" ref={ref}>
            <motion.div
                className="pulse-container"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <div className="pulse-content">
                    {/* EKG Visualization */}
                    <div className="ekg-wrapper">
                        <svg className="ekg-line" viewBox="0 0 200 40" preserveAspectRatio="none">
                            <path
                                className="ekg-path"
                                d="M0,20 L30,20 L35,20 L40,5 L45,35 L50,10 L55,25 L60,20 L90,20 L95,20 L100,5 L105,35 L110,10 L115,25 L120,20 L150,20 L155,20 L160,5 L165,35 L170,10 L175,25 L180,20 L200,20"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            />
                        </svg>
                        <div className="pulse-dot" />
                    </div>

                    {/* Text Content */}
                    <div className="pulse-info">
                        <span className="pulse-label">PREVENTIVE MAINTENANCE</span>
                        <span className="pulse-divider">|</span>
                        <span className="pulse-details">
                            <span className="pulse-date">SERVICE RUTIN 250 HM</span>
                            <span className="pulse-separator">•</span>
                            <span className="pulse-status">SERVICE CAR 24/7 READY</span>
                        </span>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default MaintenancePulse

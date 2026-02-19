import { motion } from 'framer-motion'
import { clientLogos } from '../data/fleetData'
import './TrustStrip.css'

const TrustStrip = () => {
    // Duplicate logos for seamless infinite scroll
    const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos]

    return (
        <section className="trust-strip">
            {/* Label */}
            <div className="trust-label-wrapper">
                <div className="trust-label">
                    <span className="label-line" />
                    <span className="label-text">DIPERCAYA OLEH</span>
                    <span className="label-line" />
                </div>
            </div>

            {/* Logo Scroll */}
            <div className="trust-scroll-container">
                <div className="trust-scroll">
                    {duplicatedLogos.map((logo, index) => (
                        <div key={`${logo.id}-${index}`} className="trust-logo-item">
                            <img
                                src={logo.image}
                                alt={logo.name}
                                className="trust-logo"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Fade edges */}
            <div className="trust-fade trust-fade-left" />
            <div className="trust-fade trust-fade-right" />
        </section>
    )
}

export default TrustStrip

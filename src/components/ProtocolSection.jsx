import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './ProtocolSection.css'

const ProtocolSection = () => {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

    const steps = [
        {
            num: '01',
            title: 'KONSULTASI & SURVEI',
            desc: 'Diskusikan kebutuhan alat dan akses jalan ke lokasi proyek. Kami pastikan unit yang dipilih sesuai dengan medan lapangan.',
            benefits: ['Konsultasi Spesifikasi', 'Survei Lokasi (Jika Perlu)'],
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                </svg>
            )
        },
        {
            num: '02',
            title: 'ADMINISTRASI CEPAT',
            desc: 'Validasi PO dan administrasi pengiriman. Penyiapan dokumen legalitas unit (SILO/SIA) dan data operator.',
            benefits: ['Invoice & Faktur Pajak', 'Dokumen Unit Lengkap'],
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
            )
        },
        {
            num: '03',
            title: 'MOBILISASI UNIT',
            desc: 'Pengiriman unit menggunakan Self-Loader/Lowbed milik sendiri untuk menjamin ketepatan waktu mobilisasi.',
            benefits: ['Pengiriman On-Time', 'Self-Loader Pribadi'],
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
            )
        }
    ]

    // Animation variants
    const headerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 30
            }
        }
    }

    const lineVariants = {
        hidden: { scaleY: 0 },
        visible: {
            scaleY: 1,
            transition: {
                duration: 1.2,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.3
            }
        }
    }

    const stepVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 28,
                delay: 0.5 + (i * 0.25)
            }
        })
    }

    const dotVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: (i) => ({
            scale: 1,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 400,
                damping: 20,
                delay: 0.4 + (i * 0.25)
            }
        })
    }

    return (
        <section className="protocol-section" ref={sectionRef}>
            <div className="protocol-container container">
                {/* Header */}
                <motion.div
                    className="protocol-header"
                    variants={headerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <h2 className="protocol-title">
                        <span className="title-text">CARA SEWA &</span>
                        <span className="title-accent">PROSES MOBILISASI</span>
                    </h2>
                    <p className="protocol-subtitle">Alur Kerja Profesional • Transparan • Cepat</p>
                    <div className="protocol-divider" />
                </motion.div>

                {/* Timeline */}
                <div className="timeline-wrapper">
                    {/* Vertical Line */}
                    <motion.div
                        className="timeline-line"
                        variants={lineVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    />

                    {/* Steps */}
                    <div className="timeline-steps">
                        {steps.map((step, index) => (
                            <div key={index} className="timeline-step">
                                {/* Timeline Dot */}
                                <motion.div
                                    className={`timeline-dot ${index === steps.length - 1 ? 'final' : ''}`}
                                    variants={dotVariants}
                                    custom={index}
                                    initial="hidden"
                                    animate={isInView ? "visible" : "hidden"}
                                >
                                    <span className="dot-inner" />
                                </motion.div>

                                {/* Step Card */}
                                <motion.div
                                    className="step-card"
                                    variants={stepVariants}
                                    custom={index}
                                    initial="hidden"
                                    animate={isInView ? "visible" : "hidden"}
                                >
                                    {/* Step Number */}
                                    <div className="step-number">
                                        <span>{step.num}</span>
                                    </div>

                                    {/* Step Content */}
                                    <div className="step-content">
                                        <div className="step-header">
                                            <div className="step-icon">{step.icon}</div>
                                            <h3 className="step-title">{step.title}</h3>
                                        </div>
                                        <p className="step-desc">{step.desc}</p>

                                        {/* Benefits */}
                                        <div className="step-benefits">
                                            {step.benefits.map((benefit, i) => (
                                                <span key={i} className="benefit-tag">
                                                    <svg className="benefit-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                    {benefit}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>

                    {/* Final Arrow */}
                    <motion.div
                        className="timeline-arrow"
                        initial={{ opacity: 0, y: -10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 5v14M19 12l-7 7-7-7" />
                        </svg>
                    </motion.div>
                </div>

                {/* CTA Button */}
                <motion.div
                    className="protocol-cta"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 1.8, duration: 0.6 }}
                >
                    <a
                        href="https://wa.me/6281234567890?text=Halo%20Pak,%20saya%20ingin%20sewa%20unit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-button"
                    >
                        <span className="cta-icon">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                            </svg>
                        </span>
                        <span className="cta-content">
                            <span className="cta-main">CEK KETERSEDIAAN UNIT</span>
                            <span className="cta-sub">Mulai proyek Anda hari ini</span>
                        </span>
                        <span className="cta-arrow">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </span>
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default ProtocolSection

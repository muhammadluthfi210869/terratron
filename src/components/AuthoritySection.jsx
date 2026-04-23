import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './AuthoritySection.css'

const AuthoritySection = () => {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-50px" })

    // ========================================
    // JAMINAN PERFORMA & KEAMANAN
    // Data kartu keunggulan - sesuai brief juragan
    // ========================================
    const guarantees = [
        {
            id: 1,
            metric: '2020',
            unit: 'UP',
            title: 'UNIT TAHUN MUDA',
            description: 'Dominasi unit tahun 2020 ke atas. Minim risiko breakdown, efisiensi BBM tinggi, dan performa mesin yang masih sangat bertenaga.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
            )
        },
        {
            id: 2,
            metric: '24',
            unit: 'JAM',
            title: 'GARANSI GANTI UNIT',
            description: 'Jika terjadi kerusakan mesin >24 jam, kami kirim unit pengganti instan. Kami menjamin deadline proyek Anda tidak terganggu.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                </svg>
            )
        },
        {
            id: 3,
            metric: '100',
            unit: '%',
            title: 'OPERATOR BERSERTIFIKAT (SIO)',
            description: 'Operator kami memiliki lisensi SIO/SILO resmi. Berpengalaman di berbagai medan berat, disiplin, dan mengutamakan K3.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                </svg>
            )
        }
    ]

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

    const cardVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 28,
                mass: 1.2
            }
        }
    }

    const bridgeVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.5
            }
        }
    }

    return (
        <section className="authority-section" ref={sectionRef} id="authority">
            <motion.div
                className="authority-header"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="header-eyebrow">
                    <span className="eyebrow-line" />
                    <span className="eyebrow-text">KUALITAS UNIT & OPERATOR</span>
                    <span className="eyebrow-line" />
                </div>
                <h2 className="header-title">
                    <span className="title-accent">STANDAR OPERASIONAL</span>
                    <span className="title-accent">Terratron Indonesia HEAVY EQUIPMENT</span>
                </h2>
            </motion.div>

            <motion.div
                className="advantage-deck"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {guarantees.map((item) => (
                    <motion.article
                        key={item.id}
                        className="advantage-card"
                        variants={cardVariants}
                    >
                        <div className="card-glow" />
                        <div className="card-inner">
                            <div className="card-icon">
                                {item.icon}
                            </div>
                            <div className="card-metric">
                                <span className="metric-value">{item.metric}</span>
                                <span className="metric-unit">{item.unit}</span>
                            </div>
                            <h3 className="card-title">{item.title}</h3>
                            <p className="card-description">{item.description}</p>
                            <div className="card-accent-line" />
                        </div>
                    </motion.article>
                ))}
            </motion.div>

            <motion.div
                className="authority-bridge"
                variants={bridgeVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <div className="bridge-content">
                    <div className="bridge-statement">
                        <span className="statement-quote">"</span>
                        <p className="statement-text">
                            Kami tidak sekadar menyewakan alat berat.
                            <span className="statement-highlight"> Kami menyewakan KEPASTIAN WAKTU.</span>
                            {' '}Karena bagi Anda, keterlambatan adalah kerugian.
                        </p>
                    </div>


                </div>

                <div className="bridge-decoration">
                    <div className="decoration-line left" />
                    <div className="decoration-diamond">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2l3 8h8l-6 5 2 9-7-5-7 5 2-9-6-5h8z" />
                        </svg>
                    </div>
                    <div className="decoration-line right" />
                </div>
            </motion.div>
        </section>
    )
}

export default AuthoritySection

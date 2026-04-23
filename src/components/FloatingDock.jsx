import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useVelocity } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import './FloatingDock.css'

const FloatingDock = ({ activePage }) => {
    const [isMorphed, setIsMorphed] = useState(false)
    const { scrollY } = useScroll()
    const scrollVelocity = useVelocity(scrollY)
    const [lastScrollY, setLastScrollY] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        const handleScroll = () => {
            const velocity = scrollVelocity.get()
            const currentScroll = window.scrollY

            if (velocity > 500 || (currentScroll > 300 && currentScroll > lastScrollY)) {
                setIsMorphed(true)
            }
            if (velocity < -200 || currentScroll < 100) {
                setIsMorphed(false)
            }

            setLastScrollY(currentScroll)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [scrollVelocity, lastScrollY])

    const handleNavigation = (id) => {
        const paths = {
            home: '/',
            armada: '/sewa-alat-berat',
            portfolio: '/proyek-kami',
            profile: '/profil-perusahaan',
            blog: '/pustaka-konstruksi'
        }
        navigate(paths[id] || '/')
    }

    const navItems = [
        { id: 'home', label: 'Home', isLogo: true },
        {
            id: 'armada', label: 'Fleet', icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="7" height="7" x="3" y="3" rx="1" /><rect width="7" height="7" x="14" y="3" rx="1" /><rect width="7" height="7" x="14" y="14" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" />
                </svg>
            )
        },
        {
            id: 'portfolio', label: 'Projects', icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2H2v10c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4l-2-2Z" /><path d="M12 10v4" /><path d="M10 12h4" />
                </svg>
            )
        },
        {
            id: 'profile', label: 'About', icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" />
                </svg>
            )
        },
        {
            id: 'blog', label: 'Archive', icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
            )
        },
    ]

    return (
        <div className={`floating-dock-wrapper ${isMorphed ? 'orb-state' : 'dock-state'}`}>
            <motion.nav
                className="tactical-capsule"
                layout
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
                <AnimatePresence mode="wait">
                    {!isMorphed ? (
                        <motion.div
                            key="full-dock"
                            className="dock-inner"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                        >
                            {navItems.map((item) => (
                                <motion.div
                                    key={item.id}
                                    className={`dock-item ${item.isLogo ? 'logo-item-lux' : ''} ${activePage === item.id ? 'active' : ''}`}
                                    onClick={() => handleNavigation(item.id)}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.94 }}
                                >
                                    {activePage === item.id && (
                                        <motion.div
                                            layoutId="active-pill"
                                            className="active-indicator-pill"
                                            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <div className="dock-icon-wrapper">
                                        {item.isLogo ? (
                                            <div className="tactical-logo">
                                                <img src="/asset/logo_brand (1).webp" alt="Terratron Logo" className="logo-img-lux" />
                                            </div>
                                        ) : (
                                            item.icon
                                        )}
                                    </div>
                                    <span className="dock-label-lux">{item.label}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="signal-orb"
                            className="signal-orb"
                            initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            onClick={() => setIsMorphed(false)}
                            whileHover={{ scale: 1.1 }}
                        >
                            <div className="orb-scanner"></div>
                            <div className="orb-core">
                                <img src="/asset/logo_brand (1).webp" alt="Terratron Logo" className="orb-logo-img" />
                            </div>
                            <svg className="orb-progress" viewBox="0 0 40 40">
                                <motion.circle
                                    cx="20"
                                    cy="20"
                                    r="18"
                                    stroke="var(--gold-primary)"
                                    strokeWidth="2"
                                    fill="transparent"
                                    strokeDasharray="100 100"
                                    animate={{ strokeDashoffset: [100, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                />
                            </svg>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>

            {/* Ambient Background Glow */}
            <div className="dock-ambient-glow"></div>
        </div>
    )
}

export default FloatingDock

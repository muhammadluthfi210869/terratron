import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { id: 'home', label: 'BERANDA', path: '/' },
        { id: 'armada', label: 'ARMADA', path: '/sewa-alat-berat' },
        { id: 'portfolio', label: 'PROYEK', path: '/proyek-kami' },
        { id: 'profile', label: 'TENTANG', path: '/profil-perusahaan' },
        { id: 'blog', label: 'PUSTAKA', path: '/pustaka-konstruksi' },
    ]

    const handleNavClick = (path) => {
        navigate(path)
    }

    return (
        <motion.nav
            className={`industrial-horizon ${scrolled ? 'horizon-condensed' : ''}`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
            {/* === DESKTOP LAYOUT (The Industrial Horizon) === */}
            <div className="horizon-container desktop-only">
                {/* Brand Identity Section */}
                <div className="horizon-brand" onClick={() => navigate('/')}>
                    <div className="brand-logo-frame">
                        <img src="/asset/logo_brand.jpeg" alt="Terratron" className="brand-logo-img" />
                    </div>
                    <div className="brand-typography">
                        <h1 className="brand-name">TERRATRON</h1>
                        <span className="brand-tagline">HEAVY EQUIPMENT CIAMIS - TASIKMALAYA</span>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="horizon-nav-desktop">
                    <ul className="horizon-links">
                        {navItems.map((item) => (
                            <li
                                key={item.id}
                                className={`horizon-link-item ${location.pathname === item.path ? 'active' : ''}`}
                                onClick={() => handleNavClick(item.path)}
                            >
                                <span className="link-text">{item.label}</span>
                                {location.pathname === item.path && (
                                    <motion.div
                                        layoutId="active-indicator"
                                        className="active-indicator"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <div className="link-hover-effect" />
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Authority Actions */}
                <div className="horizon-actions">
                    <a
                        href="https://wa.me/6282260280392"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="horizon-cta"
                    >
                        <span className="cta-content">HUBUNGI KAMI</span>
                        <div className="cta-shine" />
                    </a>
                </div>
            </div>

            {/* === MOBILE LAYOUT (The Satellite Stream) === */}
            <div className="satellite-mobile-unit mobile-only">
                {/* Level 1: Command Deck (Brand + Primary Action) */}
                <div className="satellite-top-deck">
                    <div className="satellite-brand" onClick={() => navigate('/')}>
                        <img src="/asset/logo_brand.jpeg" alt="T" className="satellite-logo" />
                        <span className="satellite-brand-name">TERRATRON</span>
                    </div>
                    <a
                        href="https://wa.me/6282260280392"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="satellite-cta-compact"
                    >
                        KONSULTASI
                    </a>
                </div>

                {/* Level 2: Nav Stream (Horizontal Scroll) */}
                <div className="satellite-stream-deck">
                    <div className="stream-fade-edge-left"></div>
                    <div className="stream-track">
                        {navItems.map((item) => (
                            <div
                                key={item.id}
                                className={`stream-node ${location.pathname === item.path ? 'active' : ''}`}
                                onClick={() => handleNavClick(item.path)}
                            >
                                <span className="stream-label">{item.label}</span>
                                {location.pathname === item.path && (
                                    <motion.div
                                        layoutId="stream-active-line"
                                        className="stream-active-line"
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="stream-fade-edge"></div>
                </div>
            </div>

            {/* Visual Bottom Edge */}
            <div className="horizon-edge" />
        </motion.nav>
    )
}

export default Navbar

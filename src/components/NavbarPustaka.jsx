import { motion } from 'framer-motion'
import './NavbarPustaka.css'

const NavbarPustaka = ({ onBack, activeCategory, onCategoryChange }) => {
    const categories = ['SEMUA', 'PROBLEM SOLVING', 'COST ESTIMATION', 'LOCAL TERRAIN']

    return (
        <motion.nav
            className="navbar-pustaka"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        >
            <div className="nav-pustaka-left">
                <button className="pustaka-back-btn" onClick={onBack}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    <span>KEMBALI</span>
                </button>
                <div className="pustaka-divider" />
                <div className="pustaka-brand">
                    <span className="brand-dot" />
                    <span className="brand-name">PUSTAKA ALAT BERAT</span>
                    <span className="brand-version">v2.0</span>
                </div>
            </div>

            <div className="nav-pustaka-center">
                <div className="pustaka-categories">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`cat-tab ${activeCategory === cat ? 'active' : ''}`}
                            onClick={() => onCategoryChange(cat)}
                        >
                            {cat}
                            {activeCategory === cat && (
                                <motion.div
                                    layoutId="cat-active"
                                    className="cat-active-indicator"
                                />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            <div className="nav-pustaka-right">
                <div className="pustaka-search-trigger">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                    </svg>
                    <span>CARI ARSIP</span>
                </div>
            </div>
        </motion.nav>
    )
}

export default NavbarPustaka

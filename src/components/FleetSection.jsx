import { useState, useRef, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import './FleetSection.css'

const FleetSection = ({ units, onSelectUnit, onViewAllArmada }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const carouselRef = useRef(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const isScrollingRef = useRef(false)

  // Count available units
  const availableCount = units.filter(u => u.status === 'available').length
  const totalCount = units.length

  // Handle scroll to update active index
  const handleScroll = useCallback(() => {
    if (!carouselRef.current || isScrollingRef.current) return

    const container = carouselRef.current
    const cards = container.querySelectorAll('.titan-card')
    const containerRect = container.getBoundingClientRect()
    const containerCenter = containerRect.left + containerRect.width / 2

    let closestIndex = 0
    let closestDistance = Infinity

    cards.forEach((card, index) => {
      const cardRect = card.getBoundingClientRect()
      const cardCenter = cardRect.left + cardRect.width / 2
      const distance = Math.abs(containerCenter - cardCenter)

      if (distance < closestDistance) {
        closestDistance = distance
        closestIndex = index
      }
    })

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex)
    }
  }, [activeIndex])

  // Scroll to specific card with smooth animation
  const scrollToCard = useCallback((index) => {
    if (!carouselRef.current) return
    if (index < 0 || index >= units.length) return

    isScrollingRef.current = true
    setActiveIndex(index)

    const container = carouselRef.current
    const cards = container.querySelectorAll('.titan-card')
    if (!cards[index]) return

    const containerWidth = container.offsetWidth
    const card = cards[index]
    const cardWidth = card.offsetWidth

    let targetScroll = card.offsetLeft - (containerWidth - cardWidth) / 2
    targetScroll = Math.max(0, Math.min(targetScroll, container.scrollWidth - containerWidth))

    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    })

    setTimeout(() => {
      isScrollingRef.current = false
    }, 500)
  }, [units.length])

  // Get status config
  const getStatusConfig = (status) => {
    switch (status) {
      case 'available':
        return {
          label: 'TERSEDIA',
          className: 'status-available'
        }
      case 'rented':
        return {
          label: 'DEPLOYED',
          className: 'status-rented'
        }
      case 'maintenance':
        return {
          label: 'SERVICE',
          className: 'status-maintenance'
        }
      default:
        return { label: status, className: '' }
    }
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  }

  return (
    <section className="titan-fleet-section" id="armada" ref={sectionRef}>
      <div className="titan-ambient" />

      <motion.header
        className="titan-header"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="titan-eyebrow" variants={itemVariants}>
          <span className="eyebrow-line" />
          <span className="eyebrow-text">KATALOG UNIT & HARGA</span>
          <span className="eyebrow-line" />
        </motion.div>

        <motion.h2 className="titan-title" variants={itemVariants}>
          <span className="title-main">11/11 UNIT</span>
          <span className="title-accent">EXCAVATOR & ALAT BERAT</span>
        </motion.h2>


      </motion.header>

      <div className="titan-theater">
        <div
          className="titan-track hide-scrollbar"
          ref={carouselRef}
          onScroll={handleScroll}
        >
          {units.map((unit, index) => {
            const statusConfig = getStatusConfig(unit.status)
            const isActive = index === activeIndex

            return (
              <article
                key={unit.id}
                className={`titan-card ${isActive ? 'active' : ''}`}
                onClick={() => onSelectUnit(unit)}
              >
                <div className={`titan-status ${statusConfig.className}`}>
                  <span className="status-dot" />
                  <span className="status-text">{statusConfig.label}</span>
                </div>

                <div className="titan-image-container">
                  <div className="image-spotlight-effect" />
                  <img
                    src={unit.image}
                    alt={unit.seoAlt || `Sewa Excavator ${unit.model}`}
                    className="titan-image"
                    loading="lazy"
                  />
                  <div className="image-gradient-overlay" />
                  <div className="weight-badge">
                    <span className="weight-value">{unit.specs?.weight || '20 Ton'}</span>
                  </div>
                </div>

                <div className="titan-separator" />

                <div className="titan-info">
                  <h3 className="titan-model">{unit.model}</h3>
                  <div className="titan-specs">
                    <span className="spec-chip">
                      <svg className="spec-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M17 21H7a2 2 0 0 1-2-1.85L3 7h18l-2 12.15A2 2 0 0 1 17 21z" />
                        <path d="M8 7V5a4 4 0 0 1 8 0v2" />
                      </svg>
                      {unit.specs?.bucket || '0.9 m³'}
                    </span>
                    <span className="spec-divider">•</span>
                    <span className="spec-chip">
                      <svg className="spec-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M3 22h12M4 9v13M14 22V9M14 15h3a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3" />
                        <path d="M9 9h2" />
                      </svg>
                      {unit.specs?.fuelConsumption || '18 L/jam'}
                    </span>
                    <span className="spec-divider">•</span>
                    <span className="spec-chip">
                      <svg className="spec-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M18 8L22 12L18 16M6 8L2 12L6 16M2 12H22" />
                      </svg>
                      {unit.specs?.reach || 'Standard'}
                    </span>
                  </div>
                </div>

                <div className="titan-cta-zone">
                  <span className="cta-text">CEK HARGA & SPEK</span>
                  <svg className="cta-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
                <div className="titan-rim-glow" />
              </article>
            )
          })}
        </div>

        <div className="titan-fade titan-fade-left" />
        <div className="titan-fade titan-fade-right" />
      </div>

      <div className="titan-navigation">
        <div className="nav-dots">
          {units.map((_, index) => (
            <button
              key={index}
              className={`nav-dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => scrollToCard(index)}
              aria-label={`Go to unit ${index + 1}`}
            />
          ))}
        </div>

        <div className="swipe-hint">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          <span>SWIPE</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>

      <div className="titan-cta-section">
        <Link to="/sewa-alat-berat" className="titan-btn titan-btn-primary">
          <div className="btn-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="7" height="7" rx="1.5" />
              <rect x="14" y="3" width="7" height="7" rx="1.5" />
              <rect x="3" y="14" width="7" height="7" rx="1.5" />
              <rect x="14" y="14" width="7" height="7" rx="1.5" />
            </svg>
          </div>
          <div className="btn-content">
            <span className="btn-title">CEK FULL ARMADA</span>
            <span className="btn-subtitle">{totalCount} Unit Tersedia</span>
          </div>
          <div className="btn-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </Link>

        <button className="titan-btn titan-btn-secondary">
          <div className="btn-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </div>
          <div className="btn-content">
            <span className="btn-title">DOWNLOAD PRICELIST</span>
            <span className="btn-subtitle">Katalog PDF</span>
          </div>
          <div className="btn-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </button>
      </div>
    </section>
  )
}

export default FleetSection

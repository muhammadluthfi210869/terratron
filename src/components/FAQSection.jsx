import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { faqData } from '../data/fleetData'
import './FAQSection.css'

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={`faq-item ${isOpen ? 'open' : ''}`}>
            <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
                <span>{question}</span>
                <span className="faq-icon">
                    {isOpen ? (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    ) : (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    )}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="faq-answer-wrapper"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <div className="faq-answer">
                            <p>{answer}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

const FAQSection = () => {
    return (
        <section className="faq-section container">
            <div className="section-header">
                <h2 className="section-h2">KONSULTASI TEKNIS & ADMINISTRASI (FAQ)</h2>
                <p className="section-sub">Solusi cepat untuk keraguan operasional dan legalitas proyek Anda.</p>
            </div>

            <div className="faq-list">
                {faqData.map((item, index) => (
                    <FAQItem key={index} {...item} />
                ))}
            </div>

            <div className="faq-seo-footer">
                <p>Melayani penyewaan alat berat untuk area: <strong>Tasikmalaya, Ciamis, Banjar, Pangandaran, dan Seluruh Priangan Timur.</strong></p>
            </div>
        </section>
    )
}

export default FAQSection

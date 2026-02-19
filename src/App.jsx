import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import HeroSection from './components/HeroSection'
import AuthoritySection from './components/AuthoritySection'
import FleetSection from './components/FleetSection'
import ProtocolSection from './components/ProtocolSection'
import MaintenancePulse from './components/MaintenancePulse'
import GroundingSection from './components/GroundingSection'
import UnitDetail from './components/UnitDetail'
import WhatsAppCTA from './components/WhatsAppCTA'
import FloatingDock from './components/FloatingDock'
import ProofSection from './components/ProofSection'
import FAQSection from './components/FAQSection'
import FullArmada from './pages/FullArmada'
import Projects from './pages/Projects'
import CompanyProfile from './pages/CompanyProfile'
import Pustaka from './pages/Pustaka'
import { fleetData, faqData } from './data/fleetData'
import SchemaOrg from './components/SchemaOrg'

const ScrollToTop = () => {
    const { pathname } = useLocation()
    useState(() => {
        window.scrollTo(0, 0)
    }, [pathname])
    return null
}

function App() {
    const [selectedUnit, setSelectedUnit] = useState(null)
    const location = useLocation()

    // Determine current page ID for FloatingDock active state
    const getPageId = (path) => {
        if (path === '/') return 'home'
        if (path === '/sewa-alat-berat') return 'armada'
        if (path === '/profil-perusahaan') return 'profile'
        if (path === '/proyek-kami') return 'portfolio'
        if (path.startsWith('/pustaka-konstruksi')) return 'blog'
        return 'home'
    }

    // Schema.org Generators
    const businessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Terratron Indonesia Heavy Equipment",
        "image": "https://terratron.id/asset/hero_background_mobile2.png",
        "@id": "https://terratron.id/#localbusiness",
        "url": "https://terratron.id",
        "telephone": "+6282260280392",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Dsn. Cishung RT.04/RW.08, Bojongmengger, Kec. Cijeungjing",
            "addressLocality": "Kabupaten Ciamis",
            "addressRegion": "Jawa Barat",
            "postalCode": "46271",
            "addressCountry": "ID"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": -7.4079,
            "longitude": 108.4834
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "08:00",
            "closes": "21:00"
        },
        "areaServed": ["Ciamis", "Tasikmalaya", "Banjar", "Cikarang", "Karawang", "Bekasi", "Bogor", "Jawa Barat"]
    }

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    }

    return (
        <div className="app">
            <ScrollToTop />
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Helmet>
                                <title>Sewa Excavator Bekasi & Alat Berat Termurah (Unit 2020+) - Terratron Indonesia</title>
                                <meta name="description" content="Terratron Indonesia Heavy Equipment: Pusat sewa excavator PC200, PC75, Dozer, dan Vibro di Bekasi & Cikarang. Unit terbaru, operator SIO, mekanik standby 24 jam. Cek harga promo!" />
                            </Helmet>
                            <SchemaOrg schema={businessSchema} />
                            <SchemaOrg schema={faqSchema} />
                            <HeroSection />
                            <FleetSection
                                units={fleetData}
                                onSelectUnit={setSelectedUnit}
                                onViewAllArmada={() => { }} // Navigation handled by Router
                            />
                            <AuthoritySection onViewProfile={() => { }} />
                            <MaintenancePulse />
                            <ProofSection />
                            <ProtocolSection />
                            <FAQSection />
                            <GroundingSection />
                            <WhatsAppCTA />
                        </motion.div>
                    } />

                    <Route path="/sewa-alat-berat" element={
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <FullArmada
                                units={fleetData}
                                onBack={() => { }}
                                onSelectUnit={setSelectedUnit}
                            />
                        </motion.div>
                    } />

                    <Route path="/sewa-alat-berat/:slug" element={
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <FullArmada
                                units={fleetData}
                                onBack={() => { }}
                                onSelectUnit={setSelectedUnit}
                            />
                        </motion.div>
                    } />

                    <Route path="/sewa-alat-berat/lokasi/:area" element={
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <FullArmada
                                units={fleetData}
                                onBack={() => { }}
                                onSelectUnit={setSelectedUnit}
                            />
                        </motion.div>
                    } />

                    <Route path="/profil-perusahaan" element={
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Helmet>
                                <title>Tentang Kami | PT Terratron Indonesia Heavy Equipment</title>
                                <meta name="description" content="Profil perusahaan Terratron Indonesia Heavy Equipment. Berpengalaman lebih dari 10 tahun dalam penyediaan alat berat konstruksi dan pertambangan." />
                            </Helmet>
                            <CompanyProfile onBack={() => { }} />
                        </motion.div>
                    } />

                    <Route path="/proyek-kami" element={
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Helmet>
                                <title>Jasa Cut and Fill & Pematangan Lahan Karawang - Bekasi - Proyek Kami</title>
                                <meta name="description" content="Portofolio pengerjaan cut and fill, galian basement, dan pembersihan lahan di Kawasan Industri KIIC, Jababeka, dan Delta Silicon." />
                            </Helmet>
                            <Projects />
                        </motion.div>
                    } />

                    <Route path="/pustaka-konstruksi" element={
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Helmet>
                                <title>Pustaka Alat Berat & Strategi Konstruksi | Terratron Indonesia Heavy</title>
                                <meta name="description" content="Edukasi teknis alat berat, estimasi biaya cut & fill, dan strategi operasional di medan berat oleh para ahli Terratron Indonesia Heavy." />
                            </Helmet>
                            <Pustaka onBack={() => { }} />
                        </motion.div>
                    } />

                    <Route path="/pustaka-konstruksi/:slug" element={
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Pustaka onBack={() => { }} />
                        </motion.div>
                    } />
                </Routes>
            </AnimatePresence>

            <FloatingDock
                activePage={getPageId(location.pathname)}
            />

            <AnimatePresence>
                {selectedUnit && (
                    <UnitDetail
                        unit={selectedUnit}
                        onClose={() => setSelectedUnit(null)}
                    />
                )}
            </AnimatePresence>
        </div>
    )
}

export default App

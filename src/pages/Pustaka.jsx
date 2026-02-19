import { useState, useMemo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useParams, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import SchemaOrg from '../components/SchemaOrg'
import NavbarPustaka from '../components/NavbarPustaka'
import { articlesData } from '../data/articlesData'
import './Pustaka.css'

const Pustaka = ({ onBack }) => {
    const { slug } = useParams()
    const navigate = useNavigate()
    const [activeCategory, setActiveCategory] = useState('SEMUA')
    const [isEstablishingLink, setIsEstablishingLink] = useState(false)

    const articles = useMemo(() => articlesData, [])

    const selectedArticle = useMemo(() => {
        return articles.find(a => a.slug === slug) || null
    }, [slug, articles])

    const selectedArticleSchema = useMemo(() => {
        if (!selectedArticle) return null;

        const articleSchema = {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": selectedArticle.title,
            "description": selectedArticle.meta,
            "image": [`https://terratron.id${selectedArticle.img}`],
            "datePublished": "2026-02-16T08:00:00+07:00",
            "author": {
                "@type": "Organization",
                "name": `Terratron Indonesia Heavy ${selectedArticle.author}`,
                "url": "https://terratron.id/profil-perusahaan"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Terratron Indonesia Heavy Equipment",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://terratron.id/asset/logo/Terratron Indonesia-logo.png"
                }
            }
        };

        const breadcrumbSchema = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://terratron.id"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Pustaka Konstruksi",
                    "item": "https://terratron.id/pustaka-konstruksi"
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": selectedArticle.title,
                    "item": `https://terratron.id/pustaka-konstruksi/${selectedArticle.slug}`
                }
            ]
        };

        return [articleSchema, breadcrumbSchema];
    }, [selectedArticle])

    const relatedArticles = useMemo(() => {
        if (!selectedArticle) return [];
        return articles
            .filter(a => a.id !== selectedArticle.id)
            .sort(() => 0.5 - Math.random())
            .slice(0, 3);
    }, [selectedArticle, articles])

    const filteredArticles = useMemo(() => {
        if (activeCategory === 'SEMUA') return articles
        return articles.filter(a => a.category === activeCategory)
    }, [activeCategory, articles])

    const handleSelectArticle = (art) => {
        setIsEstablishingLink(true)
        setTimeout(() => {
            navigate(`/pustaka-konstruksi/${art.slug}`)
            setIsEstablishingLink(false)
        }, 600)
    }

    const handleCloseDossier = () => {
        navigate('/pustaka-konstruksi')
    }

    const featuredArticle = articles[0]

    return (
        <div className="pustaka-page">
            <Helmet>
                {selectedArticle ? (
                    <>
                        <title>{selectedArticle.title} | Terratron Indonesia Pustaka</title>
                        <meta name="description" content={selectedArticle.meta} />
                        <link rel="canonical" href={`https://terratron.id/pustaka-konstruksi/${selectedArticle.slug}`} />

                        {/* Open Graph / Facebook */}
                        <meta property="og:type" content="article" />
                        <meta property="og:url" content={`https://terratron.id/pustaka-konstruksi/${selectedArticle.slug}`} />
                        <meta property="og:title" content={selectedArticle.title} />
                        <meta property="og:description" content={selectedArticle.meta} />
                        <meta property="og:image" content={`https://terratron.id${selectedArticle.img}`} />

                        {/* Twitter */}
                        <meta property="twitter:card" content="summary_large_image" />
                        <meta property="twitter:url" content={`https://terratron.id/pustaka-konstruksi/${selectedArticle.slug}`} />
                        <meta property="twitter:title" content={selectedArticle.title} />
                        <meta property="twitter:description" content={selectedArticle.meta} />
                        <meta property="twitter:image" content={`https://terratron.id${selectedArticle.img}`} />
                    </>
                ) : (
                    <>
                        <title>Pustaka Alat Berat & Strategi Konstruksi | Terratron Indonesia Heavy</title>
                        <meta name="description" content="Kumpulan panduan teknis operasional alat berat, estimasi biaya, dan solusi manajemen proyek konstruksi." />
                        <link rel="canonical" href="https://terratron.id/pustaka-konstruksi" />

                        <meta property="og:type" content="website" />
                        <meta property="og:url" content="https://terratron.id/pustaka-konstruksi" />
                        <meta property="og:title" content="Pustaka Alat Berat & Strategi Konstruksi | Terratron Indonesia Heavy" />
                        <meta property="og:description" content="Kumpulan panduan teknis operasional alat berat, estimasi biaya, dan solusi manajemen proyek konstruksi." />
                        <meta property="og:image" content="https://terratron.id/asset/logo/Terratron Indonesia-logo.png" />
                    </>
                )}
            </Helmet>

            <SchemaOrg schema={selectedArticleSchema} />

            <NavbarPustaka
                onBack={onBack}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
            />

            <main className="pustaka-content">
                {selectedArticle ? (
                    <motion.article
                        className="dedicated-article-view"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="article-path-nav">
                            <button onClick={handleCloseDossier} className="back-to-archive">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ marginRight: '10px' }}>
                                    <path d="M19 12H5M12 19l-7-7 7-7" />
                                </svg>
                                KEMBALI KE ARSIP PUSTAKA
                            </button>
                        </div>

                        <header className="article-dedicated-header">
                            <div className="article-badge-line">
                                <span className="cat-badge">{selectedArticle.category}</span>
                                <span className="ref-id">INTEL_REF: {selectedArticle.id}</span>
                            </div>
                            <h1>{selectedArticle.title}</h1>
                            <div className="article-main-meta">
                                <span>PUBLISHED: {selectedArticle.date}</span>
                                <span className="meta-sep">//</span>
                                <span>AUTHOR: {selectedArticle.author}</span>
                                <span className="meta-sep">//</span>
                                <span>EST. READ: {selectedArticle.readTime}</span>
                            </div>
                            <div className="article-hero-img">
                                <img src={selectedArticle.img} alt={selectedArticle.title} />
                                <div className="img-tech-overlay" />
                            </div>
                        </header>

                        <div className="article-rich-content" dangerouslySetInnerHTML={{ __html: selectedArticle.content }} />

                        <footer className="article-dedicated-footer">
                            <section className="related-archives-section">
                                <h4 className="related-title">MISI SELANJUTNYA // ANALISA TERKAIT</h4>
                                <div className="related-grid-small">
                                    {relatedArticles.map(rel => (
                                        <div key={rel.id} className="related-item-card" onClick={() => handleSelectArticle(rel)}>
                                            <div className="rel-img">
                                                <img src={rel.img} alt={rel.title} />
                                                <div className="rel-overlay-scan" />
                                            </div>
                                            <div className="rel-info">
                                                <span className="rel-cat">{rel.category}</span>
                                                <h5>{rel.title}</h5>
                                                <span className="rel-read-time">{rel.readTime}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <div className="cta-box-premium">
                                <h3>Butuh Konsultasi Teknis Terkait Proyek Anda?</h3>
                                <p>Tim ahli Terratron Indonesia Heavy Equipment siap membantu menghitung estimasi kebutuhan alat dan biaya proyek secara akurat.</p>
                                <div className="cta-actions">
                                    <a href={`https://wa.me/6281211666113?text=Halo%20Terratron Indonesia,%20saya%20tertarik%20konsultasi%20mengenai%20${encodeURIComponent(selectedArticle.title)}`} className="cta-btn gold">HUBUNGI SPESIALIS (WA)</a>
                                    <button onClick={handleCloseDossier} className="cta-btn outline">LIHAT ARTIKEL LAINNYA</button>
                                </div>
                            </div>
                        </footer>
                    </motion.article>
                ) : (
                    <>
                        <motion.section className="pustaka-hero" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                            <div className="intel-hero-layout" onClick={() => handleSelectArticle(featuredArticle)}>
                                <div className="intel-hero-visual">
                                    <img src={featuredArticle.img} alt={featuredArticle.title} />
                                    <div className="intel-overlay-grid" />
                                    <div className="scan-line-hero" />
                                    <div className="hero-coords">LAT: -6.2088 // LONG: 106.8456</div>
                                </div>
                                <div className="intel-hero-data">
                                    <div className="intel-header">
                                        <span className="intel-id">REF: {featuredArticle.id}</span>
                                        <span className="intel-status">CLASSIFIED: OPEN</span>
                                    </div>
                                    <h1 className="intel-title">{featuredArticle.title}</h1>
                                    <div className="intel-meta-grid">
                                        <div className="meta-cell"><label>DATE</label><span>{featuredArticle.date}</span></div>
                                        <div className="meta-cell"><label>CATEGORY</label><span>{featuredArticle.category}</span></div>
                                        <div className="meta-cell"><label>READ TIME</label><span>{featuredArticle.readTime}</span></div>
                                        <div className="meta-cell"><label>CLEARANCE</label><span className="clearance-badge">{featuredArticle.clearance}</span></div>
                                    </div>
                                    <p className="intel-excerpt">{featuredArticle.meta}</p>
                                    <div className="intel-action">
                                        <button className="access-btn">ACCESS INTELLIGENCE</button>
                                    </div>
                                </div>
                            </div>
                        </motion.section>

                        <section className="pustaka-grid">
                            <div className="grid-header">
                                <h2 className="grid-title">Terratron Indonesia ARCHIVE // {activeCategory}</h2>
                                <div className="record-count">REC: {filteredArticles.length}</div>
                            </div>
                            <div className="intelligence-feed-grid">
                                <AnimatePresence mode="popLayout">
                                    {filteredArticles.slice(1).map((art) => (
                                        <motion.article
                                            key={art.id}
                                            className="intel-horizontal-card"
                                            layout
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            onClick={() => handleSelectArticle(art)}
                                        >
                                            <div className="card-media-side">
                                                <img src={art.img} alt={art.title} loading="lazy" />
                                                <div className="media-scanline" />
                                                <div className="cat-tag-mini">{art.category}</div>
                                            </div>
                                            <div className="card-data-side">
                                                <div className="data-header">
                                                    <span className="ref-code">ID_{art.id}</span>
                                                    <div className="status-dot"></div>
                                                </div>
                                                <h3 className="data-title">{art.title}</h3>
                                                <p className="data-excerpt">{art.meta}</p>
                                                <div className="data-footer">
                                                    <div className="meta-bit">
                                                        <span className="icon">
                                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                                                <line x1="16" y1="2" x2="16" y2="6" />
                                                                <line x1="8" y1="2" x2="8" y2="6" />
                                                                <line x1="3" y1="10" x2="21" y2="10" />
                                                            </svg>
                                                        </span> {art.date}
                                                    </div>
                                                    <div className="meta-item">
                                                        <span className="icon">
                                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                                <circle cx="12" cy="12" r="10" />
                                                                <polyline points="12 6 12 12 16 14" />
                                                            </svg>
                                                        </span> {art.readTime}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-trim-corner" />
                                        </motion.article>
                                    ))}
                                </AnimatePresence>
                            </div>
                        </section>
                    </>
                )}
            </main>

            <AnimatePresence>
                {isEstablishingLink && (
                    <motion.div className="connection-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <div className="connection-loader"><span>ESTABLISHING SECURE ENCRYPTION...</span></div>
                    </motion.div>
                )}
            </AnimatePresence>


        </div>
    )
}

export default Pustaka

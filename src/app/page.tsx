"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Star, 
  CheckCircle2, 
  Leaf, 
  FlaskConical, 
  Award, 
  ShieldCheck,
  ChevronDown,
  ShoppingCart,
  Tv,
  BellRing,
  Smartphone,
  PhoneCall,
  Menu,
  Search,
  ArrowRight
} from "lucide-react";
import styles from "./page.module.css";

export default function ProductPage() {
  const [format, setFormat] = useState("standard");
  const [duration, setDuration] = useState("12 mois");
  const [purchaseType, setPurchaseType] = useState("abonnement");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videoList = [
    "/videos/0509_compressed.m4v",
    "/videos/0218_copy_compressed.m4v",
    "/videos/0314_compressed.m4v",
    "/videos/0218_1_compressed.m4v"
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div style={{ backgroundColor: "#ffffff", color: "#1a1a1a", minHeight: "100vh", fontFamily: "sans-serif" }}>
      
      {/* Top Banner - Marquee */}
      <div className={styles.announcementBar}>
        <div className={styles.marqueeContent}>
          📺 Pour célébrer notre passage à la TV : 1 mois offert • Nos stocks sont partis plus vite que prévu 🙏 Livraison sous 45 jours • Précommandez maintenant pour garantir votre place
        </div>
      </div>

      {/* Header (Exact structure as initial) */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.leftNav}>
            <button className={styles.iconBtn}>
              <Menu size={24} />
            </button>
          </div>

          <a href="#" className={styles.logo}>
            <img src="/logo.png" alt="Pillqare Logo" style={{ height: "50px", width: "auto" }} />
          </a>

          <div className={styles.rightNav}>
            <div className={styles.flagIcon}>
              <div className={styles.flagBlue} />
              <div className={styles.flagWhite} />
              <div className={styles.flagRed} />
            </div>
            <button className={styles.iconBtn}>
              <Search size={22} />
            </button>
            <button className={styles.iconBtn}>
              <ShoppingCart size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Product Section */}
      <section className={`${styles.container} ${styles.productSection}`}>
        {/* Left: Images */}
        <div className={styles.imageGallery}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.mainImagePlaceholder}
            style={{ position: "relative" }}
          >
            <img 
              src="/c6677736-fff9-4078-a76f-30ab9ab01e68.png" 
              alt="Pillqare Product" 
              style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "0" }} 
            />
            <div 
              style={{ 
                position: "absolute", 
                top: "20px", 
                left: "20px", 
                backgroundColor: "#ef4444", 
                color: "white", 
                padding: "4px 10px", 
                borderRadius: "0", 
                fontSize: "0.85rem", 
                fontWeight: "700", 
                boxShadow: "0 4px 12px rgba(239, 68, 68, 0.3)",
                zIndex: 10
              }}
            >
              -8%
            </div>
            <div 
              style={{ 
                position: "absolute", 
                bottom: "20px", 
                right: "20px", 
                display: "flex", 
                gap: "12px", 
                alignItems: "center",
                zIndex: 10
              }}
            >
              <img src="/log/ncvb.png" alt="Cert 3" style={{ height: "60px", width: "auto" }} />
              <img src="/log/5.png" alt="Cert 1" style={{ height: "60px", width: "auto" }} />
              <img src="/log/6.png" alt="Cert 2" style={{ height: "60px", width: "auto" }} />
            </div>
            <div 
              style={{ 
                position: "absolute", 
                top: "20px", 
                right: "20px", 
                width: "80px", 
                height: "80px", 
                borderRadius: "50%", 
                overflow: "hidden", 
                border: "4px solid white",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                zIndex: 10
              }}
            >
              <img src="/vusur.png" alt="Vusur Badge" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </motion.div>
          <div className={styles.thumbnailGallery}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={styles.thumbnailPlaceholder} />
            ))}
          </div>
        </div>

        {/* Right: Product Details (Preserving exact original structure) */}
        <div className={styles.productInfo}>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <p style={{ fontSize: "0.85rem", color: "#22c55e", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "8px" }}>
              Sécurité, sérénité et autonomie
            </p>
            <h1 className={styles.productTitle}>Le pilulier connecté <br /> qui alerte vos proches.</h1>
            
            <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "24px", marginBottom: "24px" }}>
              {videoList.map((videoPath, i) => (
                <motion.div 
                  key={i} 
                  onClick={() => setActiveVideo(videoPath)}
                  animate={i === 0 ? { 
                    scale: [1, 1.15, 1],
                    boxShadow: ["0 4px 12px rgba(0,0,0,0.1)", "0 8px 30px rgba(34,197,94,0.9)", "0 4px 12px rgba(0,0,0,0.1)"],
                    borderColor: ["#fff", "#22c55e", "#fff"]
                  } : {}}
                  transition={i === 0 ? { 
                    duration: 1.5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  } : {}}
                  style={{ 
                    width: "64px", 
                    height: "64px", 
                    borderRadius: "50%", 
                    backgroundColor: "#f5f3ef", 
                    border: "2px solid #fff",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    overflow: "hidden",
                    position: "relative"
                  }}
                >
                  <video 
                    src={videoPath} 
                    muted 
                    loop 
                    autoPlay 
                    playsInline
                    style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }}
                  />
                  {/* Play icon overlay */}
                  <div style={{ position: "absolute", zIndex: 2, backgroundColor: "rgba(0,0,0,0.3)", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: "0", height: "0", borderTop: "6px solid transparent", borderBottom: "6px solid transparent", borderLeft: "10px solid #fff", marginLeft: "4px" }} />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className={styles.reviews} style={{ marginTop: '8px', marginBottom: '16px' }}>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#eab308" stroke="none" />
                ))}
              </div>
              <span>4.9/5 sur 2104 avis</span>
            </div>

            <div className={styles.infoBanner}>
              <div className={styles.infoBannerContent}>
                <div className={styles.infoBadge}>
                  <img src="/pharmacie.jpg" alt="Pharmacie" style={{ width: "24px", height: "auto" }} />
                  Approuvé par les pharmaciens
                </div>
                <div className={styles.infoBadge}>
                  <BellRing size={20} color="#3b82f6" />
                  Alertes instantanées
                </div>
                <div className={styles.infoBadge}>
                  <PhoneCall size={20} color="#f59e0b" />
                  Assistance 24h/24
                </div>
                <div className={styles.infoBadge}>
                  <div className={styles.flagIcon} style={{ border: 'none', width: '24px', height: '16px' }}>
                    <div className={styles.flagBlue} />
                    <div className={styles.flagWhite} />
                    <div className={styles.flagRed} />
                  </div>
                  Fabriqué en France
                </div>
              </div>
            </div>
            {/* <p className={styles.productSubtitle} style={{ marginTop: '16px' }}>Une technologie discrète pour une sécurité totale.</p> */}
          </motion.div>

          {/* <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className={styles.description}
          >
            <p>
              Services inclus : Suivi médical personnalisé, rappels automatiques et support 24/7. Une connexion internet est requise.
            </p>
            <div className={styles.benefitsList}>
              <div className={styles.benefitItem}>
                <CheckCircle2 size={20} className={styles.benefitIcon} />
                <span>Distribution automatisée des médicaments</span>
              </div>
              <div className={styles.benefitItem}>
                <CheckCircle2 size={20} className={styles.benefitIcon} />
                <span>Suivi à distance via application mobile</span>
              </div>
              <div className={styles.benefitItem}>
                <CheckCircle2 size={20} className={styles.benefitIcon} />
                <span>Alertes SMS à un proche en cas d’oubli</span>
              </div>
              <div className={styles.benefitItem}>
                <CheckCircle2 size={20} className={styles.benefitIcon} />
                <span>Télésurveillance active 24h/24 et 7j/7</span>
              </div>
            </div>
          </motion.div> */}

          {/* Formats (Kept structure, adapted labels) */}
          {/* <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={styles.optionsSection}
          >
            <span className={styles.optionLabel}>Garantie & Support</span>
            <div className={styles.buttonGroup}>
              <button 
                className={`${styles.optionBtn} ${format === 'standard' ? styles.active : ''}`}
                onClick={() => setFormat('standard')}
              >
                Garantie 2 ans incluse
              </button>
            </div>
          </motion.div> */}

          {/* Durée (Kept structure, adapted labels) */}
          {/* <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={styles.optionsSection}
          >
            <span className={styles.optionLabel}>Engagement</span>
            <div className={styles.buttonGroup}>
              {['12 mois'].map((d) => (
                <button 
                  key={d}
                  className={`${styles.optionBtn} ${duration === d ? styles.active : ''}`}
                  onClick={() => setDuration(d)}
                >
                  {d}
                </button>
              ))}
            </div>
          </motion.div> */}

          {/* Purchase Type (Kept structure, adapted to Achat vs Location) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className={styles.optionsSection}
            style={{ width: "100%", maxWidth: "500px" }}
          >
            <div 
              className={`${styles.purchaseType} ${purchaseType === 'abonnement' ? styles.active : ''}`}
              onClick={() => setPurchaseType('abonnement')}
              style={{ textAlign: "left" }}
            >
              <div className={styles.purchaseTypeHeader}>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span className={styles.purchaseTypeTitle}>Abonnement mensuel</span>
                  <span style={{ fontSize: "0.85rem", color: "#666" }}>Engagement 12 mois</span>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span className={styles.purchaseTypePrice}>29,90 € / mois</span>
                  <div className={styles.discountBadge} style={{ marginTop: "4px" }}>Offre de lancement</div>
                </div>
              </div>
              <div style={{ fontSize: "0.85rem", color: "#4a4a4a", marginTop: "16px", lineHeight: "1.6", borderTop: "1px solid #eee", paddingTop: "16px", textAlign: "left", width: "100%" }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "24px" }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontWeight: "700", marginBottom: "8px", color: "#1a1a1a" }}>Services inclus :</p>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      <li>✓ Suivi médical personnalisé</li>
                      <li>✓ Rappels automatiques</li>
                      <li>✓ Support 24/7</li>
                    </ul>
                  </div>
                  
                  <div style={{ flex: 1 }}>
                    <p style={{ fontWeight: "700", marginBottom: "8px", color: "#1a1a1a" }}>Votre équipement :</p>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      <li>✓ Pilulier connecté</li>
                      <li>✓ Application mobile</li>
                      <li>✓ Support technique</li>
                    </ul>
                  </div>
                </div>

                <p style={{ color: "#15803d", fontWeight: "600", marginTop: "16px" }}>✓ Réglez le premier mois et bénéficiez d’1 mois offert sur votre abonnement.</p>
                <p style={{ marginTop: "8px", color: "#666", fontSize: "0.75rem", fontStyle: "italic" }}>(une connexion internet est requise)</p>
              </div>
            </div>
          </motion.div>

          {/* Promo Note & CTA */}
          <div style={{ marginTop: "16px", width: "100%", maxWidth: "500px" }}>
            <p style={{ fontSize: "0.85rem", color: "#b45309", marginBottom: "8px", fontWeight: "600", textAlign: "center", width: "100%" }}>
              Réduction réservée aux 200 premières précommandes
            </p>
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className={styles.addToCartBtn}
            >
              Ajouter au panier - 29,90 €/mois
            </motion.button>
          </div>
        </div>
      </section>

      {/* Features Banner (Exact initial structure) */}
      <section className={styles.featuresBanner}>
        <div className={styles.container}>
          <div className={styles.featuresGrid}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <Award size={24} />
              </div>
              <span className={styles.featureTitle}>Distribution automatisée</span>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <Smartphone size={24} />
              </div>
              <span className={styles.featureTitle}>Suivi mobile à distance</span>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <BellRing size={24} />
              </div>
              <span className={styles.featureTitle}>Alertes SMS aux proches</span>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <ShieldCheck size={24} />
              </div>
              <span className={styles.featureTitle}>Télésurveillance 24/7</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section / Timeline (Exact initial structure) */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Comment fonctionne Pillqare ?</h2>
            <p className={styles.sectionSubtitle}>
              Un système intelligent conçu pour simplifier la prise de médicaments au quotidien, prévenir les erreurs, et rassurer l'entourage.
            </p>
          </div>

          <div className={styles.timeline}>
            <h3 style={{ fontSize: "1.75rem", fontWeight: "700", textAlign: "center", marginBottom: "32px", color: "#1a1a1a" }}>
              Vos bénéfices au quotidien
            </h3>
            
            <div className={styles.timelineItem}>
              <div className={styles.timelineNumber}>1</div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineTitle}>Rappels automatiques</div>
                <div className={styles.timelineDesc}>
                  Finis les doutes et les oublis. L'appareil prépare et présente les médicaments au moment exact prescrit par le médecin.
                </div>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineNumber}>2</div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineTitle}>Suivi médical personnalisé</div>
                <div className={styles.timelineDesc}>
                  L'application Pillqare vous permet de suivre l'historique des prises à distance, facilitant grandement le travail du personnel médical et des aidants.
                </div>
              </div>
            </div>

            <div className={`${styles.timelineItem} ${styles.recommended}`}>
              <div className={styles.timelineNumber}>3</div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineTitle}>Support 24/7 & Télésurveillance</div>
                <div className={styles.timelineDesc}>
                  Notre équipe est disponible 24h/24. Si le traitement n'est pas pris, nous veillons sur vous et alertons vos proches immédiatement par SMS.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section (Exact initial structure) */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Questions Fréquentes</h2>
            <p className={styles.sectionSubtitle}>
              Retrouvez l'essentiel à savoir sur votre futur pilulier Pillqare.
            </p>
          </div>

          <div className={styles.faqList}>
            {[
              {
                q: "Comment fonctionne l'offre avec 1 mois offert ?",
                a: "Pour célébrer notre passage à la TV, si vous choisissez l'abonnement mensuel avec engagement 12 mois, vous réglez le premier mois aujourd'hui et vous bénéficiez immédiatement du mois suivant offert."
              },
              {
                q: "Comment l'appareil alerte-t-il les proches en cas d'oubli ?",
                a: "En cas d'oubli prolongé, le pilulier connecté déclenche automatiquement des alertes SMS qui sont envoyées aux proches ou à la personne désignée dans votre application."
              },
              {
                q: "Que couvre la Garantie de 2 ans ?",
                a: "Nous offrons une garantie constructeur de 2 ans sur tous nos produits. Elle couvre toute panne technique ou électronique dans le cadre d'une utilisation normale."
              },
              {
                q: "Que se passe-t-il à la fin de mon engagement de location de 12 mois ?",
                a: "La location du pilulier est soumise à un engagement de 12 mois. À l’issue de cette période, le pilulier devra être restitué en bon état, hors usure normale liée à son utilisation."
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className={styles.faqItem}
                onClick={() => toggleFaq(index)}
              >
                <div className={styles.faqQuestion}>
                  <span>{faq.q}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </div>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      style={{ overflow: "hidden" }}
                    >
                      <p className={styles.faqAnswer}>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Minimal Footer to match the texts without breaking the main layout structure */}
      <footer style={{ backgroundColor: "#f8f6f1", padding: "40px 0", borderTop: "1px solid rgba(0,0,0,0.05)", marginTop: "auto" }}>
        <div className={styles.container}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "24px" }}>
            <nav style={{ display: "flex", gap: "16px", flexWrap: "wrap", fontSize: "0.9rem", color: "#4a4a4a" }}>
              <a href="#" style={{ textDecoration: "none", color: "inherit" }}>FAQ</a>
              <a href="#" style={{ textDecoration: "none", color: "inherit" }}>Blog</a>
              <a href="#" style={{ textDecoration: "none", color: "inherit" }}>Contact</a>
              <a href="#" style={{ textDecoration: "none", color: "inherit" }}>Guide d'utilisation</a>
              <a href="#" style={{ textDecoration: "none", color: "inherit" }}>Politique de confidentialité</a>
              <a href="#" style={{ textDecoration: "none", color: "inherit" }}>Mentions légales</a>
              <a href="#" style={{ textDecoration: "none", color: "inherit" }}>CGV</a>
            </nav>
            <div style={{ fontSize: "0.85rem", color: "#666" }}>
              © 2026 - Pillqare - Propulsé par Shopify
            </div>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.9)",
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
            onClick={() => setActiveVideo(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveVideo(null)}
              style={{
                position: "absolute",
                top: "24px",
                right: "24px",
                background: "rgba(255, 255, 255, 0.2)",
                border: "none",
                borderRadius: "50%",
                width: "48px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                cursor: "pointer",
                zIndex: 10000,
                backdropFilter: "blur(10px)"
              }}
            >
              <ArrowRight size={24} />
            </button>

            {/* Video container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              style={{
                position: "relative",
                height: "85vh",
                width: "auto",
                aspectRatio: "9/16",
                backgroundColor: "#000",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0,0,0,0.5)"
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={activeVideo}
                autoPlay
                controls
                playsInline
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

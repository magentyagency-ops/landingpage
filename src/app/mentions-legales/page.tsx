"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function LegalNotice() {
  return (
    <div style={{ backgroundColor: "#ffffff", color: "#1a1a1a", minHeight: "100vh", fontFamily: "sans-serif", padding: "40px 24px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "8px", color: "#666", textDecoration: "none", marginBottom: "40px", fontSize: "0.9rem" }}>
          <ArrowLeft size={18} /> Retour à l&apos;accueil
        </Link>

        <h1 style={{ fontSize: "2.5rem", fontWeight: "800", marginBottom: "24px", letterSpacing: "-0.02em" }}>Mentions légales</h1>
        <p style={{ color: "#666", marginBottom: "48px" }}>Dernière mise à jour : 27 août 2025</p>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "16px" }}>1. Éditeur du site</h2>
          <p style={{ lineHeight: "1.7", color: "#4a4a4a" }}>
            Le présent site est édité par :<br />
            <strong>PIILZ SAS</strong><br /><br />
            • Forme juridique : Société par actions simplifiée (SAS)<br />
            • Capital social : 1 000 €<br />
            • Siège social : 366 route de Darnétal, 76230 Bois-Guillaume, France<br />
            • RCS : Rouen n° 934 540 741<br />
            • SIREN : 934 540 741<br />
            • Code APE/NAF : 46.46Z – Commerce de gros interentreprises de produits pharmaceutiques<br />
            • Président et représentant légal : M. Hanafi Safir<br />
            • Adresse e-mail : safir@piilz.com
          </p>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "16px" }}>2. Hébergement</h2>
          <p style={{ lineHeight: "1.7", color: "#4a4a4a" }}>
            Le présent site est hébergé par :<br />
            <strong>Vercel Inc.</strong><br />
            Adresse : 440 N Barranca Ave #4133 Covina, CA 91723<br />
            Site web : www.vercel.com
          </p>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "16px" }}>3. Propriété intellectuelle</h2>
          <p style={{ lineHeight: "1.7", color: "#4a4a4a" }}>
            L’ensemble du contenu présent sur ce site, incluant, de manière non limitative, les textes, images, graphismes, logos, vidéos, icônes, ainsi que leur mise en forme, sont la propriété exclusive de PIILZ SAS ou de ses partenaires, sauf mentions contraires.<br /><br />
            Toute reproduction, représentation, modification, adaptation ou exploitation, totale ou partielle, de tout élément du site est strictement interdite sans l’autorisation préalable et écrite de PIILZ SAS.
          </p>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "16px" }}>4. Responsabilité</h2>
          <p style={{ lineHeight: "1.7", color: "#4a4a4a" }}>
            PIILZ SAS s’efforce d’assurer au mieux l’exactitude et la mise à jour des informations diffusées sur le site, mais ne saurait garantir l’exactitude, la complétude ou l’actualité des informations fournies.<br /><br />
            En conséquence, l’utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive.<br /><br />
            Le site peut contenir des liens hypertextes vers d’autres sites internet. PIILZ SAS décline toute responsabilité quant au contenu de ces sites tiers, accessibles via ces liens.
          </p>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "16px" }}>5. Données personnelles</h2>
          <p style={{ lineHeight: "1.7", color: "#4a4a4a" }}>
            Les informations concernant la collecte et le traitement des données personnelles des utilisateurs du site sont traitées en conformité avec la réglementation en vigueur.
          </p>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "16px" }}>6. Droit applicable et juridiction compétente</h2>
          <p style={{ lineHeight: "1.7", color: "#4a4a4a" }}>
            Le présent site et ses mentions légales sont soumis au droit français. En cas de litige et à défaut de résolution amiable, les tribunaux compétents de Rouen seront seuls compétents.
          </p>
        </section>

        <footer style={{ borderTop: "1px solid #eee", paddingTop: "40px", marginTop: "80px", textAlign: "center", color: "#999", fontSize: "0.8rem" }}>
          © 2026 PIILZ SAS - Tous droits réservés
        </footer>
      </div>
    </div>
  );
}

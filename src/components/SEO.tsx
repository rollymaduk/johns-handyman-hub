import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { siteMetadata } from "@/config/siteMetadata";

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
}

export function SEO({
  title,
  description,
  canonicalUrl,
  ogType = "website",
  ogImage,
  structuredData,
}: SEOProps) {
  const location = useLocation();
  const finalTitle = title
    ? `${title} | ${siteMetadata.title}`
    : siteMetadata.title;
  const finalDescription = description || siteMetadata.description;
  const currentUrl = `${siteMetadata.siteUrl}${location.pathname}`;
  const canonical = canonicalUrl || currentUrl;
  const ogImg =
    ogImage || `${siteMetadata.siteUrl}${siteMetadata.socialBanner}`;

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={canonical} />

      {/* Keywords */}
      <meta name="keywords" content={siteMetadata.keywords.join(", ")} />

      {/* Open Graph */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImg} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={ogImg} />

      {/* Structured Data JSON-LD */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}

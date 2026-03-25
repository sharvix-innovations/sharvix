import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, url, image, type = "website", schema }) => {
  const siteName = "Sharvix Innovations";
  const defaultTitle = "Sharvix Innovations — Intelligent Tech Partner";
  const defaultDescription = "We build intelligent, scalable, and user-centric digital products that solve real problems and drive sustainable growth.";
  
  const baseUrl = import.meta.env.VITE_APP_URL || "https://sharvix-innovations.netlify.app";
  const defaultImage = `${baseUrl}/favicon.png`; 
  const defaultUrl = baseUrl; 

  const seoTitle = title ? `${title} | ${siteName}` : defaultTitle;
  const seoDescription = description || defaultDescription;
  
  // Ensure URLs are absolute for Open Graph
  const seoUrl = url ? (url.startsWith('http') ? url : `${baseUrl}${url}`) : defaultUrl;
  const seoImage = image ? (image.startsWith('http') ? image : `${baseUrl}${image}`) : defaultImage;

  return (
    <Helmet>
      {/* Basic HTML Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <link rel="canonical" href={seoUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={seoUrl} />
      <meta property="twitter:title" content={seoTitle} />
      <meta property="twitter:description" content={seoDescription} />
      <meta property="twitter:image" content={seoImage} />

      {/* Structured Data JSON-LD Schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;

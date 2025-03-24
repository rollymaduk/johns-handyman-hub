import { useEffect } from 'react';
import { useLocation, useInRouterContext } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { siteMetadata } from '@/config/siteMetadata';

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

export function GoogleTagManager() {
  // Get GTM ID
  const gtmId = siteMetadata.gtmId;
  
  // Always call hooks unconditionally
  const inRouter = useInRouterContext();
  
  // Safely use useLocation hook with a try/catch
  let pathname = '';
  let search = '';
  
  try {
    // Always call useLocation unconditionally
    const location = useLocation();
    if (inRouter) {
      pathname = location.pathname;
      search = location.search;
    }
  } catch (e) {
    // Handle case where useLocation is not available
    console.debug('Router context not available');
  }
  
  // Initialize dataLayer once on mount
  useEffect(() => {
    if (!gtmId) return;
    
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js',
    });
  }, [gtmId]);
  
  // Track page views on route changes
  useEffect(() => {
    if (!gtmId) return;
    if (inRouter && pathname) {
      window.dataLayer.push({
        event: 'pageview',
        page: pathname + search,
      });
    }
  }, [gtmId, inRouter, pathname, search]);

  if (!gtmId) return null;

  return (
    <Helmet>
      <script>
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${gtmId}');`}
      </script>
      <noscript>
        {`<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`}
      </noscript>
    </Helmet>
  );
}
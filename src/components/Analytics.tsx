'use client'
import { useEffect } from 'react';
import Script from 'next/script';

declare global {
    interface Window {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      dataLayer: any[];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      gtag: (...args: any[]) => void;
    }
  }
  
  const GA_TRACKING_ID = 'YOUR_GOOGLE_ANALYTICS_ID';
  
  const Analytics = () => {
    useEffect(() => {
      window.dataLayer = window.dataLayer || [];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', GA_TRACKING_ID);
    }, []);
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}');
        `}
      </Script>
    </>
  );
};

export default Analytics;
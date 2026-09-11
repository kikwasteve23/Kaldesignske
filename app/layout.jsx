import { Space_Grotesk, Figtree } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const brand = Space_Grotesk({
  variable: "--font-brand",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Kaldesigns | Data Analysis, Automation & Software Engineering",
  description:
    "Kaldesigns helps businesses turn messy data into clear decisions with analysis, automation pipelines, and custom software. Based in Kenya, delivering for teams that need reliable systems.",
  keywords: [
    "data analysis",
    "data science",
    "automation",
    "software engineering",
    "Kenya",
    "Kaldesigns",
    "business intelligence",
    "Python",
  ],
  openGraph: {
    title: "Kaldesigns | Data Analysis, Automation & Software Engineering",
    description:
      "Analysis, automation, and software engineering for teams drowning in spreadsheets and manual reporting.",
    url: "https://kaldesigns.vercel.app/",
    siteName: "Kaldesigns",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1WRRPNT4T0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1WRRPNT4T0');
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5B8CJWZH');
          `}
        </Script>

        {/* Voiceflow Widget */}
        <Script id="voiceflow-widget" strategy="lazyOnload">
          {`
            (function(d, t) {
              var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
              v.onload = function() {
                window.voiceflow.chat.load({
                  verify: { projectID: '687193e03a1a0682b85b68f5' },
                  url: 'https://general-runtime.voiceflow.com',
                  versionID: 'production',
                  voice: {
                    url: "https://runtime-api.voiceflow.com"
                  }
                });
              };
              v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
              v.type = "text/javascript";
              s.parentNode.insertBefore(v, s);
            })(document, 'script');
          `}
        </Script>
      </head>
      <body className={`${brand.variable} ${display.variable} ${body.variable} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5B8CJWZH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}

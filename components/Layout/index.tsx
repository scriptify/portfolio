import Head from "next/head";

import Hero from "../Hero";
import Footer from "../Footer";
import CookieConsent from "../CookieConsent";

interface Props {}

const metaTitle = "Maximilian Torggler's Website";
const metaDescription = `I am a Fullstack Web Developer with a focus on React, TypeScript, and Serverless technologies. Follow my journey into the wild desert of modern Fullstack development.`;
const ogImageUrl = "https://maximilian-torggler.dev/og_image.jpg";

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#000000" />
        <link rel="shortcut icon" href="/favicon.png" />
        <title>{metaTitle}</title>
        <meta property="og:title" content={metaTitle} />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="description" content={metaDescription} />
        <meta property="og:description" content={metaDescription} />
        <meta name="twitter:description" content={metaDescription} />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:image" content={ogImageUrl} />
        <meta name="image" content={ogImageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div>
        <Hero />
        <div className="max-w-screen-md mx-auto mt-12 p-2 sm:p-0">
          {children}
        </div>
        <Footer />
      </div>
      <CookieConsent />
    </>
  );
};

export default Layout;

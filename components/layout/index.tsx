import Head from 'next/head';
import { FC } from 'react';
import TopBar from '../top-bar';
import Footer from '../footer';
// import Link from 'next/link';
// import Image from 'next/image';
// import Script from 'next/script';

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
  ogImage?: string;
};

const Layout: FC<LayoutProps> = ({ children, title, ogImage = '' }) => {
  const titleAfter = title ? `${title} | Independent Voter News` : 'Independent Voter News';

  return (
    <div>
      <Head>
        <title>{titleAfter}</title>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta property="og:site_name" content="Independent Voter News" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="News, Breaking News, Arts, Culture, Commentary, Notes, Editorial, Community, Newspaper, leading, nonprofit, information, platform, encourages, people, public, policy, conversation"
        />
        <meta name="twitter:site" content="@ivn" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@ivn" />
        <meta
          name="description"
          content="Independent Voter News (IVN) is the largest network for nonpartisan reform."
        />
        <meta
          property="og:image"
          content={ogImage.length > 0 ? ogImage : `${process.env.NEXT_PUBLIC_SITE_URL}/ivn-default.png`}
        />
      </Head>

      {/* Google tag (gtag.js) v4 */}
      {/* <Script async src="https://www.googletagmanager.com/gtag/js?id=G-YCP1MX2TLG"></Script>
      <Script id="google-analytics-v4">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-YCP1MX2TLG');
        `}
      </Script> */}

      {/* <Script id="pixel-ivn" async src="https://tag.simpli.fi/sifitag/f359222b-59cf-4722-bce5-8a6834416b79"></Script> */}

      {/* <Script id="drip-ivn">
        {`
         var _dcq = _dcq || [];
         var _dcs = _dcs || {};
         _dcs.account = '8754132';
       
         (function() {
           var dc = document.createElement('script');
           dc.type = 'text/javascript'; dc.async = true;
           dc.src = '//tag.getdrip.com/8754132.js';
           var s = document.getElementsByTagName('script')[0];
           s.parentNode.insertBefore(dc, s);
         })();
        `}
      </Script> */}

      <TopBar />
      <main className="container mx-auto mt-4 sm:mt-10 space-y-10">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="w-full">{children}</div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Layout;

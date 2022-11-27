/* eslint-disable */
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GA_TRACKING_ID } from '../utils/gtag';

class CustomDocument extends Document {
  title = 'GreyDot Solutions';
  description = `${this.title} is a web development company in New Delhi that provides web development, app development, web design, DevOps consulting and much more.`;
  keywordsContent = `${this.title} is an IT company providing high end web development, app development and brand services for the international market.`;
  URL = 'https://greydotsolutions.com';
  previewImage = 'https://greydotsolutions.com/images/grey-logo-mobile.png';

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* FOR META TAGS & SEO */}
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <meta name="keywords" content={this.keywordsContent} />
          <meta name="description" content={this.description} />

          {/* Open Graph - Facebook*/}
          <meta property="og:title" content={this.title} key="ogtitle" />
          <meta
            property="og:description"
            content={this.description}
            key="ogdesc"
          />
          <meta property="og:type" content="website" key="ogtype" />
          <meta property="og:url" content={this.URL} key="ogurl" />
          <meta property="og:image" content={this.previewImage} key="ogimage" />
          <meta property="og:site_name" content={this.title} key="ogsitename" />

          {/* Twitter */}
          <meta name="twitter:title" content={this.title} key="twtitle" />
          <meta
            name="twitter:description"
            content={this.description}
            key="twdesc"
          />
          <meta
            property="twitter:image"
            content={this.previewImage}
            key="twimage"
          />
          <meta property="twitter:url" content={this.URL} key="twurl" />

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>

        <body>
          <Main />
          <script src="https://s.pageclip.co/v1/pageclip.js" charSet="utf-8" />
        </body>

        <NextScript />
      </Html>
    );
  }
}

export default CustomDocument;

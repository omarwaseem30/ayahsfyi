import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property='og:title' content='Ayahs.fyi' key='title' />
        <meta
          property='og:description'
          content="The search engine for the Qur'an"
          key='description'
        />
        <meta
          property='og:image'
          content='https://asset.cloudinary.com/dg8qq3czi/d1b4be606fd28e59d8b2fb1170afcf9c'
        />
        <meta name='twitter:card' content='summary_large_image'></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

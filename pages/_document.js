import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          property='og:title'
          content='Search for any Ayah in the Quran'
          key='title'
        />
        <meta
          property='og:description'
          content="The search engine for the Qur'an"
          key='description'
        />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/dg8qq3czi/image/upload/v1672190497/alifvc_zhaz5z.png'
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

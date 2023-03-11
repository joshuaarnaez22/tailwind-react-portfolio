import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "",
              "@type": "Organization",
              name: "My Company",
              url: "",
              logo: "",
              description: "We provide web development services",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Main St",
                addressLocality: "Anytown",
                addressRegion: "CA",
                postalCode: "12345",
                addressCountry: "USA",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-123-456-7890",
                contactType: "customer service",
              },
            }),
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

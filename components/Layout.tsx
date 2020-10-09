import Head from 'next/head';
import React, { FunctionComponent, PropsWithChildren } from 'react';

interface LayoutProps {
  mainClass?: string
  title: string
}

const Layout: FunctionComponent<LayoutProps> = ({ children, mainClass, title }: PropsWithChildren<LayoutProps>) => (
  <div className="d-flex w-100 h-100">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.14.0/css/solid.css"
        integrity="sha384-TN9eFVoW87zV3Q7PfVXNZFuCwsmMwkuOTOUsyESfMS9uwDTf7yrxXH78rsXT3xf0"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.14.0/css/fontawesome.css"
        integrity="sha384-PRy/NDAXVTUcXlWA3voA+JO/UMtzWgsYuwMxjuu6DfFPgzJpciUiPwgsvp48fl3p"
        crossOrigin="anonymous"
      />
      <link rel="preconnect" href="https://use.fontawesome.com" crossOrigin="" />
      <title>{`James Price | Web developer${title ? ` | ${title}` : ''}`}</title>
    </Head>
    <main className={mainClass}>
      {children}
    </main>
  </div>
);
export default Layout;

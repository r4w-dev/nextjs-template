import Head from 'next/head';
import React, { FunctionComponent, PropsWithChildren } from 'react';
import { faCoffee } from '@fortawesome/free-solid-svg-icons/faCoffee';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface LayoutProps {
  mainClass?: string,
  title: string
}

const Layout: FunctionComponent<LayoutProps> = ({ children, mainClass, title }: PropsWithChildren<LayoutProps>) => (
  <div className="d-flex w-100 h-100">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
    <main className={mainClass}>
      {children}
      <FontAwesomeIcon icon={faCoffee} />
    </main>
  </div>
);
export default Layout;

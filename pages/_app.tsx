import React from 'react';
import type { AppProps } from 'next/app';
import '../styles/global.css';
import 'bootstrap-scss/bootstrap.scss';

const MyApp = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default MyApp;

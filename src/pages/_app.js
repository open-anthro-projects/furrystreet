import React from 'react';
import App from 'next/app';
import AppLayout from '../components/base/AppLayout';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return ( 
        <AppLayout>
            <Component {...pageProps} />
        </AppLayout>);
  }
}

export default MyApp;
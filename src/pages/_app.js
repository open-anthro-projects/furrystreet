import React from 'react';
import App from 'next/app';
import AppLayout from '../components/layout/AppLayout';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#fffffa',
        dark: '#f9f9f9',
        contrastText: '#000000',
      },  
    }
  });

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return ( 
        <ThemeProvider theme={theme}>
            <AppLayout>
                <Component {...pageProps} />
            </AppLayout>
        </ThemeProvider> );
  }
}

export default MyApp;
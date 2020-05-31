import React from 'react';
import App from 'next/app';
import AppLayout from '../components/base/AppLayout';
import PropTypes from 'prop-types';
import { Theme } from '../components/base/Theme'
import { ThemeProvider } from '@material-ui/core/styles';

export default function MyApp(props) {
  const [theme, toggleDarkTheme] = Theme();
  const { Component, pageProps} = props;
  

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
    

    return ( 
      <ThemeProvider theme={theme}>
        <AppLayout themeSwitch={toggleDarkTheme}>
            <Component {...pageProps}/>
        </AppLayout>
        </ThemeProvider>);

}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

/*export default MyApp;

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. *//*}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};*/
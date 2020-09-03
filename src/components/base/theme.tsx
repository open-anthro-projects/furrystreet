import { createMuiTheme } from '@material-ui/core/styles';
import { useState } from 'react';
import { blue } from '@material-ui/core/colors';

const lightTheme = {
  palette: {
    primary: {
      light: '#ffffff',
      main: '#f9f9f9',
      dark: '#f1f1f1',
    },
    secondary: blue,
    background: {
      default:'#f9f9f9',
      paper: '#ffffff',
    }
  },
};

const dark2Theme = {
  palette: {
    primary:{
      light: '#212121',
      main: '#181818',
      dark: '#0f0f0f',
    },
    secondary: blue,
    background:{
      default: '#181818',
      paper: '#181818',
    },
    type: 'dark',
    },
};

/*export const Theme = () => {
  const [theme , setTheme] = useState(lightTheme)

  const {palette: {type}} = theme;
  const toggleDarkTheme = () => {
    const updatedTheme = {
      ...theme,
      palette: {
        ...theme.palette,
        type: type === 'light' ? 'dark' : 'light'
      }
    }
    setTheme(updatedTheme)
  }
  return [theme, toggleDarkTheme]
}*/

export const AppTheme = () => {
  const [darkState, setDarkState] = useState(true);
  const palletType = darkState ? dark2Theme.palette : lightTheme.palette;
  const darkTheme = createMuiTheme({
    palette: palletType,

  });
  const handleThemeChange = () => {
    setDarkState(!darkState);
  };
  let tuple: [any, any];
  tuple = [darkTheme, handleThemeChange];
  return tuple;
}

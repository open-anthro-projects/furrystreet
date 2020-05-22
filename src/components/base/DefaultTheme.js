import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

export const DefaultTheme = createMuiTheme({
  palette: {
    primary: {
        main: '#faffff',
    },
    secondary: blue,
    background: {
        default: '#f9f9f9',
        paper: '#faffff',
    }
  },
});

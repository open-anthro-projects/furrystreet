import { AppBar } from '@material-ui/core'
import { Toolbar } from '@material-ui/core'
import { Button }  from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '../nextjs/Link'

const AppLayout = ({ children }) => (
    <CssBaseline>
    <AppBar position="static">
      <Toolbar><Button color="inherit">
          Home
        </Button></Toolbar>
    </AppBar>
  
      <div className="content-wrapper">{children}</div>
  
      <style jsx global>{`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
      `}</style>
    </CssBaseline>
  );
  
  export default AppLayout;


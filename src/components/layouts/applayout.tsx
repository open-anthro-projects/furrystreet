import { AppBar, formatMs } from '@material-ui/core'
import { Toolbar } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { makeStyles } from '@material-ui/core/styles';
import React, { ReactNode } from 'react'
import Brightness4Icon from '@material-ui/icons/Brightness4';
//@ts-ignore
import { signIn, signOut, useSession} from 'next-auth/client'

const drawerWidth = 240;

type Props = {
  themeSwitch: any,
  children?: ReactNode
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.primary.light,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  menuSide: {
   flexGrow: 1
  },
}));

const image = {
  width: 151,
  "verticalAlign": "middle",
}

  const AppLayout = ({ themeSwitch,children }: Props) => {
    const classes = useStyles();
    const [ session, loading ] = useSession()
   
    const [state, setState] = React.useState({
      left: false,
    });
  
    const toggleDrawer = (anchor: string, open: boolean) => (event:any) => {
      if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };

    return (
   
      <div className={classes.root}>
      <CssBaseline/>
      <AppBar position="fixed" className={classes.appBar} elevation={0} color="default">
        <Toolbar>
          <section className={classes.menuSide}> 
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer('left',!state['left'])}>
            <MenuIcon />
          </IconButton>
            <img style={image} src="/logo.png" alt="my image" />
          </section>
          {!session && <>
            Not signed in <br/>
            <button onClick={signIn}>Sign in</button>
            </>}
            {session && <>
            Signed in as {session.user.email} <br/>
            <button onClick={signOut}>Sign out</button>
            </>}
          <IconButton edge="start" color="inherit" aria-label="switch" onClick={themeSwitch}>
            <Brightness4Icon />
          </IconButton>
        </Toolbar>
      </AppBar>
          <SwipeableDrawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
            className={classes.drawer}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <AppBar position="sticky" className={classes.appBar} elevation={0} color="default">
        <Toolbar> 
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer('left',!state['left'])}>
            <MenuIcon />
          </IconButton>
          <img style={image} src="/logo.png" alt="my image" />
        </Toolbar>
      </AppBar>
       </SwipeableDrawer>
        {children}
      </div>
    )};
    
  export default AppLayout;
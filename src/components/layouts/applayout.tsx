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
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { blue } from '@material-ui/core/colors';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


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
  signin: {
    backgroundColor: blue[500],
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginRight: theme.spacing(1),
  },
  avatar:{
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  button:{
    minWidth: 'initial',
    borderRadius: '50%',
    padding: "8px 8px",
  }
}));

const image = {
  width: 151,
  "verticalAlign": "middle",
}

  const AppLayout = ({ themeSwitch,children }: Props) => {
    const classes = useStyles();
    const [ session, loading ] = useSession()
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
   
    const [state, setState] = React.useState({
      left: false,
    });

    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: React.MouseEvent<EventTarget>) => {
      if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
        return;
      }
  
      setOpen(false);
    };

    const handleLogout = (event: React.MouseEvent<EventTarget>) => {
      if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
        return;
      }
      setOpen(false);
      signOut();
    };
  
    function handleListKeyDown(event: React.KeyboardEvent) {
      if (event.key === 'Tab') {
        event.preventDefault();
        setOpen(false);
      }
    }
  
    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
      if (prevOpen.current === true && open === false) {
        anchorRef.current!.focus();
      }
  
      prevOpen.current = open;
    }, [open]);
  
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
            <img style={image} src="/logo5.webp" alt="my image" />
          </section>
          <IconButton edge="start" color="inherit" aria-label="switch" className={classes.menuButton} onClick={themeSwitch}>
            <Brightness4Icon />
          </IconButton>
          {!session && <>
            <Button variant="outlined" color="secondary" onClick={signIn} >
            <Avatar className={classes.signin}/> Sign in
            </Button>
            </>}
            {session && <>
              <Button
              className={classes.button}
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
              <Avatar srcSet={session.user.image} className={classes.avatar}/>
              </Button>
              <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal placement="bottom-end">
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleLogout}> <ExitToAppIcon/> Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
            </>}
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
            disableBackdropTransition={!iOS} 
            disableDiscovery={iOS}
          >
            <AppBar position="sticky" className={classes.appBar} elevation={0} color="default">
        <Toolbar> 
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer('left',!state['left'])}>
            <MenuIcon />
          </IconButton>
          <img style={image} src="/logo5.webp" alt="my image" />
        </Toolbar>
      </AppBar>
       </SwipeableDrawer>
        {children}
      </div>
    )};
    
  export default AppLayout;

  
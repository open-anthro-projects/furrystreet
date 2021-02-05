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
import { signIn, signOut, useSession } from 'next-auth/client'
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
import { useRouter } from 'next/router'


const drawerWidth = 240;

type Props = {
  themeSwitch: any
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
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  button: {
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
  const [session, loading] = useSession()
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const router = useRouter()

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

  const toggleDrawer = (anchor: string, open: boolean) => (event: any) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  
 


  return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar} elevation={0} color="default">
          <Toolbar>
            <section className={classes.menuSide}>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer('left', !state['left'])}>
                <MenuIcon />
              </IconButton>
              <img style={image} src="/logo6.webp" alt="my image" />
              <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="151" height="auto" viewBox="0 0 1920.000000 1080.000000" preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,1080.000000) scale(0.100000,-0.100000)" fill="blue" stroke="none" >
<path d="M285 7279 c-168 -25 -214 -79 -234 -278 -15 -146 -15 -3356 0 -3453 18 -117 58 -187 125 -221 16 -8 58 -23 94 -33 63 -19 294 -19 9260 -22 6134 -2 9227 1 9290 7 215 23 285 74 321 236 12 49 14 361 14 1775 0 1609 -1 1719 -18 1780 -20 75 -59 136 -102 162 -17 9 -57 25 -90 35 -58 17 -432 18 -9330 19 -5209 1 -9296 -2 -9330 -7z m17255 -348 c944 -7 956 -7 1020 -29 69 -22 114 -60 143 -118 36 -70 38 -170 35 -1559 -3 -1257 -5 -1364 -21 -1411 -36 -106 -120 -155 -297 -174 -136 -13 -17528 -14 -17649 0 -131 15 -186 35 -235 83 -76 76 -71 -27 -71 1562 0 1196 2 1428 14 1469 30 102 124 159 290 175 102 10 15390 12 16771 2z"/>
<path d="M970 6729 c-114 -9 -199 -38 -234 -80 -58 -68 -56 -22 -56 -1369 0 -1365 -3 -1304 62 -1367 41 -40 96 -60 201 -73 103 -13 17233 -14 17322 -1 98 14 143 30 181 63 75 66 69 -44 69 1378 l0 1275 -25 50 c-40 80 -95 107 -253 125 -100 12 -17128 11 -17267 -1z m9242 -400 c134 -27 337 -112 361 -151 8 -12 -6 -44 -58 -134 -37 -66 -69 -120 -70 -122 -2 -2 -31 16 -65 39 -199 136 -521 143 -601 13 -49 -80 -31 -193 40 -257 21 -19 130 -81 242 -137 247 -125 343 -184 408 -256 83 -91 117 -222 100 -391 -22 -217 -148 -373 -354 -439 -193 -61 -463 -45 -685 43 -70 28 -200 91 -200 97 0 6 141 260 150 269 4 5 30 -7 57 -27 165 -118 420 -169 560 -111 139 58 166 234 52 342 -19 17 -132 83 -251 147 -120 63 -232 125 -250 137 -168 117 -229 231 -229 423 0 161 39 269 131 368 79 84 186 135 328 158 67 11 259 4 334 -11z m-7254 -141 l-3 -133 -342 -3 -343 -2 0 -245 0 -245 285 0 285 0 0 -135 0 -135 -285 0 -285 0 0 -405 0 -405 -185 0 -185 0 0 920 0 920 530 0 531 0 -3 -132z m8442 -138 l0 -180 188 -2 187 -3 3 -122 3 -123 -191 0 -190 0 0 -387 c0 -214 5 -406 10 -428 14 -61 48 -85 123 -85 40 0 77 7 106 20 24 11 47 20 52 20 10 0 109 -179 109 -198 0 -18 -92 -59 -178 -78 -54 -12 -106 -15 -195 -12 -107 4 -130 8 -183 32 -107 48 -162 125 -183 256 -6 38 -11 232 -11 463 l0 397 -75 0 -76 0 3 123 3 122 73 3 72 3 0 144 0 143 93 21 c50 11 119 27 152 35 33 7 70 14 83 15 l22 1 0 -180z m5480 0 l0 -180 185 0 c216 0 198 14 193 -145 l-3 -100 -187 -3 -188 -2 0 -406 c0 -430 3 -459 48 -483 30 -16 130 -13 177 5 22 8 47 17 55 20 11 4 28 -22 63 -91 26 -52 47 -100 47 -105 0 -16 -76 -50 -157 -71 -106 -27 -268 -26 -357 1 -94 29 -144 71 -186 155 l-35 69 -3 453 -3 453 -75 0 -75 0 3 123 3 122 73 3 72 3 0 144 c0 142 0 145 23 150 125 29 286 63 305 64 l22 1 0 -180z m-2800 -185 c254 -76 377 -284 383 -648 l2 -132 -402 -3 -403 -2 0 -59 c0 -83 32 -179 72 -218 47 -44 87 -61 167 -73 128 -18 259 13 344 82 22 17 42 26 47 22 5 -5 34 -54 66 -108 l58 -99 -35 -29 c-46 -39 -160 -94 -239 -115 -91 -25 -329 -25 -420 0 -214 58 -342 193 -400 421 -27 108 -36 278 -20 402 41 330 201 525 472 574 73 13 242 4 308 -15z m1517 10 c214 -41 355 -184 408 -415 11 -46 20 -135 23 -227 l4 -153 -406 0 -406 0 0 -27 c0 -60 22 -158 45 -203 45 -88 119 -122 270 -123 117 0 186 20 266 79 27 20 52 35 54 33 2 -2 31 -51 65 -108 l62 -105 -33 -28 c-47 -38 -161 -93 -239 -115 -82 -22 -327 -25 -410 -4 -106 26 -197 76 -263 143 -74 75 -106 132 -143 253 -26 85 -28 101 -28 285 0 170 3 205 22 275 93 340 361 506 709 440z m-9872 -10 c51 -14 75 -25 133 -63 10 -7 5 -39 -29 -158 -23 -82 -46 -153 -50 -158 -5 -6 -18 -1 -31 12 -42 38 -108 62 -178 62 -78 0 -138 -25 -192 -78 l-38 -36 0 -483 0 -483 -175 0 -175 0 0 695 0 695 170 0 170 0 0 -92 c0 -89 1 -92 16 -68 32 48 99 112 139 132 77 40 147 47 240 23z m1241 -24 c35 -17 67 -37 70 -46 6 -15 -61 -280 -77 -307 -6 -9 -14 -7 -31 9 -93 87 -274 83 -368 -8 l-40 -39 0 -485 0 -485 -175 0 -175 0 0 695 0 695 168 -2 167 -3 3 -88 3 -88 33 48 c40 58 113 112 175 130 71 20 171 10 247 -26z m6007 9 c29 -11 63 -28 75 -38 l24 -18 -43 -155 c-23 -85 -44 -156 -45 -158 -1 -1 -18 9 -36 23 -114 86 -287 73 -376 -28 l-32 -37 0 -480 0 -479 -172 2 -173 3 0 690 0 690 168 3 167 2 0 -97 0 -98 26 40 c57 85 113 129 194 152 57 16 154 9 223 -17z m-9311 -472 l3 -493 25 -49 c36 -72 72 -88 180 -83 89 4 123 15 179 63 l31 26 0 514 0 514 173 -2 172 -3 3 -692 2 -693 -170 0 -170 0 0 82 0 82 -57 -55 c-107 -104 -190 -134 -343 -127 -191 9 -301 96 -358 283 -13 41 -16 142 -19 588 l-4 537 175 0 175 0 3 -492z m3842 445 c8 -27 73 -230 145 -453 72 -223 135 -427 142 -453 l12 -48 28 108 c36 139 246 871 254 883 4 6 73 10 161 10 126 0 154 -3 154 -14 0 -14 -85 -276 -396 -1221 -80 -242 -161 -474 -181 -514 -51 -107 -120 -173 -208 -200 -76 -24 -201 -28 -287 -10 -52 11 -158 53 -158 63 0 6 101 199 110 209 3 4 28 -2 55 -14 68 -30 144 -23 186 17 39 37 59 77 94 184 l28 86 -257 696 c-141 383 -256 701 -256 707 0 8 54 11 179 11 l179 0 16 -47z"/>
<path d="M13762 5629 c-29 -15 -51 -36 -70 -68 -23 -40 -27 -59 -30 -148 l-4 -103 222 0 223 0 -6 88 c-8 108 -20 152 -54 193 -37 44 -80 59 -165 59 -54 0 -84 -5 -116 -21z"/>
<path d="M15334 5631 c-76 -34 -100 -85 -111 -233 l-6 -88 228 0 227 0 -7 83 c-12 152 -44 218 -118 246 -46 18 -166 13 -213 -8z"/>
</g>
</svg>
            </section>
            <IconButton edge="start" color="inherit" aria-label="switch" className={classes.menuButton} onClick={themeSwitch}>
              <Brightness4Icon />
            </IconButton>
            {!router.pathname.includes("/auth/") && <>
              {!session && <>
                <Button variant="outlined" color="secondary" onClick={signIn} >
                  <Avatar className={classes.signin} /> Sign in
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
                  <Avatar srcSet={session.user.image} className={classes.avatar} />
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
                            <MenuItem onClick={handleLogout}> <ExitToAppIcon /> Logout</MenuItem>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </>}</>}
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
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer('left', !state['left'])}>
                <MenuIcon />
              </IconButton>
              <img style={image} src="/logo6.webp" alt="my image" />
            </Toolbar>
          </AppBar>
        </SwipeableDrawer>
        {children}
      </div>
  )
};

export default AppLayout;


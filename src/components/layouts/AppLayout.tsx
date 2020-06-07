import { AppBar, formatMs } from '@material-ui/core'
import { Toolbar } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { makeStyles } from '@material-ui/core/styles';
import React, { ReactNode } from 'react'
import {Switch , FormControlLabel} from '@material-ui/core';

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
}));

  const AppLayout = ({ themeSwitch,children }: Props) => {
    const classes = useStyles();
   
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
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer('left',!state['left'])}>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6'>
            ...
          </Typography>
          <FormControlLabel control={<Switch onClick={themeSwitch}/>} label="theme switch" />
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
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer('left',!state['left'])}>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6'>
            ...
          </Typography>
        </Toolbar>
      </AppBar>
       </SwipeableDrawer>
        {children}
      </div>
    )};
    
  export default AppLayout;
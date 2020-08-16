import Grid from '@material-ui/core/Grid';
import { Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core'
import React, { ReactNode } from 'react'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Link from '../nextjs/link';
import { RSA_PSS_SALTLEN_AUTO } from 'constants';

type Props = {
  children?: ReactNode
}

const useStyles = makeStyles((theme) => ({
    appBar: {
      top: 0, 
      backgroundColor: theme.palette.primary.main,
    },
    cover_image:{
      backgroundColor: theme.palette.primary.main,
    },
    container:{
      minHeight: "100vh",
      backgroundColor: theme.palette.primary.dark,
    },
    toolbar: {
      minHeight: 112, 
     [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: { 
      minHeight: 96, 
     }, 
     [theme.breakpoints.up('sm')]: { 
      minHeight: 128, 
     },
      alignItems: 'flex-start',
      flexWrap: 'wrap'
    },
    hover:{
      // $disabled is a reference to the local disabled
      // rule within the same style sheet.
      // By using &, we increase the specificity.
      '&$hover:hover': {
      },
    },
    tabs:{
      display: 'flex',
      flexGrow: 1,
      flex: '0 0 100%'
    },
    title:{
      minHeight: 56, 
      [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: { 
       minHeight: 48, 
      }, 
      [theme.breakpoints.up('sm')]: { 
       minHeight: 64, 
      },
      display: 'flex',
      alignItems: 'center',
      flexGrow: 1,
      flex: '0 0 100%',
    }
  }));

  const cover_image = {
    height: 'calc(100vw / 6.2 - 1px)',
    width: '100%',
    objectFit: 'cover' as 'cover',
  }

  const page_image = {
    width: 240,
    "verticalAlign": "middle",
  }

  function a11yProps(index: any) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

    const PostOfficeLayout  = ({ children } : Props) => {
        const classes = useStyles();
        const [value, setValue] = React.useState(0);
        const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
          setValue(newValue);
        };
        return (
    <Grid
    container
    direction="column"
    justify="flex-start"
    alignItems="stretch"
    className={classes.container}>
      <Toolbar/>
      <Grid item className={classes.cover_image}>
          <img style={cover_image} src="/test.jpg" alt="my image" />
        </Grid>
        <AppBar position="sticky" className={classes.appBar} elevation={0} color="default">
            <Toolbar className={classes.toolbar}> 
            <div className={classes.title}>
              <img style={page_image} src="/postofficelogo.png" alt="my image" />
            </div>
            <div className={classes.tabs}>
              <Tabs value={value}  onChange={handleChange} aria-label="simple tabs example">
                <Tab label="Home" className={classes.hover} underline="none" {...a11yProps(0)} component={Link} href="/post-office"/>
                <Tab label="FAQ" className={classes.hover} underline="none" {...a11yProps(1)} component={Link} href="/post-office/faq"/>
              </Tabs>
            </div>  
            </Toolbar>
        </AppBar>
          {children}
    </Grid>
  )};

  //export const getLayout = (page: React.ReactNode) => <PostOfficeLayout>{page}</PostOfficeLayout>;

  export default PostOfficeLayout;
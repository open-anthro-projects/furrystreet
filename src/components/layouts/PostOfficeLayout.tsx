import Grid from '@material-ui/core/Grid';
import { Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core'
import { Typography } from '@material-ui/core';
import React, { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const useStyles = makeStyles((theme) => ({
    appBar: {
      top: 56, 
     [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: { 
      top: 48, 
     }, 
     [theme.breakpoints.up('sm')]: { 
      top: 64, 
     },
      backgroundColor: theme.palette.primary.main,
    },
    title:{
      backgroundColor: theme.palette.primary.main,
    },
  }));

  const image = {
    height: 'calc(100vw / 6.2 - 1px)',
    width: '100%',
    objectFit: 'cover' as 'cover',
  }

    const PostOfficeLayout  = ({ children } : Props) => {
        const classes = useStyles();
        return (
    <Grid
    container
    direction="column"
    justify="center"
    alignItems="stretch">
        <Toolbar/>
        <Grid item className={classes.title}>
          <img style={image} src="/test.jpg" alt="my image" />
        </Grid>
        <AppBar position="sticky" className={classes.appBar} elevation={0} color="default">
            <Toolbar> 
            <Typography variant='h6'>
                ...
            </Typography>
            </Toolbar>
        </AppBar>
        {children}
    </Grid>
  )};

  
  export default PostOfficeLayout;
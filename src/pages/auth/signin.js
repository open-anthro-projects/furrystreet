import React from 'react'
import { csrfToken } from 'next-auth/client'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  }
}));

export default function SignIn({ csrfToken }) {
  const classes = useStyles();
  return (
    <Grid item className={classes.content}>
      <form method='post' action='/api/auth/signin/email'>
        <input name='csrfToken' type='hidden' defaultValue={csrfToken}/>
        <label>
          Email address
          <input type='text' id='email' name='email'/>
        </label>
        <button type='submit'>Sign in with Email</button>
      </form>
    </Grid>
  )
}

SignIn.getInitialProps = async (context) => {
  return {
    csrfToken: await csrfToken(context)
  }
}
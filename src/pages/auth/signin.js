import React from 'react'
import { csrfToken } from 'next-auth/client'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AuthLayout from '../../components/layouts/auth/layout'
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    minWidth: 300,
  },
  item:{
    marginBottom: 20,
  },
  form:{
    width: "inherit",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function SignIn({ csrfToken }) {
  const classes = useStyles();
  return (
    <Grid item className={classes.content}>
      <Grid container
        direction="column"
        justify="flex-start"
        alignItems="flex-start">
        <form className={classes.form} method='post' action='/api/auth/signin/email'>
        <Grid item className={classes.item}>
          <input name='csrfToken' type='hidden' defaultValue={csrfToken}/>
          <TextField
            id="email"
            label="Email"
            type="text"
            autoComplete="current-email"
            variant="outlined"
            name="email"
            color="secondary"
            fullWidth={true}
          />
        </Grid>
        <Grid item className={classes.item}>
          <Button type='submit' variant="contained" color="secondary" fullWidth={true}>
            Sign in with Email
          </Button>
        </Grid>
        </form>
      </Grid>
    </Grid>
  )
}

SignIn.getInitialProps = async (context) => {
  return {
    csrfToken: await csrfToken(context)
  }
}

SignIn.Layout = AuthLayout;
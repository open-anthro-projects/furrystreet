import Head from '../../components/base/head'
import PostOfficeLayout from '../../components/layouts/postofficelayout'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
//@ts-ignore
import { signIn, signOut, useSession, getToken} from 'next-auth/client'

const useStyles = makeStyles((theme) => ({
    content: {
      bottom: 0,
      flexGrow: 1,
      padding: theme.spacing(3),
    },
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

const Faq = () => {
    const classes = useStyles();
    const [ session, loading ] = useSession()
    return (
      <>
        <Head title="FAQ"></Head>
        <Grid item className={classes.content}>
            <p>This is the Faq page</p>
            {!session && <>
            Not signed in <br/>
            <button onClick={signIn}>Sign in</button>
            </>}
            {session && <>
            Signed in as {session.user.email} <br/>
            <button onClick={signOut}>Sign out</button>
    </>}
        </Grid>
      </>
    );
  }

  Faq.Layout = PostOfficeLayout;

  export default Faq;
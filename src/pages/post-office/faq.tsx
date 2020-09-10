import Head from '../../components/base/head'
import PostOfficeLayout from '../../components/layouts/postofficelayout'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
//@ts-ignore

const useStyles = makeStyles((theme) => ({
    content: {
      bottom: 0,
      flexGrow: 1,
      padding: theme.spacing(3),
    }
  }));

const Faq = () => {
    const classes = useStyles();
    return (
      <>
        <Head title="FAQ"></Head>
        <Grid item className={classes.content}>
            <p>This is the Faq page</p>
        </Grid>
      </>
    );
  }

  Faq.Layout = PostOfficeLayout;

  export default Faq;
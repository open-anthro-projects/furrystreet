import Grid from '@material-ui/core/Grid';
import React, { ReactNode } from 'react'
import { Toolbar } from '@material-ui/core';

type Props = {
    children?: ReactNode
  }

const DefaultLayout = ({ children } : Props) => (
    <Grid
    container
    direction="column"
    justify="center"
    alignItems="stretch">
        <Toolbar/>
        {children}
    </Grid>
  );
  
  export const getLayout = (page: React.ReactNode) => <DefaultLayout>{page}</DefaultLayout>

  export default DefaultLayout;
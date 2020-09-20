import Grid from '@material-ui/core/Grid';
import React, { ReactNode } from 'react'
import { Toolbar } from '@material-ui/core';

type Props = {
    children?: ReactNode
  }

const AuthLayout = ({ children } : Props) => (
    <Grid
    container
    direction="column"
    justify="flex-start"
    alignItems="center">
        <Toolbar/>
        {children}
    </Grid>
  );

  export default AuthLayout;
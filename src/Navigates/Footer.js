import { Box, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';

const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        backgroundColor: 'secondary',
        paddingTop: '1rem',
        paddingBottom: '1rem',
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="inherit" variant="h5">
              All copyrights are reserved
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="primary" variant="subtitle1">
              {`${new Date().getFullYear()} | Digital Prestige `}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;

import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Box } from '@mui/material';
import { PrimaryNavigation } from '../Navigation/PrimaryNavigation';

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  content: {
    flex: 1,
    display: 'flex',
  },
  main: {
    flex: 1,
    backgroundColor: theme.palette.neutral[10],
  },
}));

interface InitiativeCardLayoutProps {
  children: React.ReactNode;
}

export const InitiativeCardLayout: React.FC<InitiativeCardLayoutProps> = ({ children }) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      <PrimaryNavigation />
      <Box className={classes.content}>
        <Box className={classes.main}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};
import React from 'react';
import { Box } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { PrimaryNavigation } from '../Navigation/PrimaryNavigation';
import SecondaryNavigation from '../Navigation/SecondaryNavigation';

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  content: {
    display: 'flex',
    flex: 1,
  },
  secondary: {
    width: 240,
    paddingTop: theme.spacing(6),
    borderRight: `1px solid ${theme.palette.neutral[40]}`,
  },
  main: {
    flex: 1,
    backgroundColor: theme.palette.neutral[10],
    padding: theme.spacing(4),
  },
}));

interface InitiativeSetupLayoutProps {
  children: React.ReactNode;
}

export const InitiativeSetupLayout: React.FC<InitiativeSetupLayoutProps> = ({ children }) => {
  const { classes } = useStyles();

  // Example sections for the SecondaryNavigation. Update as needed.
  const sections = [
    {
      title: 'Setup',
      items: [
        { label: 'Details', to: '/initiative/setup/details' },
        { label: 'Budgets & Costs', to: '/initiative/setup/budgets' },
        { label: 'Book of Work', to: '/initiative/setup/book-of-work' },
      ],
    },
    {
      title: 'Planning',
      items: [
        { label: 'Timeline', to: '/initiative/setup/timeline' },
        { label: 'Resources', to: '/initiative/setup/resources' },
        { label: 'Dependencies', to: '/initiative/setup/dependencies' },
      ],
    },
    {
      title: 'Documentation',
      items: [
        { label: 'Requirements', to: '/initiative/setup/requirements' },
        { label: 'Technical Specs', to: '/initiative/setup/technical' },
        { label: 'Guidelines', to: '/initiative/setup/guidelines' },
      ],
    },
  ];

  return (
    <Box className={classes.root}>
      <PrimaryNavigation />
      <Box className={classes.content}>
        <Box className={classes.secondary}>
          <SecondaryNavigation sections={sections} />
        </Box>
        <Box className={classes.main}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};
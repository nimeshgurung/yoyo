import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Box, Divider, Typography } from '@mui/material';
import SecondaryNavigationItem from './SecondaryNavigationItem';

interface NavigationSection {
  title?: string;
  items: {
    label: string;
    to: string;
  }[];
}

interface SecondaryNavigationProps {
  sections: NavigationSection[];
}

const useStyles = makeStyles()((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
    height: '100%',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
  },
  sectionTitle: {
    padding: theme.spacing(0, 2),
  },
  navigationList: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(0.5),
  },
}));

const SecondaryNavigation: React.FC<SecondaryNavigationProps> = ({ sections }) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      {sections.map((section, index) => (
        <React.Fragment key={section.title || `section-${index}`}>
          {index > 0 && <Divider />}
          <div className={classes.section}>
            {section.title && (
              <Typography
                variant="caption2"
                color="neutral.60"
                className={classes.sectionTitle}
              >
                {section.title}
              </Typography>
            )}
            <div className={classes.navigationList}>
              {section.items.map((item) => (
                <SecondaryNavigationItem
                  key={item.to}
                  label={item.label}
                  to={item.to}
                />
              ))}
            </div>
          </div>
        </React.Fragment>
      ))}
    </Box>
  );
};

export default SecondaryNavigation;
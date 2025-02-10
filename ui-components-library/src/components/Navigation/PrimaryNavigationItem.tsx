import React from 'react';
import { NavLink } from 'react-router';
import { makeStyles } from 'tss-react/mui';
import { Typography } from '@mui/material';

const useStyles = makeStyles()((theme) => {
  // Omit '@font-face' from typography.caption
  const { '@font-face': _ignore, ...caption } = theme.typography.caption;
  return {
    navItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textDecoration: 'none',
      color: theme.palette.text.secondary,
      gap: theme.spacing(0.5), // 4px gap between icon and label
    },
    iconWrapper: {
      width: theme.spacing(8),       // e.g., 32px if spacing unit is 4px
      height: theme.spacing(8),
      padding: theme.spacing(2),       // 8px padding
      borderRadius: theme.shape.borderRadius, // use theme token for border radius (usually 4px)
      display: 'flex',
      justifyContent: 'center',
      alignSelf: 'center',
      alignItems: 'center',
      boxSizing: 'border-box',
      overflow: 'hidden',
      transition: 'all 0.2s ease-in-out', // smoother hover effect
      '&:hover': {
        backgroundColor: theme.palette.background.paper,
        border: `1px solid ${theme.palette.divider}`,
        boxShadow: '0px 2px 1px -1px rgba(28, 28, 28, 0.08)',
      },
    },
    activeIconWrapper: {
      backgroundColor: theme.palette.background.paper,
      border: `1px solid ${theme.palette.divider}`,
      boxShadow: '0px 2px 1px -1px rgba(28, 28, 28, 0.08)',
    },
    icon: {
      width: theme.spacing(4), // e.g., 16px if spacing unit is 4px
      height: theme.spacing(4),
      fontSize: 16,
      color: theme.palette.text.secondary,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    label: {
      ...caption,
      fontSize: 11,
      lineHeight: '14px',
      letterSpacing: '0.22px',
      color: theme.palette.text.secondary,
      textAlign: 'center',
      width: '100%',
    },
  };
});

interface PrimaryNavigationItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
}

export const PrimaryNavigationItem: React.FC<PrimaryNavigationItemProps> = ({
  icon,
  label,
  to
}) => {
  const { classes, cx } = useStyles();

  return (
    <NavLink to={to} className={classes.navItem}>
      {({ isActive }) => (
        <div className={classes.navItem}>
          <div
            className={cx(
              classes.iconWrapper,
              isActive && classes.activeIconWrapper
            )}
          >
            <div className={classes.icon}>{icon}</div>
          </div>
          <Typography className={classes.label} variant="caption">
            {label}
          </Typography>
        </div>
      )}
    </NavLink>
  );
};
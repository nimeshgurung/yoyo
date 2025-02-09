import React from 'react';
import { NavLink } from 'react-router';
import { makeStyles } from 'tss-react/mui';
import { Typography } from '@mui/material';

const useStyles = makeStyles()((theme) => ({
  navItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.text.secondary,
    gap: theme.spacing(1),
    textDecoration: 'none',
  },
  iconWrapper: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    padding: theme.spacing(2),
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    overflow: 'hidden',
    '&:hover': {
      backgroundColor: theme.palette.neutral.white,
      border: `1px solid ${theme.palette.neutral[40]}`,
      boxShadow: '0px 2px 1px -1px rgba(28, 28, 28, 0.08)',
    },
  },
  activeIconWrapper: {
    backgroundColor: theme.palette.neutral.white,
    border: `1px solid ${theme.palette.neutral[40]}`,
    boxShadow: '0px 2px 1px -1px rgba(28, 28, 28, 0.08)',
  },
  icon: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    fontSize: 16,
    color: theme.palette.neutral[60],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 11,
    lineHeight: '14px',
    letterSpacing: '0.22px',
    color: theme.palette.neutral[70],
    width: '100%',
    textAlign: 'center',
    fontFamily: theme.typography.fontFamily,
    fontWeight: 400,
  },
}));

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
        <div className={cx(classes.navItem)}>
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
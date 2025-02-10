import React from 'react';
import { NavLink } from 'react-router';
import { makeStyles } from 'tss-react/mui';
import { Typography } from '@mui/material';

interface SecondaryNavigationItemProps {
  label: string;
  to: string;
}

const useStyles = makeStyles()((theme) => ({
  container: {
    height: theme.spacing(8),
    minWidth: 184,
    padding: theme.spacing(2),
    overflow: 'hidden',
    display: 'inline-flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    textDecoration: 'none', // Remove default anchor underline
    borderTop: '1px solid transparent',
    borderBottom: '1px solid transparent',
    '&:hover': {
      textDecoration: 'none',
      background: theme.palette.neutral.white,
      boxShadow: '0px 2px 1px -1px rgba(28, 28, 28, 0.08)',
      borderTop: `1px solid ${theme.palette.neutral[40]}`,
      borderBottom: `1px solid ${theme.palette.neutral[40]}`,
    },
    '&:focus': {
      outline: 'none', // Remove browser default focus outline
    },
  },
  active: {
    background: 'white',
    boxShadow: '0px 2px 1px -1px rgba(28, 28, 28, 0.08)',
    borderTop: `1px solid ${theme.palette.neutral[40]}`,
    borderBottom: `1px solid ${theme.palette.neutral[40]}`,
  },
  iconLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1.5),
    flex: '1 1 0',
    height: theme.spacing(2.5),
    padding: theme.spacing(0.25),
    justifyContent: 'flex-start',
  },
}));

const SecondaryNavigationItem: React.FC<SecondaryNavigationItemProps> = ({ label, to }) => {
  const { classes } = useStyles();
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <NavLink
      to={to}
      end
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={({ isActive }: { isActive: boolean }) =>
        `${classes.container} ${isActive ? classes.active : ''}`
      }
    >
      {({ isActive }: { isActive: boolean }) => (
        <div className={classes.iconLabel}>
          <Typography
            variant="caption"
            sx={{
              fontWeight: isActive || isHovered ? 500 : 400,
              color: isActive || isHovered ? 'neutral.100' : 'neutral.70',
            }}
          >
            {label}
          </Typography>
        </div>
      )}
    </NavLink>
  );
};

export default SecondaryNavigationItem;
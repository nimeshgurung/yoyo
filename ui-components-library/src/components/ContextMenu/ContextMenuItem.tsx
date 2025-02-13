import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Box, Typography } from '@mui/material';

const useStyles = makeStyles()((theme) => ({
  root: {
    width: '100%',
    height: theme.spacing(8),
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    transition: theme.transitions.create(['background-color']),
    '&:hover': {
      backgroundColor: theme.palette.blue[40],
    },
  },
  iconLabel: {
    flex: '1 1 0',
    height: theme.spacing(4),
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
  },
  label: {
    color: theme.palette.neutral.white,
    ...theme.typography.caption2,
  },
  shortcut: {
    color: theme.palette.neutral[50],
    ...theme.typography.caption2,
  },
}));

export interface ContextMenuItemProps {
  icon?: React.ReactNode;
  label: string;
  shortcut?: string;
  onClick?: () => void;
}

export const ContextMenuItem: React.FC<ContextMenuItemProps> = ({
  icon,
  label,
  shortcut,
  onClick,
}) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.root} onClick={onClick}>
      <Box className={classes.iconLabel}>
        {icon && <Box>{icon}</Box>}
        <Typography className={classes.label}>{label}</Typography>
      </Box>
      {shortcut && <Typography className={classes.shortcut}>{shortcut}</Typography>}
    </Box>
  );
};
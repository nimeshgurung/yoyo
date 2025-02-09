import React from 'react';
import Chip, { ChipProps } from '@mui/material/Chip';
import { makeStyles } from 'tss-react/mui';
import { Typography } from '@mui/material';

interface StatusChipProps extends ChipProps {
  // The chip accepts any icon or label through the standard ChipProps,
  // making it generic and reusable.
}

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'inline-flex',
    height: '20px', // var(--space-7, 20px)
    padding: '0px 8px 0px 4px', // padding: top 0, right 8px, bottom 0, left 4px
    alignItems: 'center',
    gap: '4px', // var(--space-2, 4px)
    flexShrink: 0,
    borderRadius: '4px', // var(--border-radius-1, 4px)
    border: `1px solid ${theme.palette.neutral[40]}`, // var(--color-border-standard, #E4E4E4)
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    '&:hover': {
      backgroundColor: theme.palette.neutral[20],
    },
  },
  label: {
    textAlign: 'center',
    padding: '0',
  },
  muiIcon: {
    marginLeft: '0 !important',
    marginRight: '0 !important',
    fontSize: '12px !important',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export const StatusChip: React.FC<StatusChipProps> = ({ icon, label, ...rest }) => {
  const { classes } = useStyles();

  return (
    <Chip
      icon={icon ? icon : undefined}
      label={<Typography variant='overline' color='neutral.70'>{label}</Typography>}
      className={classes.root}
      classes={{ icon: classes.muiIcon, label: classes.label }}
      {...rest}
    />
  );
};

export default StatusChip;
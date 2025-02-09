import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Typography } from '@mui/material';

const useStyles = makeStyles()((theme) => ({
  root: {
    width: theme.spacing(14), // 56px
    height: theme.spacing(3.5), // 14px
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

interface DateChipProps {
  date?: string;
  className?: string;
}

export const DateChip: React.FC<DateChipProps> = ({
  date = 'DD MMM YY',
  className
}) => {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.root, className)}>
      <Typography variant='overline' color='neutral.60'>
        {date}
      </Typography>
    </div>
  );
};
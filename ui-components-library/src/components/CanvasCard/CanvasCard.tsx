import React from 'react';
import { Paper, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import { RAGStatusChip } from '../RAGStatusChip/RAGStatusChip';
import { DateChip } from '../DateChip/DateChip';
import TeamNameChip from '../AttributeChip/AttributeChip';
import { theme } from '../../theme/theme';
import StatusChip from '../StatusChip/StatusChip';

interface CanvasCardProps {
  type: 'Key Result' | 'Objective'; // extend as needed
  icon?: string;
  status?: 'planned' | 'in-progress';
  ragStatus?: 'green' | 'amber' | 'red';
  lastUpdated?: string;
  name?: string;
  teamName?: string;
  teamInitial?: string;
  date?: string;
  progress?: number;
  onAddClick?: () => void;
}

const useStyles = makeStyles()((theme) => ({
  card: {
    width: '336px',
    backgroundColor: theme.palette.neutral.white,
    boxShadow: '0px 1px 2px rgba(28, 28, 28, 0.12)',
    borderRadius: theme.spacing(2),
    overflow: 'hidden',
  },
  canvasCardHeader: {
    height: '36px',
    padding: '6px 8px 6px 6px',
    backgroundColor: theme.palette.neutral[10],
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  iconLabel: {
    flex: '1 1 0',
    height: '24px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: theme.spacing(1.5),
  },
  signpostingIcon: {
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    width: '16px',
    height: '16px',
    textAlign: 'center',
    color: theme.palette.neutral[70],
    fontSize: '16px',
    fontFamily: theme.typography.fontFamily,
    fontWeight: 400,
    lineHeight: '16px',
    letterSpacing: '0.32px',
  },
  cardType: {
    color: theme.palette.neutral[70],
  },
  content: {
    padding: `${theme.spacing(4)} ${theme.spacing(5)} ${theme.spacing(5)} ${theme.spacing(5)}`,
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(4),
  },
  statusBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: theme.spacing(1),
  },
  statusTags: {
    display: 'flex',
    gap: theme.spacing(1),
  },
  name: {
    color: theme.palette.neutral[70],
    fontSize: 12,
    lineHeight: theme.spacing(4),
    letterSpacing: 0.24,
  },
  attributes: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leading: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
  },
  progress: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    color: theme.palette.neutral[60],
    fontSize: 11,
    fontWeight: 500,
    lineHeight: theme.spacing(3.5),
  },
  progressCircle: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    borderRadius: '50%',
    border: `1px solid ${theme.palette.blue[50]}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export const CanvasCard: React.FC<CanvasCardProps> = ({
  type = 'Key Result',
  icon = '📈',
  status = 'planned',
  ragStatus = 'green',
  lastUpdated = 'Just now',
  name = 'Name',
  teamName = 'TEAM NAME',
  teamInitial = 'C',
  date = 'DD MMM YY',
  progress = 0,
}) => {
  const { classes } = useStyles();

  return (
    <Paper className={classes.card} elevation={0}>
      <div className={classes.canvasCardHeader}>
        <div className={classes.iconLabel}>
          <div className={classes.signpostingIcon}>
            <Typography component="span" className={classes.iconText}>
              {icon}
            </Typography>
          </div>
          <Typography variant="subtitle2" className={classes.cardType}>
            {type}
          </Typography>
        </div>
      </div>

      <div className={classes.content}>
        <div className={classes.statusBar}>
          <div className={classes.statusTags}>
            <StatusChip icon={<CalendarTodayIcon />} label={status.toUpperCase()} />
            <RAGStatusChip status={ragStatus} label={status.toUpperCase()} />
          </div>
          <Typography variant="overline" color="neutral.60">
            {lastUpdated}
          </Typography>
        </div>

        <Typography className={classes.name}>{name}</Typography>

        <div className={classes.attributes}>
          <div className={classes.leading}>
            <TeamNameChip
              name={teamName}
              dotColor={theme.palette.purple[20]}
              dotChar={teamInitial}
            />
            <DateChip date={date} />
          </div>

          <div className={classes.progress}>
            <div className={classes.progressCircle} />
            <span>{progress}%</span>
          </div>
        </div>
      </div>
    </Paper>
  );
};